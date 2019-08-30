module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'awesome-typescript-loader?target=es5',
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
