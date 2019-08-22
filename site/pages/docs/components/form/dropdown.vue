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
    <docs-item title="Basic" :code="dropdown_html" v-if="!is_html">
      <form class="form" slot="body">
        <div class="form__item">
          <div id="form_dropdown" class="form-dropdown">
            <label for="form_dropdown" class="form-dropdown__label">Label</label>
            <input id="form_dropdown" type="text" name="form_dropdown" class="form-dropdown__input" >
            <div class="form-dropdown__text">Placeholder</div>
            <div class="form-dropdown__icon">
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <div class="form-dropdown__content">
              <ul class="form-dropdown__menu">
                <li>Google</li>
                <li>Word</li>
                <li>Advertisement</li>
                <li>Competitor</li>
                <li>Other</li>
              </ul>
            </div>
          </div>
          <div class="form__description">Description of the dropdown field</div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Basic" :code="dropdown_html" v-else>
      <form class="form" slot="body">
        <o-dropdown
          id="form_dropdown"
          label="Label"
          v-model="form_model_value_dropdown"
          :items="dropdown_items"
          placeholder="Placeholder"
          description="Description of the dropdown field"
        />
      </form>
    </docs-item>

    <!-- Search  -->
    <docs-item title="With search" :code="dropdown_search" v-if="!is_html">
      <form class="form" slot="body">
        <o-dropdown
          id="form_dropdown_search"
          label="Label"
          v-model="form_model_value_dropdown_search"
          :items="dropdown_items"
          placeholder="Placeholder"
          description="Description of the dropdown field"
          :search="true"
        />
      </form>
    </docs-item>

    <!-- Search objects  -->
    <docs-item title="With search (objects)" :code="dropdown_search_objects" v-if="!is_html">
      <form class="form" slot="body">
        <o-dropdown
          id="form_dropdown_search_object"
          label="Label"
          v-model="form_model_value_dropdown_search_objects"
          :items="dropdown_items_objects"
          placeholder="Placeholder"
          description="Description of the dropdown field"
          :search="true"
        />
      </form>
    </docs-item>

    <!-- Size large  -->
    <docs-item title="Large" :code="dropdown_large" v-if="!is_html">
      <form class="form form--large" slot="body">
        <div class="form__item">
          <div id="form_dropdown_large" class="form-dropdown">
            <label for="form_dropdown_large" class="form-dropdown__label">Label</label>
            <input id="form_dropdown_large" type="text" name="form_dropdown_large" class="form-dropdown__input">

            <div class="form-dropdown__text">Placeholder</div>
            <div class="form-dropdown__icon">
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
              <svg viewBox="0 0 24 24">
                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <div class="form-dropdown__content">
              <ul class="form-dropdown__menu">
                <li>Google</li>
                <li>Word</li>
                <li>Advertisement</li>
                <li>Competitor</li>
                <li>Other</li>
              </ul>
            </div>
          </div>
          <div class="form__description">Description of the dropdown field</div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Large" :code="dropdown_large_html" v-else>
      <form class="form form--large" slot="body">
        <o-dropdown
          id="form_dropdown_large"
          label="Label"
          v-model="form_model_value_dropdown_large"
          :items="dropdown_items"
          placeholder="Placeholder"
          description="Description of the dropdown field"
          size="large"
        />
      </form>
    </docs-item>

    <!-- Search large -->
    <docs-item title="Large with search" :code="dropdown_search_large" v-if="!is_html">
      <form class="form form--large" slot="body">
        <o-dropdown
          id="form_dropdown_large_search"
          label="Label"
          v-model="form_model_value_dropdown_search_large"
          :items="dropdown_items"
          placeholder="Placeholder"
          description="Description of the dropdown field"
          :search="true"
          size="large"
        />
      </form>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage" v-if="is_html">
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
          <td>size</td>
          <td>Set with <code>.form--large</code> on <code>.form</code></td>
          <td><code>large</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Set with <code>.is-disabled</code> on <code>.form-dropdown</code></td>
          <td><code>disabled</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

    <docs-item title="Usage" v-else>
      <table class="table table--compact table--celled" slot="body">
        <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>v-model</td>
          <td>Value of dropdown</td>
          <td>String</td>
          <td>true</td>
          <td>-</td>
        </tr>
        <tr>
          <td>items</td>
          <td>Array of items in dropdown to choose from</td>
          <td>Array</td>
          <td>true</td>
          <td>-</td>
        </tr>
        <tr>
          <td>selected_items</td>
          <td>Array of items passed to dropdown that is compared to <mark>items</mark> array so that we mark already selected items</td>
          <td>Array</td>
          <td>true</td>
          <td>-</td>
        </tr>
        <tr>
          <td>id</td>
          <td>Unique id needed for focus event</td>
          <td>String</td>
          <td>true</td>
          <td>-</td>
        </tr>
        <tr>
          <td>label</td>
          <td>Label displayed first as placeholder, then it moves above selection on focus</td>
          <td>String</td>
          <td>true</td>
          <td>label</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>Text displayed as default one, before you pick an item from list</td>
          <td>String</td>
          <td>true</td>
          <td>-</td>
        </tr>
        <tr>
          <td>description</td>
          <td>Description text displayed below dropdown as help text</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>title_property</td>
          <td>Display list item title in dropdown by object property</td>
          <td>String</td>
          <td>-</td>
          <td>name</td>
        </tr>
        <tr>
          <td>value_property</td>
          <td>Change value property if you need it to return different one as default one</td>
          <td>String</td>
          <td>-</td>
          <td>id</td>
        </tr>
        <tr>
          <td>value_as_object</td>
          <td>If true, it returns back object to v-model</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>search</td>
          <td>Enable search through dropdown items</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Disable dropdown</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>validate</td>
          <td>Add validation to dropdown - <a target="_blank" href="//baianat.github.io/vee-validate/api/directive.html#directive-args">[possible validations]</a></td>
          <td>String/Object</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsDropdown',

  data () {
    return {
      is_html: true,
      form_model_value_dropdown: null,
      form_model_value_dropdown_search: null,
      form_model_value_dropdown_search_objects: null,
      form_model_value_dropdown_large: null,
      form_model_value_dropdown_search_large: null,
      dropdown_items: ['Google', 'Word', 'Advertisement', 'Competitor', 'Other'],
      dropdown_items_objects: [
        {
          id: 1,
          name: 'John'
        },
        {
          id: 2,
          name: 'Isaac'
        },
        {
          id: 3,
          name: 'Matt'
        },
        {
          id: 4,
          name: 'Frank'
        },
        {
          id: 5,
          name: 'Emma'
        }
      ],
      dropdown: `<form class="form">
  <o-dropdown
    id="form_dropdown"
    label="Label"
    v-model="form_model_value_dropdown"
    :items="dropdown_items"
    placeholder="Placeholder"
    description="Description of the dropdown field">
  </o-dropdown>
</form>`,
      dropdown_html: `<form class="form">
  <div class="form__item">
    <div id="form_dropdown" class="form-dropdown">
      <label for="form_dropdown" class="form-dropdown__label">Label</label>
      <input id="form_dropdown" type="text" name="form_dropdown" class="form-dropdown__input" >
      <div class="form-dropdown__text">Placeholder</div>
      <div class="form-dropdown__icon">
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
      </div>
      <div class="form-dropdown__content">
        <ul class="form-dropdown__menu">
          <li>Google</li>
          <li>Word</li>
          <li>Advertisement</li>
          <li>Competitor</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
    <div class="form__description">Description of the dropdown field</div>
  </div>
</form>`,

      dropdown_search: `<form class="form">
  <o-dropdown
    id="form_dropdown_search"
    label="Label"
    v-model="form_model_value_dropdown_search"
    :items="dropdown_items"
    placeholder="Placeholder"
    description="Description of the dropdown field"
    :search="true"
  />
</form>`,
      dropdown_search_objects: `<form class="form">
  <o-dropdown
    id="form_dropdown_search_object"
    label="Label"
    v-model="form_model_value_dropdown_search_objects"
    :items="dropdown_items_objects"
    placeholder="Placeholder"
    description="Description of the dropdown field"
    :search="true"
  />
</form>`,
      dropdown_large: `<form class="form form--large">
  <o-dropdown
    id="form_dropdown_large"
    label="Label"
    v-model="form_model_value_dropdown_large"
    :items="dropdown_items"
    placeholder="Placeholder"
    description="Description of the dropdown field"
  />
</form>`,
      dropdown_large_html: `<form class="form form--large">
  <div class="form__item">
    <div id="form_dropdown_large" class="form-dropdown">
      <label for="form_dropdown_large" class="form-dropdown__label">Label</label>
      <input id="form_dropdown_large" type="text" name="form_dropdown_large" class="form-dropdown__input">

      <div class="form-dropdown__text">Placeholder</div>
      <div class="form-dropdown__icon">
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
        <svg viewBox="0 0 24 24">
          <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
      </div>
      <div class="form-dropdown__content">
        <ul class="form-dropdown__menu">
          <li>Google</li>
          <li>Word</li>
          <li>Advertisement</li>
          <li>Competitor</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
    <div class="form__description">Description of the dropdown field</div>
  </div>
</form>`,

      dropdown_search_large: `<form class="form form--large">
  <o-dropdown
    id="form_dropdown_large_search"
    label="Label"
    v-model="form_model_value_dropdown_search_large"
    :items="dropdown_items"
    placeholder="Placeholder"
    description="Description of the dropdown field"
    :search="true"
  />
</form>`
    }
  }
}
</script>
