<template>
  <div>
    <div class="docs__view">
      <div class="docs__sidebar-wrap">
        <aside class="docs__sidebar">
          <ul>
            <h6>Getting started</h6>

            <!-- <li><router-link :to="{ name: 'documentation'}" exact><span>About</span></router-link></li> -->
            <li><router-link :to="{ name: 'install'}" exact><span>Install</span></router-link></li>
          </ul>

          <ul>
            <h6>Global</h6>

            <li><router-link :to="{ name: 'colors'}"><span>Colors</span></router-link></li>
            <li><router-link :to="{ name: 'icons'}"><span>Icons</span></router-link></li>
            <li><router-link :to="{ name: 'materials'}"><span>Materials</span></router-link></li>
            <li><router-link :to="{ name: 'spacings'}"><span>Spacings</span></router-link></li>
          </ul>

          <ul>
            <h6>Typography</h6>

            <li><router-link :to="{ name: 'typography-font'}"><span>Font</span></router-link></li>
            <li><router-link :to="{ name: 'typography-sizes'}"><span>Sizes</span></router-link></li>
            <li><router-link :to="{ name: 'typography-styles'}"><span>Styles</span></router-link></li>
          </ul>

          <ul>
            <h6>Components</h6>

            <li><router-link :to="{ name: 'avatar'}"><span>Avatar</span></router-link></li>
            <li><router-link :to="{ name: 'breadcrumbs'}"><span>Breadcrumbs</span></router-link></li>
            <li><router-link :to="{ name: 'button'}"><span>Button</span></router-link></li>
            <li><router-link :to="{ name: 'callout'}"><span>Callout</span></router-link></li>
            <li><router-link :to="{ name: 'card'}"><span>Card</span></router-link></li>
            <li><router-link :to="{ name: 'empty-state'}"><span>Empty State</span></router-link></li>
            <li><router-link :to="{ name: 'label'}"><span>Label</span></router-link></li>
            <li><router-link :to="{ name: 'list'}"><span>List</span></router-link></li>
            <li><router-link :to="{ name: 'message'}"><span>Message</span></router-link></li>
            <li><router-link :to="{ name: 'navigation'}"><span>Navigation</span></router-link></li>
            <!--<li><router-link :to="{ name: 'progress-bar'}"><span>Progress Bar</span></router-link></li>-->
            <li><router-link :to="{ name: 'table'}"><span>Table</span></router-link></li>
          </ul>

          <ul>
            <h6>Forms</h6>

            <li><router-link :to="{ name: 'checkbox'}"><span>Checkbox</span></router-link></li>
            <li><router-link :to="{ name: 'dropdown'}"><span>Dropdown</span></router-link></li>
            <li><router-link :to="{ name: 'input'}"><span>Input</span></router-link></li>
            <!-- <li><router-link :to="{ name: 'input-format'}"><span>Input Format</span></router-link></li> -->
            <li><router-link :to="{ name: 'radio'}"><span>Radio</span></router-link></li>
            <li><router-link :to="{ name: 'textarea'}"><span>Textarea</span></router-link></li>
            <li><router-link :to="{ name: 'toggle'}"><span>Toggle</span></router-link></li>
          </ul>

        </aside>
      </div>

      <div class="docs__content-wrap">
         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docs',

  data () {
    return {
    }
  }
}
</script>
