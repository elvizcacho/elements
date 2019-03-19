import babel from 'rollup-plugin-babel'
import includePaths from 'rollup-plugin-includepaths'
import cleanup from 'rollup-plugin-cleanup'

const plugins = [
  includePaths({ extensions: ['.js', '.json'] }),
  babel(),
  cleanup(),
]

export default {
  plugins,
  preserveModules: true,
  // some stuff got lost with treeshaking, so keep it for now
  treeshake: false,
  input: [
    './src/index.js',
    // bundled separately to not import the 3rd party packages by default
    './src/behaviour/CDNIntlProvider.js',
    './src/molecules/Calendar.js',
  ],
  output: [
    {
      dir: 'build/cjs',
      format: 'cjs',
    },
    {
      dir: 'build',
      format: 'esm',
    },
  ],
}
