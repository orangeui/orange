<template>
  <div class="docs__sidebar-wrap">
    <aside class="docs__sidebar">
      <ul>
        <h5>Getting started</h5>

        <!-- <li><router-link :to="{ name: 'documentation'}" exact><span>About</span></router-link></li> -->
        <li><router-link :to="{ name: 'docs'}" exact><span>Install</span></router-link></li>
      </ul>

      <ul>
        <h5>Global</h5>

        <li><router-link :to="{ name: 'docs-colors'}"><span>Colors</span></router-link></li>
        <li><router-link :to="{ name: 'docs-icons'}"><span>Icons</span></router-link></li>
        <li><router-link :to="{ name: 'docs-materials'}"><span>Materials</span></router-link></li>
        <li><router-link :to="{ name: 'docs-spacings'}"><span>Spacings</span></router-link></li>
      </ul>

      <ul>
        <h5>Typography</h5>

        <li><router-link :to="{ name: 'docs-typography-font'}"><span>Font</span></router-link></li>
        <li><router-link :to="{ name: 'docs-typography-sizes'}"><span>Sizes</span></router-link></li>
        <li><router-link :to="{ name: 'docs-typography-styles'}"><span>Styles</span></router-link></li>
      </ul>

      <ul>
        <h5>Components</h5>

        <li>
          <ul>
            <h6>Basic</h6>

            <li><router-link :to="{ name: 'docs-button'}"><span>Button</span></router-link></li>
            <li><router-link :to="{ name: 'docs-label'}"><span>Label</span></router-link></li>
            <li><router-link :to="{ name: 'docs-list'}"><span>List</span></router-link></li>
            <li><router-link :to="{ name: 'docs-navigation'}"><span>Navigation</span></router-link></li>
            <li><router-link :to="{ name: 'docs-table'}"><span>Table</span></router-link></li>
          </ul>
        </li>

        <li>
          <ul>
            <h6>Custom</h6>

            <li><router-link :to="{ name: 'docs-avatar'}"><span>Avatar</span></router-link></li>
            <li><router-link :to="{ name: 'docs-breadcrumbs'}"><span>Breadcrumbs</span></router-link></li>
            <li><router-link :to="{ name: 'docs-callout'}"><span>Callout</span></router-link></li>
            <li><router-link :to="{ name: 'docs-card'}"><span>Card</span></router-link></li>
            <li><router-link :to="{ name: 'docs-empty-state'}"><span>Empty State</span></router-link></li>
            <li><router-link :to="{ name: 'docs-message'}"><span>Message</span></router-link></li>
          </ul>
        </li>

        <li>
          <ul>
            <h6>Forms</h6>

            <li><router-link :to="{ name: 'docs-form-checkbox'}"><span>Checkbox</span></router-link></li>
            <li><router-link :to="{ name: 'docs-form-dropdown'}"><span>Dropdown</span></router-link></li>
            <li><router-link :to="{ name: 'docs-form-input'}"><span>Input</span></router-link></li>
            <!-- <li><router-link :to="{ name: 'docs-form-input-format'}"><span>Input Format</span></router-link></li> -->
            <li><router-link :to="{ name: 'docs-form-radio'}"><span>Radio</span></router-link></li>
            <li><router-link :to="{ name: 'docs-form-textarea'}"><span>Textarea</span></router-link></li>
            <li><router-link :to="{ name: 'docs-form-toggle'}"><span>Toggle</span></router-link></li>
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
