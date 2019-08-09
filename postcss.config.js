module.exports = (env, argv) => {
  if(env.webpack.mode === 'production') {
    return {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          browsers: 'last 2 versions',
        },
        'cssnano': {},
      },
    }
  }
  else {
    return {
      plugins: {
        'postcss-import': {},
      },
    }
  }
};