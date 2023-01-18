module.exports = {
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
    //   config.module.rules.push({
    //     test: /\.mdx/,
    //     use: [
    //       options.defaultLoaders.babel,
    //       {
    //         loader: '@mdx-js/loader',
    //         options: pluginOptions.options,
    //       },
    //     ],
      return config
    },
  }