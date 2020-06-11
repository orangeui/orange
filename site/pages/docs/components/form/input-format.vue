<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Input</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>An input field is used to <mark>elicit a response from a user</mark>.</p>
        <p>The Input component comes in <mark>small (default)</mark> and <mark>large size</mark>, and can hold Vue components like Buttons when needed.</p>
      </div>
    </docs-item>

    <!-- Basic  -->
    <docs-item title="Basic" :code="input_format">
      <form class="form" slot="body">
        <o-input-format name="card"
            v-model="form_model"
            type="tel"
            id="card_number"
            label="Card number"
            placeholder="Type in your card number"
            description="Description text"
            format="credit_card">
        </o-input-format>
      </form>
    </docs-item>

    <!-- Validation  -->
    <docs-item title="Validation" :code="input_format_validation">
      <form class="form" slot="body">
        <o-input-format name="card"
            v-model="form_model_validation"
            type="tel"
            id="card_number_2"
            label="Card number"
            placeholder="Type in your card number"
            description="Description text"
            format="credit_card"
            validate="required|credit_card"
            :validate_initial="false"
            validate_on="blur"
            validate_name="Credit Card">
        </o-input-format>
      </form>
    </docs-item>

    <!-- Disabled  -->
    <docs-item title="Disabled" :code="input_format_disabled">
      <form class="form" slot="body">
        <o-input-format name="card"
            v-model="form_model_disabled"
            type="tel"
            id="card_number_3"
            label="Card number"
            format="credit_card"
            :disabled="true">
        </o-input-format>
      </form>
    </docs-item>

    <!-- Size Large  -->
    <docs-item title="Large" :code="input_format_large">
      <form class="form form--large" slot="body">
        <o-input-format name="card"
            v-model="form_model_large"
            type="tel"
            id="card_number_4"
            label="Card number"
            placeholder="Type in your card number"
            description="Description text"
            format="credit_card"
            :raw="true">
        </o-input-format>
      </form>
    </docs-item>

    <!-- Large Validation  -->
    <docs-item title="Large with validation" :code="input_format_large_validation">
      <form class="form form--large" slot="body">
        <o-input-format name="card"
            v-model="form_model_large_validation"
            type="tel"
            id="card_number_5"
            label="Card number"
            placeholder="Type in your card number"
            description="Description text"
            format="credit_card"

            validate="required|credit_card"
            :validate_initial="false"
            validate_on="blur"
            validate_name="Credit Card">
        </o-input-format>
      </form>
    </docs-item>

    <!-- Large disabled  -->
    <docs-item title="Large and disabled" :code="input_format_large_disabled">
      <form class="form form--large" slot="body">
          <o-input-format name="card"
            v-model="form_model_large_disabled"
            type="tel"
            id="card_number_6"
            label="Card number"
            format="credit_card"

            :disabled="true">
        </o-input-format>
      </form>
    </docs-item>

    <!-- Large with a button  -->
    <docs-item title="Large with a button" :code="input_format_large_button">
      <form class="form form--large" slot="body">
        <o-input-format name="card"
            v-model="form_model_large_button"
            type="tel"
            id="card_number_7"
            label="Card number"
            format="credit_card"
    >

          <div  slot="extras">
            <o-button text="verify" size="small" color="primary" />
          </div>
        </o-input-format>
      </form>
    </docs-item>

    <!-- Input Field - Usage  -->
    <docs-item title="Usage">
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
            <td>tel</td>
          </tr>
          <tr>
            <td>format</td>
            <td>Type that you want to format value. Possible values <code>credit_card</code> and <code>date</code>. At the moment only default options are available for both of them. We can add more options which can be found <a href="https://nosir.github.io/cleave.js/">here</a>.</td>
            <td>String</td>
            <td>true</td>
            <td>credit_card</td>
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
export default {
  name: 'DocsInputFormat',

  data () {
    return {
      form_model: null,
      form_model_validation: null,
      form_model_disabled: null,
      form_model_large: null,
      form_model_large_validation: null,
      form_model_large_disabled: null,
      form_model_large_button: null,
      input_format: `<form class="form">
  <o-input-format name="card"
    v-model="form_model"
    type="tel"
    id="card_number"
    label="Card number"
    placeholder="Type in your card number"
    description="Description text"
    format="credit_card">
  </o-input-format>
</form>`,
      input_format_validation: `<form class="form">
  <o-input-format name="card"
    v-model="form_model_validation"
    type="tel"
    id="card_number_2"
    label="Card number"
    placeholder="Type in your card number"
    description="Description text"
    format="credit_card"
    validate="required|credit_card"
    :validate_initial="false"
    validate_on="blur"
    validate_name="Credit Card">
  </o-input-format>
</form>`,
      input_format_disabled: `<form class="form">
  <o-input-format name="card"
    v-model="form_model_disabled"
    type="tel"
    id="card_number_3"
    label="Card number"
    format="credit_card"
    :disabled="true">
  </o-input-format>
</form>`,
      input_format_large: `<form class="form form--large">
  <o-input-format name="card"
    v-model="form_model_large"
    type="tel"
    id="card_number_4"
    label="Card number"
    placeholder="Type in your card number"
    description="Description text"
    format="credit_card"
    :raw="true">
  </o-input-format>
</form>`,
      input_format_large_validation: `<form class="form form--large">
  <o-input-format name="card"
    v-model="form_model_large_validation"
    type="tel"
    id="card_number_5"
    label="Card number"
    placeholder="Type in your card number"
    description="Description text"
    format="credit_card"
    validate="required|credit_card"
    :validate_initial="false"
    validate_on="blur"
    validate_name="Credit Card">
  </o-input-format>
</form>`,
      input_format_large_disabled: `<form class="form form--large">
  <o-input-format name="card"
    v-model="form_model_large_disabled"
    type="tel"
    id="card_number_6"
    label="Card number"
    format="credit_card"
    :disabled="true">
  </o-input-format>
</form>`,
      input_format_large_button: `<form class="form form--large">
  <o-input-format name="card"
    v-model="form_model_large_button"
    type="tel"
    id="card_number_7"
    label="Card number"
    format="credit_card">

    <div slot="extras">
      <o-button text="verify" size="small" color="primary" />
    </div>
  </o-input-format>
</form>`
    }
  }
}
</script>
