import { createHash } from 'node:crypto'

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'kodakode2026',
    secret: process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || 'kodakode-local-session',
  }
}

export function createAdminSessionToken() {
  const credentials = getAdminCredentials()
  return createHash('sha256')
    .update(`${credentials.username}:${credentials.password}:${credentials.secret}`)
    .digest('hex')
}

export function isAdminSession(event: any) {
  return getCookie(event, 'kodakode_admin_session') === createAdminSessionToken()
}

