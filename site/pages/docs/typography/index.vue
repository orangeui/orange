<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Font</h1>
    </div>

    <!-- Family -->
    <docs-item title="Family" :css_code="fontFamilyCSS" class="explanation">
      <div slot="body">
        <p>Orange's default typeface is <mark>Rubik</mark>, designed by Philipp Hubert and Sebastian Fischer at Hubert & Fischer.</p>
      </div>
    </docs-item>

    <!-- Weights  -->
    <docs-item title="Weights" :code="fontWeightsHTML" :css_code="fontWeightsCSS">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply weights by adding <code>.font-{weight}</code> class to text elements</p>
        <p><o-label text="SCSS" size="small" /> recall weights with the <code>fontWeight('{weight}')</code> function</p>
      </div>

      <docs-simple-list :items="fontWeights" slot="body"></docs-simple-list>
    </docs-item>

    <!-- Italic  -->
    <docs-item title="Italic" :code="fontItalicHTML">
      <div slot="body">
        <p><o-label text="HTML" size="small" /> apply italic font style by adding <code>.text-italic</code> class to text elements</p>
      </div>

      <docs-simple-list :items="fontWeightsItalic" slot="body"></docs-simple-list>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsFont',

  data () {
    return {
      fontFamilyCSS: `.example {
  font-family: $o-font-primary;
}`,
      fontWeightsHTML: `<p class="font-extrabold">700 Extra Bold</p>
<p class="font-bold">600 Bold</p>
<p class="font-medium">500 Medium</p>
<p class="font-normal">400 Normal</p>`,
      fontWeightsCSS: `.example {
  font-weight: fontWeight('bold');
}`,
      fontWeights: [
        {
          title: '700 Extra Bold',
          content: '700 Extra Bold',
          class: 'fs-gamma font-extrabold',
          code: '<p class="font-extrabold">700 Extra Bold</p>'
        },
        {
          title: '600 Bold',
          content: '600 Bold',
          class: 'fs-gamma font-bold',
          code: '<p class="font-bold">600 Bold</p>'
        },
        {
          title: '500 Medium',
          content: '500 Medium',
          class: 'fs-gamma font-medium',
          code: '<p class="font-medium">500 Medium</p>'
        },
        {
          title: '400 Normal',
          content: '400 Normal',
          class: 'fs-gamma font-normal',
          code: '<p class="font-normal">400 Normal</p>'
        }
      ],
      fontWeightsCSS: `.example {
  font-weight: fontWeight('extrabold');
}`,
      fontItalicHTML: `<p class="font-extrabold text-italic">700 Extra Bold Italic</p>
<p class="font-bold text-italic">600 Bold Italic</p>
<p class="font-medium text-italic">500 Medium Italic</p>
<p class="font-normal text-italic">400 Normal Italic</p>`,
      fontWeightsItalic: [
        {
          title: '700 Extra Bold Italic',
          content: '700 Extra Bold Italic',
          class: 'fs-gamma font-extrabold text-italic',
          code: '<p class="font-extrabold text-italic">700 Extra Bold Italic</p>'
        },
        {
          title: '600 Bold Italic',
          content: '600 Bold Italic',
          class: 'fs-gamma font-bold text-italic',
          code: '<p class="font-bold text-italic">600 Bold Italic</p>'
        },
        {
          title: '500 Medium Italic',
          content: '500 Medium Italic',
          class: 'fs-gamma font-medium text-italic',
          code: '<p class="font-medium text-italic">500 Medium Italic</p>'
        },
        {
          title: '400 Normal Italic',
          content: '400 Normal Italic',
          class: 'fs-gamma font-normal text-italic',
          code: '<p class="font-normal text-italic">400 Normal Italic</p>'
        }
      ],
    }
  }
}
</script>
