<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Toggle</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A Toggle allows users to <mark>decide on a state of an object</mark>.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="toggle_basic">
      <ul slot="body" class="docs__simple-list">
        <li>
          <form class="form">
            <div class="form__item">
              <div class="toggle is-checked">
                <div class="toggle__button">
                  <input type="checkbox" id="toggle_basic" class="toggle__input" checked>
                  <label class="toggle__label" for="toggle_basic"></label>
                </div>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </docs-item>

    <!-- With a label  -->
    <docs-item title="With a label" :code="toggle_label">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="form__item">
            <div class="toggle toggle--label is-checked">
              <div class="toggle__button">
                <input type="checkbox" id="toggle_with_label" class="toggle__input">
                <label class="toggle__label" for="toggle_with_label">Label</label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </docs-item>

    <!-- Sizes -->
    <docs-item title="Large" :code="toggle_large">
      <form slot="body">
        <div class="form__item">
          <div class="toggle toggle--label toggle--large is-checked">
            <div class="toggle__button">
              <input type="checkbox" id="toggle_large" class="toggle__input">
              <label class="toggle__label" for="toggle_large"></label>
            </div>
            <div>
              <label class="toggle__text">Label</label>
              <div class="toggle__value">Enabled</div>
            </div>
          </div>
          <div class="form__description">Description text</div>
        </div>
      </form>
    </docs-item>

    <!-- Colors  -->
    <docs-item title="Colors" :code="toggle_colors">
      <ul slot="body" class="docs__simple-list">
        <li v-for="color in toggle_colors_array">
          <div class="form__item">
            <div class="toggle toggle--color-primary is-checked" :class="[ color ? `toggle--color-${color}` : '' ]">
              <div class="toggle__button">
                <input type="checkbox" id="toggle_color" class="toggle__input">
                <label class="toggle__label" for="toggle_color"></label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </docs-item>

    <!-- Toggle usage  -->
    <docs-item title="Usage">
      <table class="table table--compact table--celled" slot="body">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
            <th>Possible values</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>To use it with label set <code>.toggle--label</code> class</td>
            <td><code>toggle--label</code></td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Set with <code>.toggle--color-{color}</code> class</td>
            <td>See <a href="/colors">Colors</a> page</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>Set with <code>.toggle--large</code> class</td>
            <td><code>large</code></td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Set with <code>.is-disabled</code> on <code>.toggle</code> and put <code>disabled</code> to input</td>
            <td><code>is-disabled</code></td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </docs-item>
  </div>
</template>

<script>
// Import js for textarea
if (process.browser) {
  require('@/../src/js/src/toggle.js');
}

export default {
  name: 'DocsToggle',

  data () {
    return {
      toggle_colors_array: [
        '',
        'secondary',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        'black',
        'gray'
      ],
      toggle_basic: `<form class="form">
  <div class="form__item">
    <div class="toggle is-checked">
      <div class="toggle__button">
        <input type="checkbox" id="toggle_basic" class="toggle__input" checked>
        <label class="toggle__label" for="toggle_basic"></label>
      </div>
    </div>
  </div>
</form>`,
      toggle_label: `<form class="form">
  <div class="form__item">
    <div class="toggle toggle--label is-checked">
      <div class="toggle__button">
        <input type="checkbox" id="toggle_with_label" class="toggle__input">
        <label class="toggle__label" for="toggle_with_label">Label</label>
      </div>
    </div>
  </div>
</form>`,
      toggle_large: `<form class="form">
  <div class="form__item">
    <div class="toggle toggle--label toggle--large is-checked">
      <div class="toggle__button">
        <input type="checkbox" id="toggle_large" class="toggle__input" checked>
        <label class="toggle__label"></label>
      </div>
      <div>
        <label class="toggle__text" for="toggle_large">Label</label>
        <div class="toggle__value">On</div>
      </div>
    </div>
    <div class="form__description">Description text</div>
  </div>
</form>`,
      toggle_colors: `<form class="form">
  <div class="form__item">
    <div class="toggle toggle--color-{color}">
      <div class="toggle__button">
        <input type="checkbox" id="toggle_color" class="toggle__input">
        <label class="toggle__label" for="toggle_color"></label>
      </div>
    </div>
  </div>
</form>`
    }
  }
}
</script>
