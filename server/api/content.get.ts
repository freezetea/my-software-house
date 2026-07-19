import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const dataPath = join(process.cwd(), 'data', 'cms.json')

export default defineEventHandler(async () => {
  try {
    const file = await readFile(dataPath, 'utf8')
    return JSON.parse(file)
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Unable to read CMS database',
      data: error instanceof Error ? error.message : error,
    })
  }
})
