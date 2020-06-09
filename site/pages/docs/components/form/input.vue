<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Input</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>An input component is used to <mark>elicit a response from a user</mark>.</p>
        <p>The Input comes in <mark>small (default)</mark> and <mark>large size</mark>, and can hold other components like Buttons when needed.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="input_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-form__item">
          <input id="form_id" type="text" name="form_id" class="o-form__input">
          <label for="form_id" class="o-form__label">Label</label>
          <p class="o-form__description">Description text</p>
        </div>
      </form>
    </docs-item>

    <docs-item title="Basic" :code="input_html" v-else>
      <form class="o-form" slot="body">
        <o-input
          id="form_id"
          v-model="form_model"
          placeholder="Label"
          description="Description text"
        />
      </form>
    </docs-item>

    <!-- Validation  -->
    <docs-item title="Validation - required" :code="input_validation_small" v-if="!is_html">
      <p>To validate an input on mount add <code>:validate_initial="true"</code> to your configuration.</p>
      <form class="o-form" slot="body">
        <o-input
          id="form_validation"
          v-model="form_model_validation"
          placeholder="Required field"
          validate="required"
          validate_on="blur"
          validate_name="Required field"
        />
      </form>
    </docs-item>

    <!-- Validation with rules  -->
    <docs-item title="Validation - required with rules" :code="input_validation_rules_small" v-if="!is_html">
      <form class="o-form" slot="body">
        <o-input
          id="form_validation_rules"
          v-model="form_model_validation_rules"
          placeholder="Email address"
          validate="required|email"
          validate_on="blur"
          validate_name="Email address"
        />
      </form>
    </docs-item>

    <!-- Read-only  -->
    <docs-item title="Read-only" :code="input_read_only_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-form__item">
          <input id="form_read_only" type="text" name="form_read_only" placeholder="Label" readonly="readonly" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs">
          <label for="form_read_only" class="o-form__label">Label</label>
          <p class="o-form__description">Description text</p>
        </div>
      </form>
    </docs-item>

    <!-- With action/extras -->
    <docs-item title="With action/extras" :code="input_action_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-form__item has-action">
          <div class="o-form__action">
            +386
          </div>

          <div class="o-form__input-wrapper">
            <input id="form_action_left" type="text" name="form_action_left" class="o-form__input">
            <label for="form_action_left" class="o-form__label">Your phone number</label>
          </div>
          <p class="o-form__description">Description text</p>
        </div>

        <div class="o-form__item has-action">
          <div class="o-form__input-wrapper">
            <input id="form_action_right" type="text" name="form_action_right" class="o-form__input">
            <label for="form_action_right" class="o-form__label">https://example.com</label>
          </div>

          <div class="o-form__action">
            /orange
          </div>
          <p class="o-form__description">Description text</p>
        </div>
      </form>
    </docs-item>

    <!-- Read-only with action/extras -->
    <docs-item title="Read-only with action/extras" :code="input_action_button_html" v-if="is_html">
      <form class="o-form" slot="body">
        <div class="o-form__item has-action">
          <div class="o-form__action">
            <button type="button" class="o-button o-button--small">
              copy to clipboard
            </button>
          </div>

          <div class="o-form__input-wrapper">
            <input id="form_action_button_left" type="text" name="form_action_button_left" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
            <label for="form_action_button_left" class="o-form__label">Your API key</label>
          </div>
          <p class="o-form__description">To change your API key please contact support</p>
        </div>

        <div class="o-form__item has-action">
          <div class="o-form__input-wrapper">
            <input id="form_action_button_right" type="text" name="form_action_button_right" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
            <label for="form_action_button_right" class="o-form__label">Your API key</label>
          </div>

          <div class="o-form__action">
            <button type="button" class="o-button o-button--small">
              copy to clipboard
            </button>
          </div>
          <p class="o-form__description">To change your API key please contact support</p>
        </div>
      </form>
    </docs-item>

    <!-- Size Large  -->
    <docs-item title="Large" :code="input_large_html" v-if="is_html">
      <form class="o-form o-form--large" slot="body">
        <div class="o-form__item">
          <input id="form_large" type="text" name="form_large" class="o-form__input">
          <label for="form_large" class="o-form__label">Label</label>

          <p class="o-form__description">Description text</p>
        </div>
      </form>
    </docs-item>

    <!-- Size Large  -->
    <docs-item title="Large" :code="input_large_html" v-else>
      <form class="o-form o-form--large" slot="body">
        <o-input
          id="form_large"
          v-model="form_model_large"
          description="Description text"
          label="Label"
        />
      </form>
    </docs-item>

    <!-- Large with validation  -->
    <docs-item title="Large with validation" :code="input_validation_large" v-if="!is_html">
      <form class="o-form o-form--large" slot="body">
        <o-input
          id="form_large_validation"
          v-model="form_model_validation_large"
          label="Name"
          validate="required"
          validate_on="blur"
          validate_name="Name"
        />
      </form>
    </docs-item>

    <!-- Large read-only  -->
    <docs-item title="Large and read-only" :code="input_read_only_large" v-if="is_html">
      <form class="o-form o-form--large" slot="body">
        <div class="o-form__item">
          <input id="form_large_read_only" type="text" name="form_large_read_only" readonly="readonly" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs">
          <label for="form_large_read_only" class="o-form__label">Label</label>
          <p class="o-form__description">Description text</p>
        </div>
      </form>
    </docs-item>

    <!-- Large with validation and a button  -->
    <docs-item title="Large with validation and a button" :code="input_large_validation_button" v-if="!is_html">
      <form class="o-form o-form--large" slot="body">
        <o-input
          id="form_large_button"
          v-model="form_model_large_validation_button"
          label="Recipient's email address"
          description="Type in an email address"
          validate="required|email"
          validate_on="blur"
          validate_name="Email address"
        >

          <o-button text="send message" size="small" slot="action" />

        </o-input>
      </form>
    </docs-item>
    
    <!-- Large with action/extras -->
    <docs-item title="Large with action/extras" :code="input_large_action_html" v-if="is_html">
      <form class="o-form o-form--large" slot="body">
        <div class="o-form__item has-action">
          <div class="o-form__input-wrapper">
            <input id="form_large_action_right" type="text" name="form_large_action_right" class="o-form__input">
            <label for="form_large_action_right" class="o-form__label">https://example.com</label>
          </div>

          <div class="o-form__action">
            /orange
          </div>
        </div>

        <div class="o-form__item has-action">
          <div class="o-form__action">
            +386
          </div>

          <div class="o-form__input-wrapper">
            <input id="form_large_action_left" type="text" name="form_large_action_left" class="o-form__input">
            <label for="form_large_action_left" class="o-form__label">Your phone number</label>
          </div>
        </div>
      </form>
    </docs-item>

    <docs-item title="Large, read-only with a button" :code="input_large_read_only_button_html" v-else>
      <form class="o-form o-form--large" slot="body">
        <o-input
          id="form_large_button_read_only"
          v-model="form_model_read_only_button_large"
          label="Your API key"
          description="To change your API key please contact support"
          :read_only="true"
        >

          <o-button text="copy to clipboard" size="small" slot="action" />
        </o-input>
      </form>
    </docs-item>

    <!-- Large read-only with a Button  -->
    <docs-item title="Large, read-only with action/extras" :code="input_large_action_button_html" v-if="is_html">
      <form class="o-form o-form--large" slot="body">
        <div class="o-form__item has-action">
          <div class="o-form__action">
            <button type="button" class="o-button o-button--small">
              copy to clipboard
            </button>
          </div>

          <div class="o-form__input-wrapper">
            <input id="form_large_action_button_left" type="text" name="form_large_action_button_left" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
            <label for="form_large_action_button_left" class="o-form__label">Your API key</label>
          </div>

          <p class="o-form__description">To change your API key please contact support</p>
        </div>

        <div class="o-form__item has-action">
          <div class="o-form__input-wrapper">
            <input id="form_large_action_button_right" type="text" name="form_large_action_button_right" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
            <label for="form_large_action_button_right" class="o-form__label">Your API key</label>
          </div>

          <div class="o-form__action">
            <button type="button" class="o-button o-button--small">
              copy to clipboard
            </button>
          </div>

          <p class="o-form__description">To change your API key please contact support</p>
        </div>
      </form>
    </docs-item>

    <!-- Large with a placeholder  -->
    <docs-item title="Large with a placeholder" :code="input_placeholder_large" v-if="!is_html">
      <form class="o-form o-form--large" slot="body">
        <o-input
          id="form_large_placeholder"
          v-model="form_model_placeholder_large"
          description="Description text"
          label="Label"
          placeholder="Placeholder"
        >
        </o-input>
      </form>
    </docs-item>

    <docs-item title="Sign up examples" :code="form_examples" v-if="!is_html">

      <ul slot="body" class="docs__simple-list">
        <li>
          <o-card>
            <o-card-header>
              <h3>Create an account</h3>
            </o-card-header>

            <o-card-body>
              <form class="o-form">
                <o-input
                  id="form_example_name"
                  v-model="form_example_name"
                  placeholder="First and last name"
                  validate="required"
                  validate_on="blur"
                  validate_name="First and last name"
                >
                </o-input>
                <o-input
                  id="form_example_email"
                  v-model="form_example_email"
                  type="email"
                  placeholder="Email"
                  validate="required"
                  validate_on="blur"
                  validate_name="Email address"
                />
                <o-input
                  id="form_example_password"
                  v-model="form_example_password"
                  type="password"
                  placeholder="Password"
                  validate="required"
                  validate_on="blur"
                  validate_name="Password"
                />

                <div class="o-form__item">
                  <o-button text="Sign up" wide />
                </div>
              </form>
            </o-card-body>
          </o-card>
        </li>
        <li>
          <o-card>
            <o-card-header>
              <h3>Create an account</h3>
            </o-card-header>

            <o-card-body>
              <form class="o-form o-form--large">
                <o-input
                  id="form_example_name_large"
                  v-model="form_example_name_large"
                  label="First and last name"
                  validate="required"
                  validate_on="blur"
                  validate_name="First and last name"
                >
                </o-input>
                <o-input
                  id="form_example_email_large"
                  v-model="form_example_email_large"
                  type="email"
                  label="E-mail address"
                  validate="required"
                  validate_on="blur"
                  validate_name="E-mail address"
                />
                <o-input
                  id="form_example_password_large"
                  v-model="form_example_password_large"
                  type="password"
                  label="Password"
                  validate="required"
                  validate_on="blur"
                  validate_name="Password"
                />

                <div class="o-form__item">
                  <o-button text="Sign up" size="large" wide />
                </div>
              </form>
            </o-card-body>
          </o-card>
        </li>
      </ul>
    </docs-item>

    <!-- Input Field - Usage  -->
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
          <td>size</td>
          <td>Set with <code>.o-form--large</code> on <code>.o-form</code></td>
          <td><code>large</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Set with <code>disabled</code> attribute on <code>input</code></td>
          <td><code>disabled</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>read-only</td>
          <td>Set with <code>readonly</code> attribute on <code>input</code></td>
          <td><code>readonly</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Set with <code>.has-action</code> class on <code>.o-form__item</code> to color up input value if read-only</td>
          <td><code>has-action</code></td>
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
            <td>name</td>
            <td>Name of the input if you want it as a different property shown in validation fields. Default value of this is <code>id</code></td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>Label displayed as placeholder for <code>large</code> size</td>
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
            <td>description</td>
            <td>Description text displayed below dropdown as help text</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>read_only</td>
            <td>Make input read-only field</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Disable input</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
          </tr>
          <tr>
            <td>validate</td>
            <td>
              Input validation where you can pass in basic <code>required</code> for just required field or you specify exactly which rule/parameter you want to validate like <code>required|email</code>. For more possibilities check out <a href="https://baianat.github.io/vee-validate/guide/rules.html" target="_blank">Vee Validate</a> and also help hot to use those rules <a href="https://alligator.io/vuejs/template-form-validation-vee-validate/" target="_blank">Rules</a>
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
              Change default input name with custom name that will display if there will be an error.
            </td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>validate_initial</td>
            <td>
              Run input validation on mount
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
  require('../../../../../src/js/src/input.js');
}

