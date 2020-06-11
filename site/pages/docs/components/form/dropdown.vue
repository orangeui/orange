<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Dropdown</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A dropdown field is used to <mark>elicit a response</mark> from a user, offering a <mark>list of options</mark> to choose from.</p>
        <p>The Dropdown component comes with an optional Search mechanism, that enables users to quickly filter the available options by name.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="dropdown_html">
      <form class="o-form" slot="body">
        <div class="o-form__item">
          <div class="o-form-dropdown">
            <label for="form_dropdown" class="o-form-dropdown__label">Label</label>
            <input id="form_dropdown" type="text" name="form_dropdown" class="o-form-dropdown__input" >
            <div class="o-form-dropdown__text">Placeholder</div>
            <div class="o-form-dropdown__icon">
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <div class="o-form-dropdown__content">
              <ul class="o-form-dropdown__menu">
                <li>Google</li>
                <li>Word</li>
                <li>Advertisement</li>
                <li>Competitor</li>
                <li>Other</li>
              </ul>
            </div>
          </div>
          <div class="o-form__description">Description of the dropdown field</div>
        </div>
      </form>
    </docs-item>

    <!-- Size large  -->
    <docs-item title="Large" :code="dropdown_large_html">
      <form class="o-form o-form--large" slot="body">
        <div class="o-form__item">
          <div class="o-form-dropdown">
            <label for="form_dropdown_large" class="o-form-dropdown__label">Label</label>
            <input id="form_dropdown_large" type="text" name="form_dropdown_large" class="o-form-dropdown__input">

            <div class="o-form-dropdown__text">Placeholder</div>
            <div class="o-form-dropdown__icon">
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <div class="o-form-dropdown__content">
              <ul class="o-form-dropdown__menu">
                <li>Google</li>
                <li>Word</li>
                <li>Advertisement</li>
                <li>Competitor</li>
                <li>Other</li>
              </ul>
            </div>
          </div>
          <div class="o-form__description">Description of the dropdown field</div>
        </div>
      </form>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage">
      <table class="o-table o-table--compact o-table--celled" slot="body">
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
          <td>size</td>
          <td>Set with <code>.o-form--large</code> on <code>.o-form</code></td>
          <td><code>large</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Set with <code>.is-disabled</code> on <code>.o-form-dropdown</code></td>
          <td><code>disabled</code></td>
          <td>string</td>
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
  require('@/../src/js/src/dropdown.js');
}

export default {
  name: 'DocsDropdown',

  data () {
    return {
      dropdown_html: `<form class="o-form">
  <div class="o-form__item">
    <div id="form_dropdown" class="o-form-dropdown">
      <label for="form_dropdown" class="o-form-dropdown__label">Label</label>
      <input id="form_dropdown" type="text" name="form_dropdown" class="o-form-dropdown__input" >
      <div class="o-form-dropdown__text">Placeholder</div>
      <div class="o-form-dropdown__icon">
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
      </div>
      <div class="o-form-dropdown__content">
        <ul class="o-form-dropdown__menu">
          <li>Google</li>
          <li>Word</li>
          <li>Advertisement</li>
          <li>Competitor</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
    <div class="o-form__description">Description of the dropdown field</div>
  </div>
</form>`,
      dropdown_large_html: `<form class="o-form o-form--large">
  <div class="o-form__item">
    <div id="form_dropdown_large" class="o-form-dropdown">
      <label for="form_dropdown_large" class="o-form-dropdown__label">Label</label>
      <input id="form_dropdown_large" type="text" name="form_dropdown_large" class="o-form-dropdown__input">

      <div class="o-form-dropdown__text">Placeholder</div>
      <div class="o-form-dropdown__icon">
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
      </div>
      <div class="o-form-dropdown__content">
        <ul class="o-form-dropdown__menu">
          <li>Google</li>
          <li>Word</li>
          <li>Advertisement</li>
          <li>Competitor</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
    <div class="o-form__description">Description of the dropdown field</div>
  </div>
</form>`
    }
  }
}
</script>
