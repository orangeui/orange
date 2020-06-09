<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Label</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Use a label when you want to <mark>classify content or data</mark>. It is often used as simple visual cue, but can also have interactive properties and act as a button (example: tags, that can be removed from a list).</p>
        <p>The Label component is an <code>inline-block</code> element meant to be used inline along elements such as text, buttons and forms. It's width is defined by the lenght of content that's passed inside.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="label_html" v-if="is_html">
      <ul class="docs__simple-list" slot="body">
        <li>
          <span class="o-label">Basic</span>
        </li>
        <li>
          <span class="o-label o-label--primary">Primary</span>
          <span class="o-label o-label--secondary">Secondary</span>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Basic" :code="label" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-label text="Basic" />
        </li>
        <li>
          <o-label text="Primary" color="primary" />
          <o-label text="Secondary" color="secondary" />
        </li>
        <li>
          <o-label text="Red" color="red" />
          <o-label text="Orange" color="orange" />
          <o-label text="Yellow" color="yellow" />
          <o-label text="Green" color="green" />
          <o-label text="Indigo" color="indigo" />
          <o-label text="Blue" color="blue" />
          <o-label text="Violet" color="violet" />
        </li>
      </ul>
    </docs-item>



    <!-- With icon -->
    <docs-item title="With an icon" :code="label_icon_html" v-if="is_html">
      <ul class="docs__simple-list" slot="body">
        <li>
          <span class="o-label">More <i class="o-icon-more"></i></span>
        </li>
        <li>
          <span class="o-label o-label--primary">Add <i class="o-icon-plus"></i></span>
          <span class="o-label o-label--secondary">Skip <i class="o-icon-arrow-skip"></i></span>
        </li>
      </ul>
    </docs-item>

    <docs-item title="With an icon" :code="label_icon" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-label text="More" icon="more" />
        </li>
        <li>
          <o-label text="Add" color="primary" icon="plus" />
          <o-label text="Skip" color="secondary" icon="arrow-skip" />
        </li>
        <li>
          <o-label text="Error" color="red" icon="x" />
          <o-label text="Loading" color="yellow" icon="refresh" />
          <o-label text="Download" color="orange" icon="arrow-down" />
          <o-label text="Success" color="green" icon="tick" />
          <o-label text="Edit" color="indigo" icon="settings" />
          <o-label text="Connect" color="blue" icon="integrations" />
          <o-label text="Code" color="violet" icon="code" />
        </li>
      </ul>
    </docs-item>



    <!-- Dismiss -->
    <docs-item title="Dismissible" :code="label_dismissible_html" v-if="is_html">
      <div slot="body">
        <span class="o-label o-label--dismiss">Dismissible <i class="o-icon-x"></i></span>
      </div>
    </docs-item>

    <docs-item title="Dismissible" :code="label_dismissible" v-else>
      <div slot="body">
        <o-label text="Dismissible" dismiss />
      </div>
    </docs-item>



    <!-- Small -->
    <docs-item title="Small" :code="label_small_html" v-if="is_html">
      <div slot="body">
        <span class="o-label o-label--small">Small</span>
      </div>
    </docs-item>

    <docs-item title="Small" :code="label_small" v-else>
      <div slot="body">
        <o-label text="Small" size="small" />
      </div>
    </docs-item>



    <!-- Pill -->
    <docs-item title="Pill" :code="label_pill_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <span class="o-label o-label--primary o-label--pill"></span>
          <span class="o-label o-label--secondary o-label--pill"></span>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Pill" :code="label_pill" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-label size="pill" color="primary" />
          <o-label size="pill" color="secondary" />
        </li>
        <li>
          <o-label size="pill" color="red" />
          <o-label size="pill" color="orange" />
          <o-label size="pill" color="yellow" />
          <o-label size="pill" color="green" />
          <o-label size="pill" color="indigo" />
          <o-label size="pill" color="blue" />
          <o-label size="pill" color="violet" />
        </li>
        <li>
          <o-label size="pill" color="white" />
          <o-label size="pill" />
          <o-label size="pill" color="gray-light" />
          <o-label size="pill" color="gray" />
          <o-label size="pill" color="gray-dark" />
          <o-label size="pill" color="gray-darkest" />
          <o-label size="pill" color="black" />
        </li>
      </ul>
    </docs-item>



    <!-- Dot -->
    <docs-item title="Dot" :code="label_dot_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <span class="o-label o-label--primary o-label--dot"></span>
          <span class="o-label o-label--secondary o-label--dot"></span>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Dot" :code="label_dot" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-label size="dot" color="primary" />
          <o-label size="dot" color="secondary" />
        </li>
        <li>
          <o-label size="dot" color="red" />
          <o-label size="dot" color="orange" />
          <o-label size="dot" color="yellow" />
          <o-label size="dot" color="green" />
          <o-label size="dot" color="indigo" />
          <o-label size="dot" color="blue" />
          <o-label size="dot" color="violet" />
        </li>
        <li>
          <o-label size="dot" color="white" />
          <o-label size="dot" />
          <o-label size="dot" color="gray-light" />
          <o-label size="dot" color="gray" />
          <o-label size="dot" color="gray-dark" />
          <o-label size="dot" color="gray-darkest" />
          <o-label size="dot" color="black" />
        </li>
      </ul>
    </docs-item>

    <!-- Label - Usage  -->
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
          <td>Set with <code>.o-label--{size}</code> class</td>
          <td><code>small</code>, <code>pill</code>, <code>dot</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>Set with <code>.o-label--{color}</code> class</td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>Add an icon to a label like <code>.o-icon-{icon-name}</code></td>
          <td>See <router-link :to="{ name: 'docs-global-icons'}"><span>Icons</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dismiss</td>
          <td>Set with <code>.o-label--dissmis</code>. It only adds hover style to icon.</td>
          <td><code>dismiss</code></td>
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
          <td>text</td>
          <td>Text inside label.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Size of label. Possible values <code>small</code>, <code>pill</code>, <code>dot</code>.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>Add icon next to text. Possible values are all <router-link to="icons">icons</router-link>.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dismiss</td>
          <td>Dismissible label. For now it only adds hover style.</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsLabel',

  data () {
    return {
      is_html: true,
      label: `<o-label text="Basic" />

<o-label text="Primary" color="primary" />
<o-label text="Secondary" color="secondary" />

<o-label text="Red" color="red" />
<o-label text="Orange" color="orange" />
<o-label text="Yellow" color="yellow" />
<o-label text="Green" color="green" />
<o-label text="Indigo" color="indigo" />
<o-label text="Blue" color="blue" />
<o-label text="Violet" color="violet" />`,
      label_html: `<span class="o-label">Basic</span>

<span class="o-label o-label--{color}">Primary</span>`,

      label_icon: `<o-label text="More" icon="more" />

<o-label text="Add" color="primary" icon="plus" />
<o-label text="Skip" color="secondary" icon="arrow-skip" />

<o-label text="Error" color="red" icon="x" />
<o-label text="Loading" color="yellow" icon="refresh" />
<o-label text="Download" color="orange" icon="arrow-down" />
<o-label text="Success" color="green" icon="tick" />
<o-label text="Edit" color="indigo" icon="settings" />
<o-label text="Connect" color="blue" icon="integrations" />
<o-label text="Code" color="violet" icon="code" />`,
      label_icon_html: `<span class="o-label">More <i class="o-icon-{icon}"></i></span>

<span class="o-label o-label--{color}">Add <i class="o-icon-{icon}"></i></span>`,

      label_dismissible: `<o-label text="Dismissible" dismiss />`,
      label_dismissible_html: `<span class="o-label o-label--dismiss">Dismissible <i class="o-icon-x"></i></span>`,

      label_small: `<o-label text="Small" size="small" />`,
      label_small_html: `<span class="o-label o-label--small">Small</span>`,

      label_pill: `<o-label size="pill" color="primary" />
<o-label size="pill" color="secondary" />

<o-label size="pill" color="red" />
<o-label size="pill" color="orange" />
<o-label size="pill" color="yellow" />
<o-label size="pill" color="green" />
<o-label size="pill" color="indigo" />
<o-label size="pill" color="blue" />
<o-label size="pill" color="violet" />

<o-label size="pill" color="white" />
<o-label size="pill" />
<o-label size="pill" color="gray-light" />
<o-label size="pill" color="gray" />
<o-label size="pill" color="gray-dark" />
<o-label size="pill" color="gray-darkest" />
<o-label size="pill" color="black" />`,
      label_pill_html: `<span class="o-label o-label--{color} o-label--pill"></span>`,

      label_dot: `<o-label size="dot" color="primary" />
<o-label size="dot" color="secondary" />

<o-label size="dot" color="red" />
<o-label size="dot" color="orange" />
<o-label size="dot" color="yellow" />
<o-label size="dot" color="green" />
<o-label size="dot" color="indigo" />
<o-label size="dot" color="blue" />
<o-label size="dot" color="violet" />

<o-label size="dot" color="white" />
<o-label size="dot" />
<o-label size="dot" color="gray-light" />
<o-label size="dot" color="gray" />
<o-label size="dot" color="gray-dark" />
<o-label size="dot" color="gray-darkest" />
<o-label size="dot" color="black" />`,
      label_dot_html: `<span class="o-label o-label--{color} o-label--dot"></span>`
    }
  }
}
</script>
