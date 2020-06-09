<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Radio</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Radio buttons allow selection of <mark>one of multiple</mark> options.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="radio_basic_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-form__item">
          <div class="o-radio">
            <input type="radio" name="Radio" id="radio_single" value="radio">
            <label for="radio_single">Label</label>
          </div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Basic" :code="radio_basic" v-else>
      <form slot="body">

        <o-radio v-model="form_model_radio_basic"
          :id="'radio'"
          :label="'Label'"
          :name="'Radio'"
        />

      </form>
    </docs-item>


    <!-- Group  -->
    <docs-item title="Group" :code="radio_group_html" v-if="is_html">
      <form class="o-form" slot="body">

        <div class="o-form__item">
          <div class="o-radio-group">
            <div class="o-radio-group__label">Group label</div>

            <div class="o-radio">
              <input type="radio" name="Radio" id="radio_1" value="radio_1"><label for="radio_1">First label</label>
            </div>

            <div class="o-radio">
              <input type="radio" name="Radio" id="radio_2" value="radio_2"><label for="radio_2">Second label</label>
            </div>

            <div class="o-radio">
              <input type="radio" name="Radio" id="radio_3" value="radio_3"><label for="radio_3">Third label</label>
            </div>

            <div class="o-radio">
              <input type="radio" name="Radio" disabled="disabled" id="radio_4" value="radio_4">
              <label for="radio_4">Fourth label</label>
            </div>
          </div>
          <div class="o-form__description">Description</div>
        </div>

      </form>
    </docs-item>

    <docs-item title="Group" :code="radio_group" v-else>
      <form slot="body">

        <o-radio-group label="Group label" description="Description">
          <o-radio
            v-model="form_model_radio_group"
            :id="'radio_1'"
            :label="'First label'"
            :name="'Radio'"
          />

          <o-radio
            v-model="form_model_radio_group"
            :id="'radio_2'"
            :label="'Second label'"
            :name="'Radio'"
          />

          <o-radio
            v-model="form_model_radio_group"
            :id="'radio_3'"
            :label="'Third label'"
            :name="'Radio'"
          />

          <o-radio
            v-model="form_model_radio_group"
            :id="'radio_4'"
            :label="'Fourth label'"
            :name="'Radio'"
            :disabled="true"
          />
        </o-radio-group>
      </form>
    </docs-item>


    <!-- usage  -->
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


    <!-- Usage  -->
    <docs-item title="Usage" v-if="!is_html">
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
            <td>String</td>
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
            <td>name</td>
            <td>Use name prop to group up options</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Disable radio</td>
            <td>Boolean</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </docs-item>

    <docs-item title="Radio Group Usage"  v-if="!is_html">
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
  name: 'DocsRadio',

  data () {
    return {
      is_html: true,
      form_model_radio_basic: '',
      form_model_radio_group: '',
      radio_basic: `<o-radio v-model="form_model_radio_basic"
  :id="'radio-single'"
  :label="'Label'"
  :name="'Radio'"
/>`,
      radio_basic_html: `<form class="o-form">
  <div class="o-form__item">
    <div class="o-radio">
      <input type="radio" name="Radio" id="radio_single" value="radio">
      <label for="radio_single">Label</label>
    </div>
  </div>
</form>`,

      radio_group: `<o-radio-group label="Group label" description="Description">
  <o-radio
    v-model="form_model_radio_group"
    :id="'radio1'"
    :label="'First label'"
    :name="'Radio'"
  />

  <o-radio
    v-model="form_model_radio_group"
    :id="'radio2'"
    :label="'Second label'"
    :name="'Radio'"
  />

  <o-radio
    v-model="form_model_radio_group"
    :id="'radio3'"
    :label="'Third label'"
    :name="'Radio'"
  />

  <o-radio
    v-model="form_model_radio_group"
    :id="'radio4'"
    :label="'Fourth label'"
    :name="'Radio'"
    :disabled="true"
  />
</o-radio-group>`,
      radio_group_html: `<form class="o-form">
  <div class="o-form__item">
    <div class="o-radio-group">
      <div class="o-radio-group__label">Group label</div>

      <div class="o-radio">
        <input type="radio" name="Radio" id="radio_1" value="radio_1">
        <label for="radio_1">First label</label>
      </div>

      <div class="o-radio">
        <input type="radio" name="Radio" id="radio_2" value="radio_2">
        <label for="radio_2">Second label</label>
      </div>

      <div class="o-radio">
        <input type="radio" name="Radio" id="radio_3" value="radio_3">
        <label for="radio_3">Third label</label>
      </div>

      <div class="o-radio">
        <input type="radio" name="Radio" disabled="disabled" id="radio_4" value="radio_4">
        <label for="radio_4">Fourth label</label>
      </div>
    </div>
    <div class="o-form__description">Description</div>
  </div>
</form>`

    }
  }
}
</script>
