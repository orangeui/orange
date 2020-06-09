<template>
  <div :class="route_name">
    <div class="docs__navigation">
      <div class="docs__navigation-router">
        <router-link class="docs__navigation-logo" :to="{ name: 'index'}"><img src="/images/logo.svg" alt=""></router-link>

        <o-navigation color="black">
          <o-navigation-item :to="{ name: 'docs' }">Documentation</o-navigation-item>
          <!-- <o-navigation-item :to="{ name: 'examples' }">Examples</o-navigation-item> -->
          <o-navigation-item :to="{ name: 'manifesto' }">Manifesto</o-navigation-item>
          <li>
            <a href="https://github.com/orangeui/orange/releases" target="_blank">Changelog</a>
          </li>
          <li>
            <a href="https://github.com/orangeui/orange/issues" target="_blank">Contribute</a>
          </li>
        </o-navigation>
      </div>

      <router-link :to="{ name: 'docs'}" class="o-button">Get Orange</router-link>
    </div>

    <nuxt />

    <div class="docs__footer">
      <div>
        <p>Made at <a href="https://fomo.com" target="_blank">Fomo</a></p>
        <p class="docs__footer-links">
          <router-link :to="{ name: 'index'}">Home</router-link>
          <router-link :to="{ name: 'docs'}">Documentation</router-link>
          <a href="https://github.com/orangeui/orange/blob/master/LICENSE" target="_blank">License</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    route_name () {
      return `page-${this.$route.name}`
    }
  }
}
</script>
