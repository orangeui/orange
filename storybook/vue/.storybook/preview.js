// Import Docs styles, they also already import Orange styles
import "!style-loader!css-loader!sass-loader!../../../site/assets/styles/styles.scss";

import Vue from'vue';
import _ from 'lodash';

/*
* Import Directives
* */
import AutoExpand from '../src/modules/directives/AutoExpand'

/*
* Use Directives
* */
Vue.directive(AutoExpand)

// Lodash register
Vue.prototype._ = _

import { addParameters, addDecorator } from "@storybook/vue";
import orangeTheme from './orangeTheme';

const paddedList = () => {
  return {
    template: '<div class="p-4"><story/></div>',
  };
};

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

addDecorator(paddedList);