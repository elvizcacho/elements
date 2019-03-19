import path from 'path'
import fs from 'fs'
import glob from 'glob'
import pkg from '../package'

process.chdir(path.resolve(__dirname, '..'))

const ignored = pkg.ignoredMissingImports

const allFiles = glob.sync('src/**/!(*.test).{js,jsx}')

const existingComponents = allFiles
  .filter(file => !ignored.includes(file))
  .map(file => file.replace(/^src/, '.').replace(/\.jsx?$/, ''))

const allExports = fs.readFileSync('src/index.js', 'utf-8')
const exportedComponents = allExports
  .split('\n')
  .map(line => {
    const match = line.match(/export \S+ from '(\S+)'/)

    return match ? match[1] : undefined
  })
  .filter(Boolean)

const all = new Set(existingComponents)
const used = new Set(exportedComponents)
const diff = (a, b) => new Set([...a].filter(x => !b.has(x)))

const missing = Array.from(diff(all, used))

if (missing.length > 0) {
  console.warn(
    'Following files are not being exported and therefore not being picked up. Did you forget to export them?'
  )
  missing.forEach(m => console.warn(`- ${m}`))
  console.warn(
    'If they are only used internally and should not be exposed, add them to the "ignoredMissingImports" field in the package.json.'
  )
}
