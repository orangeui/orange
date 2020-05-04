import '@orange-ui/orange/dist/css/orange.css';
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