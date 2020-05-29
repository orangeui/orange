module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  preset: "@vue/cli-plugin-unit-jest",

  // need to add this for Unit testing purposes otherwise there are CSS issues
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx"
  },

  // Enable lodash or any other global module
  setupFiles: ["./setup-jest.js"]
};
