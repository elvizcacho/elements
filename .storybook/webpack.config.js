module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader?target=es5'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
