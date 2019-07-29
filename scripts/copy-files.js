/* eslint-disable no-console */
import path from 'path'
import fse from 'fs-extra'
import glob from 'glob'

const packagePath = process.cwd()
const srcPath = path.join(packagePath, './src')
const buildPath = path.join(packagePath, './dist')

async function createModulePackages({ from, to }) {
  const directoryPackages = glob
    .sync('*/index.ts', { cwd: from })
    .map(path.dirname)

  await Promise.all(
    directoryPackages.map(async directoryPackage => {
      const packageJson = {
        sideEffects: false,
        module: path.join('../esm', directoryPackage, 'index.js'),
        typings: './index.d.ts',
      }
      const packageJsonPath = path.join(to, directoryPackage, 'package.json')

      const [typingsExist] = await Promise.all([
        fse.exists(path.join(to, directoryPackage, 'index.d.ts')),
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ])

      if (!typingsExist) {
        throw new Error(`index.d.ts for ${directoryPackage} is missing`)
      }

      return packageJsonPath
    }),
  )
}

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(__dirname, '../package.json'),
    'utf8',
  )

  const { nyc, ...packageDataOther } = JSON.parse(packageData)

  const minimalPackage = {
    ...packageDataOther,
    name: '@allthings/elements',
    main: './index.js',
    module: './esm/index.js',
    typings: './index.d.ts',
    types: './index.d.ts',
    'jsnext:main': './esm/index.js',
    private: false,
    scripts: {},
  }

  const buildPath = path.resolve(__dirname, '../dist/package.json')
  const data = JSON.stringify(minimalPackage, null, 2)
  await fse.writeFile(buildPath, data)

  console.log(`Created package.json in ${buildPath}`)
}

async function copyFiles(to) {
  const files = ['README.md']
  await Promise.all(files.map(file => fse.copy(file, to + '/' + file)))
}

async function run() {
  try {
    await copyFiles(buildPath)
    await createPackageFile()
    await createModulePackages({ from: srcPath, to: buildPath })
  } catch (err) {
    console.log('fail')
    console.error(err)
    process.exit(1)
  }
}

run()
