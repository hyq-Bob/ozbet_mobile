// postcss.config.js

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 100, // 基准值，1rem 等于 16px
      propList: ['*'],
    },
  },
};
