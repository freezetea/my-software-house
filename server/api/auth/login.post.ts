import { createAdminSessionToken, getAdminCredentials } from '../../utils/adminAuth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const credentials = getAdminCredentials()

  if (body?.username !== credentials.username || body?.password !== credentials.password) {
    throw createError({ statusCode: 401, statusMessage: 'Username atau password salah' })
  }

  setCookie(event, 'kodakode_admin_session', createAdminSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  return { ok: true }
})

