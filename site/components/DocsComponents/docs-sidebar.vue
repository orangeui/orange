<template>
  <div class="docs__sidebar-wrap">
    <aside class="docs__sidebar">
      <router-link :to="{ name: 'docs'}" tag="h5">Getting started</router-link>

      <ul>
        <li><router-link :to="{ name: 'docs'}" exact><span>Install</span></router-link></li>
      </ul>

      <router-link :to="{ name: 'docs-global-colors'}" tag="h5">Global</router-link>

      <ul>
        <li><router-link :to="{ name: 'docs-global-colors'}" exact><span>Colors</span></router-link></li>
        <li><router-link :to="{ name: 'docs-global-background-colors'}"><span>Background colors</span></router-link></li>
        <li><router-link :to="{ name: 'docs-global-icons'}"><span>Icons</span></router-link></li>
      </ul>

      <router-link :to="{ name: 'docs-layout'}" tag="h5">Layout</router-link>

      <ul>
        <li><router-link :to="{ name: 'docs-layout'}" exact><span>Breakpoints</span></router-link></li>
        <li><router-link :to="{ name: 'docs-layout-container'}"><span>Container</span></router-link></li>
        <li><router-link :to="{ name: 'docs-layout-grid'}"><span>Grid</span></router-link></li>

        <li>
          <router-link :to="{ name: 'docs-layout-utilities'}" tag="h6">Utilities</router-link>
          <ul>
            <li><router-link :to="{ name: 'docs-layout-utilities-align'}"><span>Align</span></router-link></li>
            <li><router-link :to="{ name: 'docs-layout-utilities-border-radius'}"><span>Border Radius</span></router-link></li>
            <li><router-link :to="{ name: 'docs-layout-utilities-box-shadow'}"><span>Box Shadow</span></router-link></li>
            <li><router-link :to="{ name: 'docs-layout-utilities-display'}"><span>Display</span></router-link></li>
            <li><router-link :to="{ name: 'docs-layout-utilities-spacings'}"><span>Spacings</span></router-link></li>
          </ul>
        </li>
      </ul>

      <router-link :to="{ name: 'docs-typography'}" tag="h5">Typography</router-link>

      <ul>
        <li><router-link :to="{ name: 'docs-typography'}" exact><span>Font</span></router-link></li>
        <li><router-link :to="{ name: 'docs-typography-sizes'}"><span>Sizes</span></router-link></li>
        <li><router-link :to="{ name: 'docs-typography-styles'}"><span>Styles</span></router-link></li>

        <li>
          <router-link :to="{ name: 'docs-typography-utilities'}" tag="h6">Utilities</router-link>
          <ul>
            <li><router-link :to="{ name: 'docs-typography-utilities-text-align'}"><span>Text Align</span></router-link></li>
            <li><router-link :to="{ name: 'docs-typography-utilities-text-decoration'}"><span>Text Decoration</span></router-link></li>
          </ul>
        </li>
      </ul>

      <router-link :to="{ name: 'docs-components'}" tag="h5">Components</router-link>

      <ul>
        <li>
          <router-link :to="{ name: 'docs-components-basic'}" tag="h6">Basic</router-link>

          <ul>
            <li><router-link :to="{ name: 'docs-components-basic-button'}" exact><span>Button</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-basic-label'}"><span>Label</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-basic-list'}"><span>List</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-basic-navigation'}"><span>Navigation</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-basic-table'}"><span>Table</span></router-link></li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'docs-components-custom'}" tag="h6">Custom</router-link>

          <ul>
            <li><router-link :to="{ name: 'docs-components-custom-avatar'}" exact><span>Avatar</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-custom-breadcrumbs'}"><span>Breadcrumbs</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-custom-callout'}"><span>Callout</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-custom-card'}"><span>Card</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-custom-empty-state'}"><span>Empty State</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-custom-image'}"><span>Image</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-custom-message'}"><span>Message</span></router-link></li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'docs-components-form'}" tag="h6">Forms</router-link>

          <ul>
            <li><router-link :to="{ name: 'docs-components-form-checkbox'}" exact><span>Checkbox</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-form-dropdown'}"><span>Dropdown</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-form-input'}"><span>Input</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-form-radio'}"><span>Radio</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-form-textarea'}"><span>Textarea</span></router-link></li>
            <li><router-link :to="{ name: 'docs-components-form-toggle'}"><span>Toggle</span></router-link></li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'DocsSidebar'
  }
</script>
