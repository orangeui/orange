module.exports = {
  presets: [
    ["@vue/cli-plugin-babel/preset", 
      {
        /* Fix for h not rendering issue*/
        /* Disabled due to clash between core-js versions in Storybook / Vue CLI */
        useBuiltIns: false,
        /* Disabled due to clash with Storybook MDX */
        /* Use false if using normal .js stories */
        jsx: true
      }
    ]
  ]
};
