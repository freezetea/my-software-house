import { isAdminSession } from '../../utils/adminAuth'

export default defineEventHandler((event) => {
  return { authenticated: isAdminSession(event) }
})

