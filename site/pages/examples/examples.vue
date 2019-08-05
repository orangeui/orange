<template>
  <div>
    <div class="docs__view">
      <div class="docs__sidebar-wrap">
        <aside class="docs__sidebar">
          <ul>
            <h5>Orange in use</h5>

            <li><router-link :to="{ name: 'example_demo'}"><span>Demo</span></router-link></li>
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
  name: 'Examples',

  data () {
    return {
    }
  }
}
</script>
