import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const dataPath = join(process.cwd(), 'data', 'cms.json')
const cmsKey = process.env.CMS_KV_KEY || 'kodakode:cms'
const memoryKey = '__kodakodeCmsContent'

const defaultCmsContent = {
  banner: {
    titlePhrases: [
      'Proper technology<br>brings proper solutions',
      'Custom website<br>development',
      'Mobile app<br>solutions',
      'Your idea.<br>Our technology.',
    ],
    subtitle: 'Proper technology brings proper solutions. We build web, app, and software systems that help your business look credible, run smoother, and grow faster.',
    primaryCta: "Let's get started",
    secondaryCta: 'View our work',
  },
  partners: [],
  testimonials: [],
  services: [],
  blogPosts: [],
}

function getMemoryContent() {
  return (globalThis as unknown as Record<string, unknown>)[memoryKey]
}

function setMemoryContent(payload: unknown) {
  ;(globalThis as unknown as Record<string, unknown>)[memoryKey] = payload
}

function getKvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) return null

  return {
    url: url.replace(/\/$/, ''),
    token,
  }
}

async function kvCommand<T>(command: unknown[]): Promise<T> {
  const config = getKvConfig()
  if (!config) {
    throw new Error('KV storage is not configured')
  }

  const response = await fetch(config.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok) {
    const message = result?.error || result?.message || response.statusText
    throw new Error(`KV request failed: ${message}`)
  }

  if (result?.error) {
    throw new Error(`KV request failed: ${result.error}`)
  }

  return result?.result as T
}

async function readFileContent() {
  const file = await readFile(dataPath, 'utf8')
  return JSON.parse(file)
}

async function writeFileContent(payload: unknown) {
  await mkdir(dirname(dataPath), { recursive: true })
  await writeFile(dataPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
}

export async function readCmsContent() {
  const memoryContent = getMemoryContent()
  if (memoryContent) {
    return memoryContent
  }

  if (getKvConfig()) {
    try {
      const value = await kvCommand<string | null>(['GET', cmsKey])
      if (value) {
        const parsed = typeof value === 'string' ? JSON.parse(value) : value
        setMemoryContent(parsed)
        return parsed
      }
    } catch (error) {
      console.error('Failed to read CMS content from KV. Falling back to bundled JSON.', error)
    }
  }

  try {
    const fileContent = await readFileContent()
    setMemoryContent(fileContent)
    return fileContent
  } catch (error) {
    console.error('Failed to read CMS content from file. Falling back to default content.', error)
    setMemoryContent(defaultCmsContent)
    return defaultCmsContent
  }
}

export async function writeCmsContent(payload: unknown) {
  setMemoryContent(payload)

  if (getKvConfig()) {
    await kvCommand(['SET', cmsKey, JSON.stringify(payload)])
    return
  }

  try {
    await writeFileContent(payload)
  } catch (error) {
    console.error('Failed to write CMS content to file. Keeping content in memory.', error)
  }
}
