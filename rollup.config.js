import babel from 'rollup-plugin-babel'
import includePaths from 'rollup-plugin-includepaths'

const plugins = [
  includePaths({ extensions: ['.js', '.jsx', '.json'] }),
  babel(),
]

export default {
  plugins,
  preserveModules: true,
  input: './src/index.js',
  output: [
    {
      dir: 'build/cjs',
      format: 'cjs',
    },
    {
      dir: 'build/esm',
      format: 'esm',
    },
  ],
}
