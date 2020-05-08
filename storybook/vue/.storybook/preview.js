// Import Orange styles
import "!style-loader!css-loader!sass-loader!../../../src/scss/src/styles.scss";

// Import Docs styles
import "!style-loader!css-loader!sass-loader!../../../site/assets/styles/styles.scss";

const paddedList = () => {
  return {
    template: '<div class="p-4"><story/></div>',
  };
};

addParameters({
  options: {
    name: 'Orange Vue'
  },
  docs: { inlineStories: true },
  iframeHeight: '60px',
});

addDecorator(paddedList);