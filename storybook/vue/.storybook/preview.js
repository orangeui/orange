import "!style-loader!css-loader!sass-loader!../../../src/scss/src/styles.scss";
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