<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Checkbox</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A checkbox allows users to <mark>decide on a state of an object</mark>.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="checkbox_basic_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-checkbox">
          <input type="checkbox" id="checkbox_basic">
          <label for="checkbox_basic">Label</label>
        </div>
      </form>
    </docs-item>

    <docs-item title="Basic" :code="checkbox_basic" v-else>
      <form class="o-form" slot="body">
        <o-checkbox
          v-model="form_model_checkbox_basic"
          id="checkbox_basic"
          :label="'Label'"
        />
      </form>
    </docs-item>

    <!-- Group  -->
    <docs-item title="Group" :code="checkbox_group_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-form__item">
          <div class="o-checkbox-group">
            <div class="o-checkbox-group__label">Group label</div>

            <div class="o-checkbox">
              <input type="checkbox" id="checkbox_1">
              <label for="checkbox_1">First label</label>
            </div>

            <div class="o-checkbox">
              <input type="checkbox" id="checkbox_2">
              <label for="checkbox_2">Second label</label>
            </div>

            <div class="o-checkbox">
              <input type="checkbox" id="checkbox_3">
              <label for="checkbox_3">Third label</label>
            </div>

            <div class="o-checkbox">
              <input type="checkbox" disabled="disabled" id="checkbox_4">
              <label for="checkbox_4">Fourth label</label>
            </div>
          </div>

          <div class="o-form__description">Description text</div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Group" :code="checkbox_group" v-else>
      <form class="o-form" slot="body">
        <o-checkbox-group label="Group label" description="Description text">

          <o-checkbox
            v-model="form_model_checkbox_1"
            id="checkbox_1"
            :label="'First label'"
          />

          <o-checkbox
            v-model="form_model_checkbox_2"
            id="checkbox_2"
            :label="'Second label'"
          />

          <o-checkbox
            v-model="form_model_checkbox_3"
            id="checkbox_3"
            :label="'Third label'"
          />

          <o-checkbox
            v-model="form_model_checkbox_4"
            id="checkbox_4"
            :label="'Fourth label'"
            :disabled="true"
          />
        </o-checkbox-group>
      </form>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage" v-if="is_html">
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
            <td>disabled</td>
            <td>Set with <code>disabled</code> on <code>input</code></td>
            <td><code>disabled</code></td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>checked</td>
            <td>Set with <code>checked</code> on <code>input</code></td>
            <td><code>checked</code></td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </docs-item>

    <docs-item title="Usage" v-else>
      <table class="o-table o-table--compact o-table--celled" slot="body">
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
            <td>value</td>
            <td>Boolean</td>
            <td>true</td>
            <td>-</td>
          </tr>
          <tr>
            <td>id</td>
            <td>Unique id</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>Label</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Disable checkbox</td>
            <td>Boolean</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </docs-item>

    <!-- Group usage  -->
    <docs-item title="Usage (group)" v-if="!is_html">
      <table class="o-table o-table--compact o-table--celled" slot="body">
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
            <td>label</td>
            <td>Label</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>description</td>
            <td>Description of the checkbox group displayed as help text</td>
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

export default {
  name: 'DocsCheckbox',

  data () {
    return {
      is_html: true,
      form_model_checkbox_basic: false,
      form_model_checkbox_1: false,
      form_model_checkbox_2: false,
      form_model_checkbox_3: true,
      form_model_checkbox_4: true,
      checkbox_basic: `<o-checkbox
  v-model="form_model_checkbox_basic"
  id="checkbox_basic"
  :label="'Label'"
/>`,
      checkbox_basic_html: `<form class="o-form">
  <div class="o-checkbox">
    <input type="checkbox" id="checkbox_basic">
    <label for="checkbox_basic">Label</label>
  </div>
</form>`,

      checkbox_group: `<o-checkbox-group label="Group label" description="Description text">

  <o-checkbox
    v-model="form_model_checkbox_1"
    id="checkbox_1"
    :label="'First label'"
  />

  <o-checkbox
    v-model="form_model_checkbox_2"
    id="checkbox_2"
    :label="'Second label'"
  />

  <o-checkbox
    v-model="form_model_checkbox_3"
    id="checkbox_3"
    :label="'Third label'"
  />

  <o-checkbox
    v-model="form_model_checkbox_4"
    id="checkbox_4"
    :label="'Fourth label'"
    :disabled="true"
  />

</o-checkbox-group>`,
      checkbox_group_html: `<form class="o-form">
  <div class="o-form__item">
    <div class="o-checkbox-group">
      <div class="o-checkbox-group__label">Group label</div>

      <div class="o-checkbox">
        <input type="checkbox" id="checkbox_1">
        <label for="checkbox_1">First label</label>
      </div>

      <div class="o-checkbox">
        <input type="checkbox" id="checkbox_2">
        <label for="checkbox_2">Second label</label>
      </div>

      <div class="o-checkbox">
        <input type="checkbox" id="checkbox_3">
        <label for="checkbox_3">Third label</label>
      </div>

      <div class="o-checkbox">
        <input type="checkbox" disabled="disabled" id="checkbox_4">
        <label for="checkbox_4">Fourth label</label>
      </div>
    </div>

    <div class="o-form__description">Description text</div>
  </div>
</form>`
    }
  }
}
</script>
