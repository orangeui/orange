// Import Orange styles
import "!style-loader!css-loader!sass-loader!../../../src/scss/src/styles.scss";

// Import Docs styles
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

const paddedList = () => {
  return {
    template: '<div class="p-4"><story/></div>',
  };
};

addParameters({
  docs: { inlineStories: true },
  iframeHeight: '60px',
});

addDecorator(paddedList);