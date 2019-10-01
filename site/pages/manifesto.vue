<template>
  <div class="docs__section container">
    <div class="docs__header">
      <h1>Manifesto</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <h2>Sorry we're late</h2>
        <p>
          <span class="text-italic">"You have good design,"</span> they said. But we kept it to ourselves. For years. We're not sure why. So here it is. The juice behind Fomo.com.
        </p>
        <p>
          Orange is <strong>opinionated</strong>. Some thoughts:
        </p>
        <ul>
          <li>
            most websites look the same
          </li>
          <li>
            design is a marketing channel
          </li>
          <li>
            free ideas <span class="text-italic">spread</span>
          </li>
        </ul>
        <p>
          So why are you still using Bootstrap? <router-link :to="{ name: 'docs'}">Get started</router-link>.
        </p>
        <p class="fs-zeta color-gray">
          Orange was imagined by Jan, Matevz, and Lucian.
        </p>
      </div>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