export default {
  name: 'DocsInput',

  data () {
    return {
      is_html: true,
      form_model: null,
      form_model_validation: null,
      form_model_validation_rules: null,
      form_model_read_only: null,
      form_model_large: null,
      form_model_validation_large: null,
      form_model_read_only_large: null,
      form_model_large_validation_button: null,
      form_model_read_only_button_large: 'cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs',
      form_model_placeholder_large: null,
      form_example_name: null,
      form_example_email: null,
      form_example_password: null,
      form_example_name_large: null,
      form_example_email_large: null,
      form_example_password_large: null,
      input: `<form class="o-form">
  <o-input
    id="form_id"
    v-model="form_model"
    placeholder="Label"
    description="Description text"
  />
</form>`,
      input_html: `<form class="o-form">
  <div class="o-form__item">
    <input id="form_id" type="text" name="form_id" placeholder="Label" class="o-form__input">
    <label for="form_id" class="o-form__label">Label</label>
    <p class="o-form__description">Description text</p>
  </div>
</form>`,

      input_validation_small: `<form class="o-form">
  <o-input
    id="form_validation"
    v-model="form_model"
    placeholder="Required field"
    validate="required"
    validate_on="blur"
    validate_name="Required field"
  />
</form>`,
      input_validation_rules_small: `<form class="o-form">
  <o-input
    id="form_validation_rules"
    v-model="form_model"
    placeholder="Email address"
    validate="required|email"
    validate_on="blur"
    validate_name="Email address"
  />
</form>`,

      input_validation_read_only: `<form class="o-form">
  <o-input
    id="form_read_only"
    v-model="form_model"
    placeholder="Label"
    :read_only="true"
  />
</form>`,
      
      input_read_only_html: `<form class="o-form">
  <div class="o-form__item">
    <input id="form_read_only" type="text" name="form_read_only" placeholder="Label" readonly="readonly" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs">
    <label for="form_id" class="o-form__label">Label</label>
    <p class="o-form__description">Description text</p>
  </div>
</form>`,
      
      input_action_html: `<form class="o-form">
  <div class="o-form__item has-action">
    <div class="o-form__action">
      +386
    </div>

    <div class="o-form__input-wrapper">
      <input id="form_action_left" type="text" name="form_action_left" class="o-form__input">
      <label for="form_action_left" class="o-form__label">Your phone number</label>
    </div>
    <p class="o-form__description">Description text</p>
  </div>

  <div class="o-form__item has-action">
    <div class="o-form__input-wrapper">
      <input id="form_action_right" type="text" name="form_action_right" class="o-form__input">
      <label for="form_action_right" class="o-form__label">https://example.com</label>
    </div>

    <div class="o-form__action">
      /orange
    </div>
    <p class="o-form__description">Description text</p>
  </div>
</form>`,

      input_action_button_html: `<form class="o-form">
  <div class="o-form__item has-action">
    <div class="o-form__action">
      <button type="button" class="o-button o-button--small">
        copy to clipboard
      </button>
    </div>

    <div class="o-form__input-wrapper">
      <input id="form_action_button_left" type="text" name="form_action_button_left" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
      <label for="form_action_button_left" class="o-form__label">Your API key</label>
    </div>
    <p class="o-form__description">To change your API key please contact support</p>
  </div>

  <div class="o-form__item has-action">
    <div class="o-form__input-wrapper">
      <input id="form_action_button_right" type="text" name="form_action_button_right" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
      <label for="form_action_button_right" class="o-form__label">Your API key</label>
    </div>

    <div class="o-form__action">
      <button type="button" class="o-button o-button--small">
        copy to clipboard
      </button>
    </div>
    <p class="o-form__description">To change your API key please contact support</p>
  </div>
</form>`,

      input_large: `<form class="o-form o-form--large">
  <o-input
    id="form_large"
    v-model="form_model"
    description="Description text"
    label="Label"
  />
</form>`,
      input_large_html: `<form class="o-form o-form--large">
  <div class="o-form__item">
    <input id="form_large" type="text" name="form_large" class="o-form__input">
    <label for="form_large" class="o-form__label">Label</label>
    <p class="o-form__description">Description text</p>
  </div>
</form>`,

      input_validation_large: `<form class="o-form o-form--large">
  <o-input
    id="form_large_validation"
    v-model="form_model"
    label="Name"
    validate="required"
    validate_on="blur"
    validate_name="Name"
  />
</form>`,
      input_read_only_large: `<form class="o-form o-form--large">
  <div class="o-form__item">
    <input id="form_large_read_only" type="text" name="form_large_read_only" readonly="readonly" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs">
    <label for="form_large_read_only" class="o-form__label">Label</label>
    <p class="o-form__description">Description text</p>
  </div>
</form>`,

      input_large_validation_button: `<form class="o-form o-form--large">
  <o-input
    id="form_large_button"
    v-model="form_model"
    label="Recipient's email address"
    description="Type in an email address"
    validate="required|email"
    validate_on="blur"
    validate_name="Email address"
  >

    <o-button text="send message" size="small" slot="action" />

  </o-input>
</form>`,
      input_large_read_only_button: `<form class="o-form o-form--large">
  <o-input
    id="form_large_button_read_only"
    v-model="form_model_read_only"
    label="Your API key"
    description="To change your API key please contact support"
    :read_only="true"
  >

    <o-button text="copy to clipboard" size="small" slot="action" />

  </o-input>
</form>`,
      input_large_action_button_html: `<form class="o-form o-form--large">
  <div class="o-form__item has-action">
    <div class="o-form__action">
      <button type="button" class="o-button o-button--small">
        copy to clipboard
      </button>
    </div>

    <div class="o-form__input-wrapper">
      <input id="form_large_action_button_left" type="text" name="form_large_action_button_left" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
      <label for="form_large_action_button_left" class="o-form__label">Your API key</label>
    </div>

    <p class="o-form__description">To change your API key please contact support</p>
  </div>

  <div class="o-form__item has-action">
    <div class="o-form__input-wrapper">
      <input id="form_large_action_button_right" type="text" name="form_large_action_button_right" class="o-form__input has-value" value="cw8BT7BcJzZQqlnwGZ53XD3cdfEXArGs" readonly="readonly">
      <label for="form_large_action_button_right" class="o-form__label">Your API key</label>
    </div>

    <div class="o-form__action">
      <button type="button" class="o-button o-button--small">
        copy to clipboard
      </button>
    </div>

    <p class="o-form__description">To change your API key please contact support</p>
  </div>
</form>`,

    input_large_action_html: `<form class="o-form o-form--large">
  <div class="o-form__item has-action">
    <div class="o-form__input-wrapper">
      <input id="form_large_action_right" type="text" name="form_large_action_right" class="o-form__input">
      <label for="form_large_action_right" class="o-form__label">https://example.com</label>
    </div>

    <div class="o-form__action">
      /orange
    </div>
  </div>

  <div class="o-form__item has-action">
    <div class="o-form__action">
      +386
    </div>

    <div class="o-form__input-wrapper">
      <input id="form_large_action_left" type="text" name="form_large_action_left" class="o-form__input">
      <label for="form_large_action_left" class="o-form__label">Your phone number</label>
    </div>
  </div>
</form>
    `,

      input_placeholder_large: `<form class="o-form o-form--large">
  <o-input
    id="form_large_placeholder"
    v-model="form_model"
    description="Description text"
    label="Label"
    placeholder="Placeholder"
  >
  </o-input>
</form>`,
      form_examples: `<o-card>
  <o-card-header>
    <h3>Create an account</h3>
  </o-card-header>

  <o-card-body>
    <form class="o-form">
      <o-input
        id="form_example_name"
        v-model="form_example_name"
        placeholder="First and last name"
        validate="required"
        validate_on="blur"
        validate_name="First and last name"
      >
      </o-input>
      <o-input
        id="form_example_email"
        v-model="form_example_email"
        type="email"
        placeholder="Email"
        validate="required"
        validate_on="blur"
        validate_name="Email address"
      />
      <o-input
        id="form_example_password"
        v-model="form_example_password"
        type="password"
        placeholder="Password"
        validate="required"
        validate_on="blur"
        validate_name="Password"
      />

      <div class="o-form__item">
        <o-button text="Sign up" wide />
      </div>
    </form>
  </o-card-body>
</o-card>


<o-card>
  <o-card-header>
    <h3>Create an account</h3>
  </o-card-header>

  <o-card-body>
    <form class="o-form o-form--large">
      <o-input
        id="form_example_name_large"
        v-model="form_example_name_large"
        label="First and last name"
        validate="required"
        validate_on="blur"
        validate_name="First and last name"
      >
      </o-input>
      <o-input
        id="form_example_email_large"
        v-model="form_example_email_large"
        type="email"
        label="E-mail address"
        validate="required"
        validate_on="blur"
        validate_name="E-mail address"
      />
      <o-input
        id="form_example_password_large"
        v-model="form_example_password_large"
        type="password"
        label="Password"
        validate="required"
        validate_on="blur"
        validate_name="Password"
      />

      <div class="o-form__item">
        <o-button text="Sign up" size="large" wide />
      </div>
    </form>
  </o-card-body>
</o-card>`
    }
  }
}
</script>
