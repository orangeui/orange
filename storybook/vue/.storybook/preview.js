// Import Docs styles, they also already import Orange styles
import "!style-loader!css-loader!sass-loader!../../../site/assets/styles/styles.scss";

import Vue from'vue';

// Import Storybook addons
import { addParameters, addDecorator } from "@storybook/vue";
import { withA11y } from '@storybook/addon-a11y';
import orangeTheme from './orangeTheme';

// Add padding around stories
const paddedList = () => {
  return {
    template: '<div class="p-4"><story/></div>',
  };
};

// Add options for stories
addParameters({
  docs: { inlineStories: true },
  showRoots: true,
  iframeHeight: '60px',
  options: {
    theme: orangeTheme,
    storySort: (a, b) => {
      return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
});

// Apply addons to stories
addDecorator(paddedList);
addDecorator(withA11y);