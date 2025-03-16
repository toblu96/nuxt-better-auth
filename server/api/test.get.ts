import { requireAuth } from '../utils/require-auth'

export default defineEventHandler(async (event) => {
  await requireAuth(event)
  return { ok: true }
})
