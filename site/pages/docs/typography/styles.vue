<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Styles</h1>
    </div>
    
    <docs-item>
      <div slot="body">
        <p><o-label size="small" text="HTML" /> apply a color by adding <code>.color-{color}</code> class</p>
        <p><o-label size="small" text="SCSS" /> apply a color with the <code>color('{color}')</code> function</p>
      </div>
    </docs-item>

    <!-- Colors  -->
    <docs-item title="Grayscale" :items="fontGrayscale">
      <docs-simple-list :items="fontGrayscale" slot="body"></docs-simple-list>
    </docs-item>

    <!-- Colors  -->
    <docs-item title="Colors" :items="fontColors">
      <docs-simple-list :items="fontColors" slot="body"></docs-simple-list>
    </docs-item>

    <!-- Headings  -->
    <docs-item title="Headings" :items="fontHeadings">
      <docs-simple-list :items="fontHeadings" slot="body"></docs-simple-list>
    </docs-item>

    <!-- Body  -->
    <docs-item title="Body text" :items="fontBody">
      <docs-simple-list :items="fontBody" slot="body"></docs-simple-list>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsStyles',

  data () {
    return {
      fontGrayscale: [
        {
          title: 'Black',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-black',
          code: '<p class="color-black">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Gray Dark',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-gray-dark',
          code: '<p class="color-gray-dark">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Gray',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-gray',
          code: '<p class="color-gray">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Gray Light',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-gray-light',
          code: '<p class="color-gray-light">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Gray Off',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-gray-off',
          code: '<p class="color-gray-off">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'White Dark',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-white-dark',
          code: '<p class="color-white-dark">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'White Off',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-white-off',
          code: '<p class="color-white-off">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'White',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-white',
          code: '<p class="color-white">Suspendisse id nisi a magna...</p>'
        }
      ],
      fontColors: [
        {
          title: 'Primary',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-primary',
          code: '<p class="color-primary">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Secondary',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-secondary',
          code: '<p class="color-secondary">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Yellow',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-yellow',
          code: '<p class="color-yellow">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Green',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-green',
          code: '<p class="color-green">Suspendisse id nisi a magna...</p>'
        },
        {
          title: 'Red',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus.',
          class: 'color-red',
          code: '<p class="color-red">Suspendisse id nisi a magna...</p>'
        }
      ],
      sampleDocument: [
        {
          code: `<h1>Etiam lectus est, tincidunt sit amet</h1>
<h2>Torquent: augue at magna</h2>
<p>Duis aliquam, elit et viverra vulputate, augue magna vestibulum tellus. Quisque mattis a leo a mollis. Sed ac vehicula erat, sit amet feugiat risus. Class aptent <span class="text-italic">integer auctor consectetur erat a egestas,</span> sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
<p>Quisque sed erat ac orci vulputate <strong>lobortis in non turpis</strong>. Suspendisse potenti. Vivamus at magna id lectus finibus placerat:</p>
<ul>
  <li><p>In lacinia odio lectus, gravida semper felis blandit eu.</p></li>
  <li><p>Etiam condimentum, mauris ut tempus tempor, lorem <a href="#">ligula lacinia odio</a> sagittis.</p></li>
  <li><p>Curabitur consectetur risus ut tincidunt elementum.</p></li>
</ul>
<p class="fs-zeta color-gray">Donec sem orci, pellentesque ut sagittis semper, pharetra nec tellus. Phasellus eget condimentum mauris.</p>`
        }],
      fontHeadings: [
        {
          title: 'heading 1',
          content: 'social proof is the holy grail of marketing',
          class: 'h1',
          code: '<h1>heading 1</h1>'
        },
        {
          title: 'heading 2',
          content: 'social proof is the holy grail of marketing',
          class: 'h2',
          code: '<h2>heading 2</h2>'
        },
        {
          title: 'heading 3',
          content: 'social proof is the holy grail of marketing',
          class: 'h3',
          code: '<h3>heading 3</h3>'
        },
        {
          title: 'heading 4',
          content: 'social proof is the holy grail of marketing',
          class: 'h4',
          code: '<h4>heading 4</h4>'
        },
        {
          title: 'heading 5',
          content: 'social proof is the holy grail of marketing',
          class: 'h5',
          code: '<h5>heading 5</h5>'
        }
      ],
      fontBody: [
        {
          title: 'paragraph',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus. Integer mauris enim, dignissim eu vestibulum a, semper id velit. Donec rhoncus commodo leo, egestas tempus eros commodo eu. Suspendisse eu eleifend nibh. Nulla blandit felis et mattis auctor. Ut porta diam justo, eu dapibus ligula interdum ac. Suspendisse potenti.',
          class: '',
          code: '<p>Paragraph</p>'
        },
        {
          title: 'paragraph (small)',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus. Integer mauris enim, dignissim eu vestibulum a, semper id velit. Donec rhoncus commodo leo, egestas tempus eros commodo eu. Suspendisse eu eleifend nibh. Nulla blandit felis et mattis auctor. Ut porta diam justo, eu dapibus ligula interdum ac. Suspendisse potenti.',
          class: 'fs-zeta',
          code: '<p class="fs-zeta">Paragraph Small</p>'
        },
        {
          title: 'paragraph (light)',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus. Integer mauris enim, dignissim eu vestibulum a, semper id velit. Donec rhoncus commodo leo, egestas tempus eros commodo eu. Suspendisse eu eleifend nibh. Nulla blandit felis et mattis auctor. Ut porta diam justo, eu dapibus ligula interdum ac. Suspendisse potenti.',
          class: 'color-gray-light',
          code: '<p class="color-gray">Paragraph Light</p>'
        },
        {
          title: 'paragraph (small, light)',
          content: 'Suspendisse id nisi a magna lacinia lacinia sed sed purus. Integer mauris enim, dignissim eu vestibulum a, semper id velit. Donec rhoncus commodo leo, egestas tempus eros commodo eu. Suspendisse eu eleifend nibh. Nulla blandit felis et mattis auctor. Ut porta diam justo, eu dapibus ligula interdum ac. Suspendisse potenti.',
          class: 'fs-zeta color-gray-light',
          code: '<p class="fs-zeta color-gray-light">Paragraph Small Light</p>'
        },
        {
          title: 'paragraph (strong)',
          content: 'strong',
          class: 'font-bold',
          code: '<p class="font-bold">strong</p>'
        },
        {
          title: 'paragraph (italic)',
          content: 'italic',
          class: 'text-italic',
          code: '<p class="text-italic">italic</p>'
        }
      ]
    }
  }
}
</script>
