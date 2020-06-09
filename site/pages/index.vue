<template>
  <div class="docs__section container">
    <docs-item>
      <div slot="body">

        <o-empty-state image_path="/images/empty-state.svg" no_gutter>
          <h1 slot="heading">Orange</h1>
          <h3>
            Freshly squeezed UI <br>made open-source by <a href="https://fomo.com" target="_blank">Fomo</a>
          </h3>
          <template slot="buttons">
            <!-- <o-button text="Get Orange" size="large" /> -->
            <!-- <o-button text="Read docs" role="secondary" size="large" /> -->

            <router-link :to="{ name: 'docs'}" class="o-button o-button--large">Get Orange</router-link><router-link :to="{ name: 'manifesto'}" class="o-button o-button--secondary o-button--large">Read manifesto</router-link>
          </template>
        </o-empty-state>

      </div>
    </docs-item>
    <docs-item class="explanation">
      <div slot="body">
        <p>Orange is a design system, a collection of components and tools that help you build web sites and apps. It offers the design and logic for user interface in a simplified way. You don't have to be front-end to use it.</p>

        <p>Depending on your environment, you can pick <code>Orange CSS</code> written in vanilla JavaScript, or *drum roll* <code>Orange Vue</code> that's out soon.</p>
      </div>
    </docs-item>

    <docs-item title="" class="explanation">
      <div slot="body">
        <h3>What's it like</h3>
        <p>Orange is pretty opinionated about component styles - it tries to provide elements that are easy to place next to each other. It's also adjustable - tweak fonts, proportions and colors to fit your needs.</p>

        <h3>Why Orange</h3>
        <p>We picked orange because making a blue framework was just too damn easy. <br> Okay, we picked it because Fomo is orange 🧡</p>
      </div>
    </docs-item>

    <docs-item title="" class="explanation">
      <div slot="body">
        <h3>Contribute</h3>
        <p>Write code? You're kindly invited to <a href="https://github.com/orangeui/orange/issues/new" about="_blank">open an issue</a> on GitHub.</p>

        <h3>Team</h3>
        <p>Since launch in July we're regularly checking our inbox. <a href="mailto:orange@fomo.com">Drop us a line</a> with or without a good book recommendation / meme.</p>
      </div>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'Landing',

  head: {
    title: 'Freshly squeezed UI',
  }
}
</script>
