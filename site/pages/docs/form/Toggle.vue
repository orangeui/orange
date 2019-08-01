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
    <docs-item title="Basic" :code="toggle_basic_html" v-if="!is_html">
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

    <docs-item title="Basic" :code="toggle_basic_html" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-toggle
            v-model="form_model_toggle_basic"
            id="toggle"
          />
        </li>
      </ul>
    </docs-item>



    <!-- With a label  -->
    <docs-item title="With a label" :code="toggle_label_html" v-if="!is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="form__item">
            <div class="toggle toggle--label is-checked">
              <div class="toggle__button">
                <input type="checkbox" id="toggle_with_label" class="toggle__input">
                <label class="toggle__label">Label</label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="With a label" :code="toggle_label_html" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-toggle
            v-model="form_model_toggle_label"
            id="toggle"
            label="Label"
          />
        </li>
      </ul>
    </docs-item>



    <!-- Sizes -->
    <docs-item title="Large" :code="toggle_large_html" v-if="!is_html">
      <form slot="body">
        <div class="form__item">
          <div class="toggle toggle--label toggle--large is-checked">
            <div class="toggle__button">
              <input type="checkbox" id="toggle_large" class="toggle__input">
              <label class="toggle__label"></label>
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

    <docs-item title="Large" :code="toggle_large_html" v-else>
      <form slot="body">
        <o-toggle
          size="large"
          v-model="form_model_toggle_large"
          id="toggle_large"
          label="Label"
          valueText="On"
          valueTextDisabled="Off"
          description="Description text"
        />
      </form>
    </docs-item>



    <!-- Colors  -->
    <docs-item title="Colors" :code="toggle_colors_html" v-if="!is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="form__item">
            <div class="toggle toggle--color-primary is-checked">
              <div class="toggle__button">
                <input type="checkbox" id="toggle_color" class="toggle__input">
                <label class="toggle__label"></label>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="form__item">
            <div class="toggle is-checked">
              <div class="toggle__button">
                <input type="checkbox" id="toggle_color1" class="toggle__input">
                <label class="toggle__label"></label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Colors" :code="toggle_colors_html" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="primary"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="red"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="orange"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="yellow"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="green"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="indigo"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="blue"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="violet"
          />
        </li>

        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="black"
          />
        </li>
        <li>
          <o-toggle
            v-model="form_model_toggle_colors"
            id="toggle"
            color="gray"
          />
        </li>
      </ul>
    </docs-item>

    <!-- Toggle usage  -->
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
            <td>color</td>
            <td>See <a href="/colors">Colors</a> page for possible values</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>Possible value <code>large</code></td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>description</td>
            <td>Description of the input field displayed below toggle as help text</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>valueText</td>
            <td>Text that is displayed when value is true</td>
            <td>String</td>
            <td>-</td>
            <td>Enabled</td>
          </tr>
          <tr>
            <td>valueTextDisabled</td>
            <td>Text that is displayed when value is false</td>
            <td>String</td>
            <td>-</td>
            <td>Disabled</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Disable toggle</td>
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
export default {
  name: 'DocsToggle',

  data () {
    return {
      is_html: true,
      form_model_toggle_basic: true,
      form_model_toggle_label: true,
      form_model_toggle_large: true,
      form_model_toggle_colors: true,
      form_model_toggle_1: false,
      form_model_toggle_2: false,
      form_model_toggle_3: false,
      toggle_basic: `<o-toggle
  v-model="form_model_toggle_basic"
  id="toggle"
/>`,
      toggle_basic_html: `<form class="form">
  <div class="form__item">
    <div class="toggle is-checked">
      <div class="toggle__button">
        <input type="checkbox" id="toggle_basic" class="toggle__input" checked>
        <label class="toggle__label" for="toggle_basic"></label>
      </div>
    </div>
  </div>
</form>`,

      toggle_label: `<o-toggle
  v-model="form_model_toggle_label"
  id="toggle"
  label="Label"
/>`,
      toggle_label_html: `<form class="form">
  <div class="form__item">
    <div class="toggle toggle--label is-checked">
      <div class="toggle__button">
        <input type="checkbox" id="toggle_with_label" class="toggle__input">
        <label class="toggle__label" for="toggle_with_label">Label</label>
      </div>
    </div>
  </div>
</form>`,

      toggle_large: `<o-toggle
  size="large"
  v-model="form_model_toggle_large"
  id="toggle_large"
  label="Label"
  valueText="Enabled"
  valueTextDisabled="Disabled"
  description="Description text"
/>`,
      toggle_large_html: `<form class="form">
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

      toggle_colors: `<o-toggle
  v-model="form_model_toggle_colors"
  id="toggle"
  color="{color}"
/>`,
      toggle_colors_html: `<form class="form">
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
