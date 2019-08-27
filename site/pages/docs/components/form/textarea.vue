<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Textarea</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A textarea is an input field that allows for <mark>extended user input</mark>.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="textarea_html" v-if="is_html">
      <form class="form form--large" slot="body">
        <div class="form__item">
          <textarea name="textarea" id="textarea" rows="3" class="form__textarea"></textarea>
          <label for="textarea" class="form__label">Label</label>
          <div class="form__description">Description text</div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Basic" :code="textarea" v-else>
      <form class="form form--large" slot="body">
        <o-textarea
          v-model="form_model"
          id="textarea"
          label="Label"
          description="Description text"
          />
      </form>
    </docs-item>

    <!-- Read-only  -->
    <docs-item title="Read-only" :code="textarea_read_only_html" v-if="is_html">
      <form class="form form--large" slot="body">
        <div class="form__item">
          <textarea name="textarea_read_only" id="textarea_read_only" readonly rows="3" class="form__textarea"></textarea>
          <label for="textarea_read_only" class="form__label">Label</label>
          <div class="form__description">Description text</div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Read-only" :code="textarea_read_only" v-else>
      <form class="form form--large" slot="body">
        <o-textarea
          v-model="form_model_read_only"
          id="textarea_read_only"
          label="Label"
          description="Description text"
          :read_only="true"
          />
      </form>
    </docs-item>



    <!-- Validate  -->
    <docs-item title="Validate" :code="textarea_validate" v-if="!is_html">
      <form class="form form--large" slot="body">
        <o-textarea
          v-model="form_model_validate"
          id="textarea_validate"
          label="Label"
          description="Description text"
          validate="required"
          validate_on="blur"
          validate_name="Message"/>
      </form>
    </docs-item>

    <!-- Disabled  -->
    <docs-item title="Disabled" :code="textarea_disabled_html" v-if="is_html">
      <form class="form form--large" slot="body">
        <div class="form__item">
          <textarea name="textarea_disabled" id="textarea_disabled" disabled="disabled" rows="3" class="form__textarea"></textarea>
          <label for="textarea_disabled" class="form__label">Label</label>
          <div class="form__description">Description text</div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Disabled" :code="textarea_disabled" v-else>
      <form class="form form--large" slot="body">
        <o-textarea
          v-model="form_model_disabled"
          id="textarea_disabled"
          label="Label"
          description="Description text"
          :disabled="true" />
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
          <td>Set with <code>disabled</code> attribute on <code>textarea</code></td>
          <td><code>disabled</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>read-only</td>
          <td>Set with <code>readonly</code> attribute on <code>textarea</code></td>
          <td><code>readonly</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>data-auto-expand</td>
          <td>Set with <code>data-auto-expand</code> attribute on <code>textarea</code>, that makes textarea autoresize</td>
          <td><code>data-auto-expand</code></td>
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
          <td>value</td>
          <td>String</td>
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
          <td>Label displayed as placeholder</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>Input type for HTML validaton</td>
          <td>String</td>
          <td>-</td>
          <td>text</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>Set textarea height with number of rows</td>
          <td>Number</td>
          <td>-</td>
          <td>3</td>
        </tr>
        <tr>
          <td>description</td>
          <td>Description text displayed below dropdown as help text</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>read_only</td>
          <td>Make textarea read-only field</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Disable textarea</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>validate</td>
          <td>
            Textarea validation where you can pass in basic <code>required</code> for required field.
          </td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>validate_on</td>
          <td>
            Choose an event that will run to validate field. You can check possible events <a href="https://baianat.github.io/vee-validate/guide/events.html#changing-default-events" target="_blank">here</a>
          </td>
          <td>String</td>
          <td>-</td>
          <td>input</td>
        </tr>
        <tr>
          <td>validate_name</td>
          <td>
            Change default textarea name with custom name that will display if there will be an error.
          </td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>validate_initial</td>
          <td>
            Run textarea validation on mount
          </td>
          <td>Boolean</td>
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
  require('../../../../../src/js/src/textarea.js');
}

export default {
  name: 'DocsTextarea',

  data () {
    return {
      is_html: true,
      form_model: null,
      form_model_read_only: null,
      form_model_validate: null,
      form_model_disabled: null,
      textarea: `<form class="form form--large">
  <o-textarea
    v-model="form_model"
    id="textarea"
    label="Label"
    description="Description text"
  />
</form>`,
      textarea_html: `<form class="form form--large">
  <div class="form__item">
    <textarea name="textarea" id="textarea" rows="3" class="form__textarea"></textarea>
    <label for="textarea" class="form__label">Label</label>
    <div class="form__description">Description text</div>
  </div>
</form>`,

      textarea_read_only: `<form class="form form--large">
  <o-textarea
    v-model="form_model_read_only"
    id="textarea_read_only"
    label="Label"
    description="Description text"
    :read_only="true"
  />
</form>`,
      textarea_read_only_html: `<form class="form form--large">
  <div class="form__item">
    <textarea name="textarea_read_only" id="textarea_read_only" readonly="readonly" rows="3" class="form__textarea"></textarea>
    <label for="textarea_read_only" class="form__label">Label</label>
    <div class="form__description">Description text</div>
  </div>
</form>`,

      textarea_validate: `<form class="form form--large">
  <o-textarea
    v-model="form_model_validate"
    id="textarea_validate"
    label="Label"
    description="Description text"
    validate="required"
    validate_on="blur"
    validate_name="Message"
  />
</form>`,

      textarea_disabled: `<form class="form form--large">
  <o-textarea
    v-model="form_model_disabled"
    id="textarea_disabled"
    label="Label"
    description="Description text"
    :disabled="true"
  />
</form>`,
      textarea_disabled_html: `<form class="form form--large">
  <div class="form__item">
    <textarea name="textarea_disabled" id="textarea_disabled" disabled="disabled" rows="3" class="form__textarea"></textarea>
    <label for="textarea_disabled" class="form__label">Label</label>
    <div class="form__description">Description text</div>
  </div>
</form>`
    }
  }
}
</script>
