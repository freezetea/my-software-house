import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const dataPath = join(process.cwd(), 'data', 'cms.json')

function assertArray(value: unknown, name: string) {
  if (!Array.isArray(value)) {
    throw createError({ statusCode: 400, statusMessage: `${name} must be an array` })
  }
}

export default defineEventHandler(async (event) => {
  const adminToken = process.env.ADMIN_TOKEN
  if (adminToken) {
    const requestToken = getHeader(event, 'x-admin-token')
    if (requestToken !== adminToken) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid admin token' })
    }
  }

  const body = await readBody(event)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Invalid CMS payload' })
  }

  assertArray(body.partners, 'partners')
  assertArray(body.testimonials, 'testimonials')
  assertArray(body.services, 'services')
  assertArray(body.blogPosts, 'blogPosts')

  const payload = {
    banner: body.banner || {},
    partners: body.partners,
    testimonials: body.testimonials,
    services: body.services,
    blogPosts: body.blogPosts,
    updatedAt: new Date().toISOString(),
  }

  await mkdir(dirname(dataPath), { recursive: true })
  await writeFile(dataPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  return { ok: true, updatedAt: payload.updatedAt }
})
