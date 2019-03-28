import { generateMockClass } from '../generator'
import * as path from 'path'

const targetFolder = path.join(__dirname, './')

generateMockClass(
  path.join(__dirname, './abstract.ts'),
  path.join(targetFolder, './__generated__'),
  "UserRepository",
)

// generateMockClass(
//   path.join(__dirname, './abstract.ts'),
//   path.join(targetFolder, './__generated__'),
//   "Elastic",
// )

// generateMockClass(
//   path.join(__dirname, './fixtures/prisma.ts'),
//   path.join(targetFolder, './__generated__'),
//   "Prisma",
// )
