import glob from 'glob'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'
import { withCustomConfig } from 'react-docgen-typescript'

const writeFile = promisify(fs.writeFile)
const globber = promisify(glob)
const { parse } = withCustomConfig('./tsconfig.json')

const FILE_TYPE = '.tsx'

const [_, __, arg1] = process.argv

const propToRow = prop => {
  const { name, required, description, defaultValue, type } = prop
  console.log(type)
  return `|${name}${required ? ' **(required)**' : ''}|${type.name
    .split('|')
    .map(value => value.trim())
    .filter(value => required === false && value !== 'undefined')
    .join(', ')}|${description || ''}${
    defaultValue ? `<br>Default: ${defaultValue.value}` : ''
  }`
}

async function main() {
  try {
    const files = (await globber(arg1 || `src/**/*${FILE_TYPE}`)).filter(
      path => path.indexOf(`test${FILE_TYPE}`) === -1,
    )
    await Promise.all(
      files.map(async file => {
        try {
          const [docs] = parse(file)
          console.log(docs)
          docs.displayName = docs.displayName || path.basename(file, FILE_TYPE)

          const docMarkdown = `<!-- 
This is an auto-generated markdown. 
You can change it in "${file}" and run build:docs to update this file.
-->
# ${docs.displayName || ''}
${docs.description || ''}
## Usage
| Name        | Type           | Description  |
| ----------- |:--------------:| ------------:|
${
  docs.props
    ? Object.values(docs.props)
        .filter(
          value =>
            typeof value.parent === 'undefined' ||
            value.parent.fileName.startsWith('src/'),
        )
        .map(propToRow)
        .join('\n')
    : '*No properties to pass*'
}
`

          return writeFile(
            path.join(
              __dirname,
              '..',
              file.replace('src/', 'doc/reference/').replace(FILE_TYPE, '.md'),
            ),
            docMarkdown,
            { flag: 'w+' },
          )
        } catch (e) {
          console.log(e)
          console.log('Could not find React in ' + file)
          return null
        }
      }),
    )
  } catch (e) {
    console.log(e)
  }
}

main()
