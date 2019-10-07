<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Text decoration</h1>
    </div>


    <!-- Text decoration  -->
    <docs-item title="" :code="textDecorationHTML">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply text decoration by adding <code>.text-{decoration}</code> class to text elements</p>
        <p><o-label text="HTML" size="small" /> to control text decoration on hover apply text decoration by adding <code>.hover:text-{decoration}</code> class to text elements</p>
      </div>

      <docs-simple-list :items="textDecoration" slot="body"></docs-simple-list>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsTextDecoration',

  data () {
    return {
      textDecorationHTML: `<p class="text-underline">Text decoration underline</p>
<p class="text-line-through">Text decoration line-through</p>
<p class="text-no-underline">Text decoration none</p>

<p class="hover:text-underline">Text decoration underline on hover</p>
<p class="hover:text-line-through">Text decoration line-through on hover</p>
<p class="text-underline hover:text-no-underline">Text decoration none on hover</p>`,
      textDecoration: [
        {
          title: '',
          content: 'Text decoration underline',
          class: 'fs-gamma text-underline',
          code: '<p class="text-underline">Text decoration underline</p>'
        },
        {
          title: '',
          content: 'Text decoration line-through',
          class: 'fs-gamma text-line-through',
          code: '<p class="text-line-through">Text decoration line-through</p>'
        },
        {
          title: '',
          content: 'Text decoration none',
          class: 'fs-gamma text-no-underline',
          code: '<p class="text-no-underline">Text decoration none</p>'
        },
        {
          title: '',
          content: 'Text decoration underline on hover',
          class: 'fs-gamma hover:text-underline',
          code: '<p class="hover:text-underline">Text decoration underline on hover</p>'
        },
        {
          title: '',
          content: 'Text decoration line-through on hover',
          class: 'fs-gamma hover:text-line-through',
          code: '<p class="hover:text-line-through">Text decoration line-through on hover</p>'
        },
        {
          title: '',
          content: 'Text decoration none on hover',
          class: 'fs-gamma text-underline hover:text-no-underline',
          code: '<p class="text-underline hover:text-no-underline">Text decoration none on hover</p>'
        },
      ],
    }
  }
}
</script>
