export default defineEventHandler((event) => {
  deleteCookie(event, 'kodakode_admin_session', { path: '/' })
  return { ok: true }
})

