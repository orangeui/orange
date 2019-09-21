<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Button</h1>
      <o-label size="small" text="HTML" />
    </div>
    <docs-item class="explanation">
      <div slot="body">
        <p>A button is an interactive element used to <mark>trigger an action</mark>.</p>
      </div>
    </docs-item>

    <!-- Roles -->
    <docs-item title="Roles" :code="button_roles_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <button type="button" class="button">Primary</button>
        </li>
        <li>
          <button type="button" class="button button--secondary">Secondary</button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Roles" :code="button_roles" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-button text="Primary" /></li>
        <li><o-button text="Secondary" role="secondary" /></li>
      </ul>
    </docs-item>



    <!-- Sizes -->
    <docs-item title="Sizes" :code="button_sizes_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>Out of the box buttons are displayed in basic size. Add a <code>.button--small</code> or <code>.button--large</code> class to change sizes.</p>
        </li>
      </ul>

      <ul slot="body" class="docs__simple-list">
        <li>
          <button type="button" class="button button--large">Large</button>
        </li>
        <li>
          <button type="button" class="button">Regular</button>
        </li>
        <li>
          <button type="button" class="button button--small">Small</button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Sizes" :code="button_sizes" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>Out of the box buttons are displayed in basic size. Add a <code>small</code> or <code>large</code> prop to change sizes.</p>
        </li>
      </ul>

      <ul slot="body" class="docs__simple-list">
        <li><o-button text="Large" size="large" /></li>
        <li><o-button text="Regular" /></li>
        <li><o-button text="Small" size="small" /></li>
      </ul>
    </docs-item>



    <!-- Wide -->
    <docs-item title="Wide" :code="button_wide_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>To make a button horizontally fit inside it's parent element add a <code>.button--wide</code> class to it. Buttons of any size and types can be wide.</p>
        </li>
      </ul>

      <ul slot="body" class="docs__simple-list">
        <li>
          <button type="button" class="button button--large button--wide">Continue<i class="icon-arrow-right"></i></button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Wide" :code="button_wide" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>To make a button horizontally fit inside it's parent element add a <code>wide</code> prop to it. Buttons of any size and types can be wide.</p>
        </li>
      </ul>

      <ul slot="body" class="docs__simple-list">
        <li><o-button text="Continue" size="large" icon="arrow-right" wide /></li>
      </ul>
    </docs-item>



    <!-- Variants -->
    <docs-item title="Variants" :code="button_variants_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <button type="button" class="button button--basic">Primary basic</button>
        </li>
        <li>
          <button type="button" class="button button--secondary button--basic">Secondary basic</button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Variants" :code="button_variants" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-button text="Primary basic" variant="basic" /></li>
        <li><o-button text="Secondary basic" role="secondary" variant="basic" /></li>
      </ul>
    </docs-item>



    <!-- Icon -->
    <docs-item title="Icon" :code="button_icon_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>Icon only</p>
          <button type="button" class="button button--icon-only"><i class="icon-remove"></i></button>
        </li>
        <li>
          <p>With an icon</p>
          <button type="button" class="button">Continue<i class="icon-arrow-right"></i></button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Icon" :code="button_icon" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>Icon only</p>
          <o-button icon="remove" />
        </li>
        <li>
          <p>With an icon</p>
          <o-button text="Continue" icon="arrow-right" />
        </li>
      </ul>
    </docs-item>



    <!-- Disabled -->
    <docs-item title="Disabled" :code="button_disabled_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <button type="button" class="button" disabled="disabled">Can't touch this</button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Disabled" :code="button_disabled" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-button text="Can't touch this" disabled /></li>
      </ul>
    </docs-item>



    <!-- Colors -->
    <docs-item title="Colors" :code="button_colors_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <li>
            <button type="button" class="button">Button</button>
            <button type="button" class="button button--secondary">Button</button>
          </li>
        </li>
        <li>
          <button type="button" class="button button--color-secondary">Button</button>
          <button type="button" class="button button--secondary button--color-secondary">Button</button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Colors" :code="button_colors" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-button text="Button" />
          <o-button text="Button" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="secondary" />
          <o-button text="Button" color="secondary" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="red" />
          <o-button text="Button" color="red" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="orange" />
          <o-button text="Button" color="orange" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="yellow" />
          <o-button text="Button" color="yellow" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="green" />
          <o-button text="Button" color="green" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="indigo" />
          <o-button text="Button" color="indigo" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="blue" />
          <o-button text="Button" color="blue" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="violet" />
          <o-button text="Button" color="violet" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="black" />
          <o-button text="Button" color="black" role="secondary" />
        </li>
        <li>
          <o-button text="Button" color="gray" />
          <o-button text="Button" color="gray" role="secondary" />
        </li>
        <li class="bg-black">
          <o-button text="Button" color="white" />
          <o-button text="Button" color="white" role="secondary" />
        </li>
      </ul>
    </docs-item>



    <!-- Inverted -->
    <docs-item title="Inverted" :code="button_inverted_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li class="bg-primary">
          <button type="button" class="button button--inverted">Button</button>
          <button type="button" class="button button--secondary button--inverted">Button</button>
        </li>
        <li class="bg-secondary">
          <button type="button" class="button button--inverted button--color-secondary">Button</button>
          <button type="button" class="button button--secondary button--inverted button--color-secondary">Button</button>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Inverted" :code="button_inverted" v-else>
      <ul slot="body" class="docs__simple-list">
        <li class="bg-primary">
          <o-button text="Button" inverted />
          <o-button text="Button" role="secondary" inverted />
        </li>
        <li class="bg-secondary">
          <o-button text="Button" color="secondary" inverted />
          <o-button text="Button" color="secondary" role="secondary" inverted />
        </li>
        <li class="bg-red">
          <o-button text="Button" color="red" inverted />
          <o-button text="Button" color="red" role="secondary" inverted />
        </li>
        <li class="bg-orange">
          <o-button text="Button" color="orange" inverted />
          <o-button text="Button" color="orange" role="secondary" inverted />
        </li>
        <li class="bg-yellow">
          <o-button text="Button" color="yellow" inverted />
          <o-button text="Button" color="yellow" role="secondary" inverted />
        </li>
        <li class="bg-green">
          <o-button text="Button" color="green" inverted />
          <o-button text="Button" color="green" role="secondary" inverted />
        </li>
        <li class="bg-indigo">
          <o-button text="Button" color="indigo" inverted />
          <o-button text="Button" color="indigo" role="secondary" inverted />
        </li>
        <li class="bg-blue">
          <o-button text="Button" color="blue" inverted />
          <o-button text="Button" color="blue" role="secondary" inverted />
        </li>
        <li class="bg-violet">
          <o-button text="Button" color="violet" inverted />
          <o-button text="Button" color="violet" role="secondary" inverted />
        </li>
        <li class="bg-black">
          <o-button text="Button" color="black" inverted />
          <o-button text="Button" color="black" role="secondary" inverted />
        </li>
        <li class="bg-gray">
          <o-button text="Button" color="gray" inverted />
          <o-button text="Button" color="gray" role="secondary" inverted />
        </li>
        <li class="bg-white">
          <o-button text="Button" color="white" inverted />
          <o-button text="Button" color="white" role="secondary" inverted />
        </li>
      </ul>
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
          <td>role</td>
          <td>Set with <code>.button--{role}</code> class</td>
          <td><code>primary</code>, <code>secondary</code> or <code>basic</code></td>
          <td>String</td>
          <td>-</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>Add an icon to a button like <code>.icon-{icon-name}</code></td>
          <td>See <a href="/docs/global/icons">Icons</a> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>Set with <code>.button--color-{color}</code></td>
          <td>See <a href="/docs/global/colors">Colors</a> page</td>
          <td>String</td>
          <td>-</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Set with <code>.button--{size}</code></td>
          <td><code>small</code>, <code>large</code></td>
          <td>String</td>
          <td>-</td>
          <td>regular</td>
        </tr>
        <tr>
          <td>wide</td>
          <td>Make a button of any size horizontally fit inside it's parent element. Set with <code>.button--wide</code></td>
          <td><code>wide</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>invert</td>
          <td>Invert a button so it can be placed on a solid color background. Set with <code>.button--inverted</code></td>
          <td><code>inverted</code></td>
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
          <td>type</td>
          <td>Possible values: <code>button</code>, <code>submit</code>, <code>reset</code></td>
          <td>String</td>
          <td>false</td>
          <td>button</td>
        </tr>
        <tr>
          <td>role</td>
          <td>Set <code>primary</code> (default), <code>secondary</code> or <code>basic</code> style</td>
          <td>String</td>
          <td>false</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>text</td>
          <td>Describe button's action</td>
          <td>String</td>
          <td>false</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>Add an icon to a button. See <a href="/docs/global/icons">Icons</a> page for possible values.</td>
          <td>String</td>
          <td>false</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>See <a href="/docs/global/colors">Colors</a> page for possible values</td>
          <td>String</td>
          <td>false</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Leave blank for regular size. Possible sizes: <code>small</code>, <code>large</code></td>
          <td>String</td>
          <td>false</td>
          <td>basic</td>
        </tr>
        <tr>
          <td>wide</td>
          <td>Make a button of any size horizontally fit inside it's parent element</td>
          <td>Boolean</td>
          <td>false</td>
          <td>-</td>
        </tr>
        <tr>
          <td>invert</td>
          <td>Invert a button so it can be placed on a solid color background</td>
          <td>Boolean</td>
          <td>false</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsButton',

  data () {
    return {
      is_html: true,
      button_roles: `<o-button text="Primary" />
<o-button text="Secondary" role="secondary" />`,
      button_roles_html: `<button type="button" class="button">Primary</button>
<button type="button" class="button button--secondary">Secondary</button>`,

      button_sizes: `<o-button text="Large" size="large" />
<o-button text="Regular" />
<o-button text="Small" size="small" />`,
      button_sizes_html: `<button type="button" class="button button--large">
  Large
</button>

<button type="button" class="button">
  Regular
</button>

<button type="button" class="button button--small">
  Small
</button>`,

      button_wide: `<o-button text="Continue" size="large" icon="arrow-right" wide />`,
      button_wide_html: `<button type="button" class="button button--large button--wide">Continue<i class="icon-arrow-right"></i></button>`,

      button_variants: `<o-button text="Primary basic" variant="basic" />
<o-button text="Secondary basic" role="secondary" variant="basic" />`,
      button_variants_html: `<button type="button" class="button button--basic">Primary basic</button>
<button type="button" class="button button--secondary button--basic">Secondary basic</button>`,

      button_icon: `<o-button icon="delete" />
<o-button text="Continue" icon="arrow-right" />`,
      button_icon_html: `<button type="button" class="button button--icon-only"><i class="icon-remove"></i></button>
<button type="button" class="button">Continue<i class="icon-arrow-right"></i></button>`,

      button_disabled: `<o-button text="Can't touch this" disabled />`,
      button_disabled_html: `<button type="button" class="button" disabled="disabled">Can't touch this</button>`,

      button_colors: `<o-button text="Button" />
<o-button text="Button" role="secondary" />
<o-button text="Button" color="secondary" />
<o-button text="Button" color="secondary" role="secondary" />
<o-button text="Button" color="red" />
<o-button text="Button" color="red" role="secondary" />
<o-button text="Button" color="orange" />
<o-button text="Button" color="orange" role="secondary" />
<o-button text="Button" color="yellow" />
<o-button text="Button" color="yellow" role="secondary" />
<o-button text="Button" color="green" />
<o-button text="Button" color="green" role="secondary" />
<o-button text="Button" color="indigo" />
<o-button text="Button" color="indigo" role="secondary" />
<o-button text="Button" color="blue" />
<o-button text="Button" color="blue" role="secondary" />
<o-button text="Button" color="violet" />
<o-button text="Button" color="violet" role="secondary" />
<o-button text="Button" color="black" />
<o-button text="Button" color="black" role="secondary" />
<o-button text="Button" color="gray" />
<o-button text="Button" color="gray" role="secondary" />
<o-button text="Button" color="white" />
<o-button text="Button" color="white" role="secondary" />`,
      button_colors_html: `<button type="button" class="button button--color-{color}">Button</button>
<button type="button" class="button button--color-{color} button--{role}">Button</button>`,

      button_inverted: `<o-button text="Button" inverted />
<o-button text="Button" role="secondary" inverted />
<o-button text="Button" color="secondary" inverted />
<o-button text="Button" color="secondary" role="secondary" inverted />
<o-button text="Button" color="red" inverted />
<o-button text="Button" color="red" role="secondary" inverted />
<o-button text="Button" color="orange" inverted />
<o-button text="Button" color="orange" role="secondary" inverted />
<o-button text="Button" color="yellow" inverted />
<o-button text="Button" color="yellow" role="secondary" inverted />
<o-button text="Button" color="green" inverted />
<o-button text="Button" color="green" role="secondary" inverted />
<o-button text="Button" color="indigo" inverted />
<o-button text="Button" color="indigo" role="secondary" inverted />
<o-button text="Button" color="blue" inverted />
<o-button text="Button" color="blue" role="secondary" inverted />
<o-button text="Button" color="violet" inverted />
<o-button text="Button" color="violet" role="secondary" inverted />
<o-button text="Button" color="black" inverted />
<o-button text="Button" color="black" role="secondary" inverted />
<o-button text="Button" color="gray" inverted />
<o-button text="Button" color="gray" role="secondary" inverted />
<o-button text="Button" color="white" inverted />
<o-button text="Button" color="white" role="secondary" inverted />`,
      button_inverted_html: `<button type="button" class="button button--color-{color} button--inverted">Button</button>
<button type="button" class="button button--color-{color} button--{role} button--inverted">Button</button>`
    }
  }
}
</script>
