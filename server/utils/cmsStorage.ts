import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const dataPath = join(process.cwd(), 'data', 'cms.json')
const cmsKey = process.env.CMS_KV_KEY || 'kodakode:cms'

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
  if (getKvConfig()) {
    try {
      const value = await kvCommand<string | null>(['GET', cmsKey])
      if (value) {
        return typeof value === 'string' ? JSON.parse(value) : value
      }
    } catch (error) {
      console.error('Failed to read CMS content from KV. Falling back to bundled JSON.', error)
    }
  }

  return readFileContent()
}

export async function writeCmsContent(payload: unknown) {
  if (getKvConfig()) {
    await kvCommand(['SET', cmsKey, JSON.stringify(payload)])
    return
  }

  if (process.env.VERCEL) {
    throw new Error('CMS storage is not configured for Vercel. Add KV_REST_API_URL and KV_REST_API_TOKEN environment variables.')
  }

  await writeFileContent(payload)
}
