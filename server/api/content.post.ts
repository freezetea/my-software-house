import { isAdminSession } from '../utils/adminAuth'
import { writeCmsContent } from '../utils/cmsStorage'

function assertArray(value: unknown, name: string) {
  if (!Array.isArray(value)) {
    throw createError({ statusCode: 400, statusMessage: `${name} must be an array` })
  }
}

export default defineEventHandler(async (event) => {
  const adminToken = process.env.ADMIN_TOKEN
  if (adminToken) {
    const requestToken = getHeader(event, 'x-admin-token')
    if (requestToken !== adminToken && !isAdminSession(event)) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid admin token' })
    }
  } else if (!isAdminSession(event)) {
    throw createError({ statusCode: 401, statusMessage: 'Login required' })
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

  await writeCmsContent(payload)

  return { ok: true, updatedAt: payload.updatedAt }
})
