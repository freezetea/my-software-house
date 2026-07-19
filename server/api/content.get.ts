import { readCmsContent } from '../utils/cmsStorage'

export default defineEventHandler(async () => {
  try {
    return await readCmsContent()
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Unable to read CMS database',
      data: error instanceof Error ? error.message : error,
    })
  }
})
