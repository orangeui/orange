<template>
  <div>
    <div class="docs__navigation">
      <div class="docs__navigation-router">
        <router-link class="docs__navigation-logo" :to="{ name: 'landing'}"><img src="/images/logo.svg" alt=""></router-link>

        <o-navigation color="black">
          <o-navigation-item :to="{ name: 'install' }">Documentation</o-navigation-item>
          <!-- <o-navigation-item :to="{ name: 'examples' }">Examples</o-navigation-item> -->
          <o-navigation-item :to="{ name: 'changelog' }">Changelog</o-navigation-item>
          <o-navigation-item :to="{ name: 'manifesto' }">Manifesto</o-navigation-item>
          <o-navigation-item :to="{ name: 'contribute' }">Contribute</o-navigation-item>
        </o-navigation>
      </div>
      
      <router-link :to="{ name: 'install'}" class="button">Get Orange</router-link>
    </div>

    <router-view></router-view>
    
    <div class="docs__footer">
      <div>
        <p>Made at <a href="https://fomo.com" target="_blank">Fomo</a></p>
        <p class="docs__footer-links">
          <router-link :to="{ name: 'landing'}">Home</router-link>
          <router-link :to="{ name: 'install'}">Documentation</router-link>
          <a href="https://github.com/orangeui/orange/blob/master/LICENSE" target="_blank">License</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blank',

  data () {
    return {

    }
  }
}
</script>
