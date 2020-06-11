<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Image</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Add styling to images.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="thumbnail_basic" v-if="is_html">
      <div slot="body">
        <p>Apply classes directly to <code>img</code> tag or on <code>a</code> tag.</p>
        
        <img class="o-image" src="https://orangecss.com/images/thumbnails/cat.jpg" alt="Katze" />

        <a href="#" class="o-image">
          <img src="https://orangecss.com/images/thumbnails/fox.jpg" alt="Foxy" />
        </a>
      </div>
    </docs-item>
    
    <!-- With shadow  -->
    <docs-item title="With shadow" :code="thumbnail_shadow" v-if="is_html">
      <div slot="body">
        <img class="o-image o-image--shadow" src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
      </div>
    </docs-item>

    <!-- Rounded  -->
    <docs-item title="Rounded" :code="thumbnail_rounded" v-if="is_html">
      <div slot="body">
        <p>
          Add border radius to image.
        </p>

        <img class="o-image o-image--rounded" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />

        <a href="#" class="o-image o-image--size-small o-image--rounded o-image--action">
          <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
        </a>
      </div>
    </docs-item>

    <!-- In circle  -->
    <docs-item title="In circle" :code="thumbnail_circle" v-if="is_html">
      <div slot="body">
        <p>
          Please note that images have to be square for this style to work as expected.
        </p>

        <img class="o-image o-image--circle" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

        <a href="#" class="o-image o-image--size-small o-image--circle o-image--action">
          <img src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" />
        </a>
      </div>
    </docs-item>

    <!-- Sizes  -->
    <docs-item title="Sizes" :code="thumbnail_sizes" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>Default - auto size</p>
          <img class="o-image" src="https://orangecss.com/images/thumbnails/cat.jpg" alt="Katze" />
        </li>
        <li>
          <p>Extra small - 60px</p>
          <img class="o-image o-image--size-xsmall" src="https://orangecss.com/images/thumbnails/width-60/fox-60.jpg" alt="Foxy" />
        </li>
        <li>
          <p>Small - 120px</p>
          <img class="o-image o-image--size-small o-image--action" src="https://orangecss.com/images/thumbnails/width-120/hedgehog-120.jpg" alt="Hedgy" />
        </li>
        <li>
          <p>Medium - 240px</p>

          <img class="o-image o-image--size-medium" src="https://orangecss.com/images/thumbnails/width-240/dog-240.jpg" alt="Doggo" />
        </li>
        <li>
          <p>Large - 480px</p>
          <img class="o-image o-image--size-large" src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />
        </li>
      </ul>
    </docs-item>

    <!-- With action  -->
    <docs-item title="With action, in grid" :code="thumbnail_action" v-if="is_html">
      <div slot="body">
        <div class="grid">

          <div class="col-2">
            <a href="#" class="o-image o-image--action">
              <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="o-image o-image--action">
              <img src="https://orangecss.com/images/thumbnails/cat.jpg" alt="Katze" />
            </a>
          </div>
          
          <div class="col-2">
            <a href="#" class="o-image o-image--action">
              <img src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Katze" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="o-image o-image--action">
              <img src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Doggo" />
            </a>
          </div>

          <div class="col-2">
            <a href="#" class="o-image o-image--circle o-image--action">
              <img src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="o-image o-image--circle o-image--action">
              <img src="https://orangecss.com/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
            </a>
          </div>
         
        </div>
      </div>
    </docs-item>

    <!-- Any dimension in square or circle  -->
    <docs-item title="Any dimension in square or circle" :code="thumbnail_dimensions" v-if="is_html">
      <div slot="body">
        <p>The structure of HTML is different as additional wrappers are needed to achieve the result. To change size of this images apply class to <code>.image-wrapper</code> like <code>.o-image-wrapper--size-{size}</code></p>

        <div class="o-image-wrapper">
          <div class="o-image">
            <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
          </div>
        </div>

        <div class="o-image-wrapper o-image-wrapper--size-xsmall">
          <div class="o-image">
            <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
          </div>
        </div>

        <div class="o-image-wrapper o-image-wrapper--size-small">
          <div class="o-image o-image--circle">
            <img src="https://orangecss.com/images/thumbnails/width-240/hedgehog-240.jpg" alt="Hedgy" />
          </div>
        </div>

        <div class="o-image-wrapper o-image-wrapper--size-medium">
          <div class="o-image o-image--circle">
            <img src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />
          </div>
        </div>

        <h3>In grid</h3>
        <div class="grid">
          <div class="col-2">
            <div class="o-image-wrapper">
              <a href="#" class="o-image o-image--rounded o-image--action">
                <img src="https://orangecss.com/images/thumbnails/width-240/fox-240.jpg" alt="Foxy" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="o-image-wrapper">
              <a href="#" class="o-image o-image--rounded o-image--action">
                <img src="https://orangecss.com/images/thumbnails/width-240/cat-240.jpg" alt="Katze" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="o-image-wrapper">
              <a href="#" class="o-image o-image--circle o-image--action">
                <img src="https://orangecss.com/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="o-image-wrapper">
              <a href="#" class="o-image o-image--size-large o-image--circle o-image--action">
                <img src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </docs-item>


    <!-- Usage  -->
    <docs-item title="Usage" v-if="is_html">
      <table class="o-table o-table--compact o-table--celled" slot="body">
        <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
          <th>Possible values</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>shadow</td>
          <td>Throw a shadow</td>
          <td><code>.o-image--shadow</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>Add <code>$o-border-radius-main</code> (3px) border radius</td>
          <td><code>.o-image--rounded</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>Add 100% border radius</td>
          <td><code>.o-image--circle</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Add hover effect</td>
          <td><code>.o-image--action</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Set with <code>.o-image--size-{size}</code>, if you are using any dimension image you need to set it as <code>.o-image-wrapper--size-{size}</code></td>
          <td><code>xsmall</code>, <code>small</code>, <code>medium</code>, <code>large</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsImageGallery',

  data () {
    return {
      is_html: true,
      thumbnail_basic: `<img class="o-image" src="https://orangecss.com/images/thumbnails/cat.jpg" alt="Katze" />
<a href="#" class="o-image"><img src="https://orangecss.com/images/thumbnails/fox.jpg" alt="Foxy" /></a>`,
      thumbnail_shadow: `<img class="o-image o-image--shadow" src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />`,
      thumbnail_rounded: `<img class="o-image o-image--rounded" src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />
<a href="#" class="o-image o-image--size-small o-image--rounded o-image--action">
  <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
</a>`,
      thumbnail_circle: `<img class="o-image o-image--circle" src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />
<a href="#" class="o-image o-image--size-small o-image--circle o-image--action"><img src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Foxy" /></a>`,
      thumbnail_sizes: `<img class="o-image" src="https://orangecss.com/images/thumbnails/cat.jpg" alt="Katze" />
<img class="o-image o-image--size-xsmall" src="https://orangecss.com/images/thumbnails/width-60/fox-60.jpg" alt="Foxy" />
<img class="o-image o-image--size-small o-image--action" src="https://orangecss.com/images/thumbnails/width-120/hedgehog-120.jpg" alt="Hedgy" />
<img class="o-image o-image--size-medium" src="https://orangecss.com/images/thumbnails/width-240/dog-240.jpg" alt="Doggo" />
<img class="o-image o-image--size-large" src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />`,
      thumbnail_action: `<div class="grid">
  <div class="col-2">
    <a href="#" class="o-image o-image--action">
      <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="o-image o-image--action">
      <img src="https://orangecss.com/images/thumbnails/cat.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="o-image o-image--action">
      <img src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="o-image o-image--action">
      <img src="https://orangecss.com/images/thumbnails/square/fox-square.jpg" alt="Doggo" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="o-image o-image--circle o-image--action">
      <img src="https://orangecss.com/images/thumbnails/square/cat-square.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="o-image o-image--circle o-image--action">
      <img src="https://orangecss.com/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
    </a>
  </div>
</div>`,
      thumbnail_dimensions: `<div class="o-image-wrapper">
  <div class="o-image">
    <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
  </div>
</div>
<div class="o-image-wrapper o-image-wrapper--size-xsmall">
  <div class="o-image">
    <img src="https://orangecss.com/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
  </div>
</div>
<div class="o-image-wrapper o-image-wrapper--size-small">
  <div class="o-image o-image--circle">
    <img src="https://orangecss.com/images/thumbnails/width-240/hedgehog-240.jpg" alt="Hedgy" />
  </div>
</div>
<div class="o-image-wrapper o-image-wrapper--size-medium">
  <div class="o-image o-image--circle">
    <img src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />
  </div>
</div>

<div class="grid">
  <div class="col-2">
    <div class="o-image-wrapper">
      <a href="#" class="o-image o-image--rounded o-image--action">
        <img src="https://orangecss.com/images/thumbnails/width-240/fox-240.jpg" alt="Foxy" />
      </a>
    </div>
  </div>
  <div class="col-2">
    <div class="o-image-wrapper">
      <a href="#" class="o-image o-image--rounded o-image--action">
        <img src="https://orangecss.com/images/thumbnails/width-240/cat-240.jpg" alt="Katze" />
      </a>
    </div>
  </div>
  <div class="col-2">
    <div class="o-image-wrapper">
      <a href="#" class="o-image o-image--circle o-image--action">
        <img src="https://orangecss.com/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
      </a>
    </div>
  </div>
  <div class="col-2">
    <div class="o-image-wrapper">
      <a href="#" class="o-image o-image--size-large o-image--circle o-image--action">
        <img src="https://orangecss.com/images/thumbnails/square/dog-square.jpg" alt="Doggo" />
      </a>
    </div>
  </div>
</div>`
    }
  }
}
</script>