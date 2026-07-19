import { isAdminSession } from '../utils/adminAuth'

export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname

  if (path === '/admin' || path.startsWith('/admin/')) {
    if (!isAdminSession(event)) {
      return sendRedirect(event, `/admin-login?redirect=${encodeURIComponent(path)}`, 302)
    }
  }
})

