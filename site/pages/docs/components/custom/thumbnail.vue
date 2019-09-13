<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Thumbnail</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Thumbnail is a styled image which can be combined to gallery.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="thumbnail_basic" v-if="is_html">
      <div slot="body">
        <p>Apply classes directly to <code>img</code> tag or on <code>a</code> tag.</p>
        
        <img class="thumbnail" src="/images/thumbnails/cat.jpg" alt="Katze" />

        <a href="#" class="thumbnail">
          <img src="/images/thumbnails/fox.jpg" alt="Foxy" />
        </a>
      </div>
    </docs-item>
    
    <!-- With shadow  -->
    <docs-item title="With shadow" :code="thumbnail_shadow" v-if="is_html">
      <div slot="body">
        <img class="thumbnail thumbnail--shadow" src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
      </div>
    </docs-item>

    <!-- In circle  -->
    <docs-item title="In circle" :code="thumbnail_circle" v-if="is_html">
      <div slot="body">
        <p>
          Please note that images have to be square for this style to work as expected.
        </p>

        <img class="thumbnail thumbnail--circle" src="/images/thumbnails/square/dog-square.jpg" alt="Doggo" />

        <a href="#" class="thumbnail thumbnail--size-small thumbnail--circle thumbnail--action">
          <img src="/images/thumbnails/square/fox-square.jpg" alt="Foxy" />
        </a>
      </div>
    </docs-item>

    <!-- Sizes  -->
    <docs-item title="Sizes" :code="thumbnail_sizes" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <p>Default - auto size</p>
          <img class="thumbnail" src="/images/thumbnails/cat.jpg" alt="Doggo" />
        </li>
        <li>
          <p>Extra small - 60px</p>
          <img class="thumbnail thumbnail--size-xsmall" src="/images/thumbnails/width-60/fox-60.jpg" alt="Foxy" />
        </li>
        <li>
          <p>Small - 120px</p>
          <img class="thumbnail thumbnail--size-small thumbnail--action" src="/images/thumbnails/width-120/hedgehog-120.jpg" alt="Hedgy" />
        </li>
        <li>
          <p>Medium - 240px</p>

          <img class="thumbnail thumbnail--size-medium" src="/images/thumbnails/width-240/dog-240.jpg" alt="Doggo" />
        </li>
        <li>
          <p>Large - 480px</p>
          <img class="thumbnail thumbnail--size-large" src="/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />
        </li>
      </ul>
    </docs-item>

    <!-- With action  -->
    <docs-item title="With action, in grid" :code="thumbnail_action" v-if="is_html">
      <div slot="body">
        <div class="grid">

          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--size-auto thumbnail--action">
              <img src="/images/thumbnails/cat.jpg" alt="Katze" />
            </a>
          </div>
          
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/square/dog-square.jpg" alt="Katze" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/square/fox-square.jpg" alt="Doggo" />
            </a>
          </div>

          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
              <img src="/images/thumbnails/square/cat-square.jpg" alt="Katze" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
              <img src="/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
            </a>
          </div>
         
        </div>
      </div>
    </docs-item>

    <!-- Any dimension in square or circle  -->
    <docs-item title="Any dimension in square or circle" :code="thumbnail_dimensions" v-if="is_html">
      <div slot="body">
        <p>The structure of HTML is different as additional wrappers are needed to achieve the result. To change size of this thumbnails apply class to <code>.thumbnail-wrapper</code> like <code>.thumbnail-wrapper--size-{size}</code></p>

        <div class="thumbnail-wrapper">
          <div class="thumbnail">
            <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
          </div>
        </div>

        <div class="thumbnail-wrapper thumbnail-wrapper--size-xsmall">
          <div class="thumbnail">
            <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
          </div>
        </div>

        <div class="thumbnail-wrapper thumbnail-wrapper--size-small">
          <div class="thumbnail thumbnail--circle">
            <img src="/images/thumbnails/width-240/hedgehog-240.jpg" alt="Hedgy" />
          </div>
        </div>

        <div class="thumbnail-wrapper thumbnail-wrapper--size-medium">
          <div class="thumbnail thumbnail--circle">
            <img src="/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />
          </div>
        </div>

        <h3>In grid</h3>
        <div class="grid">
          <div class="col-2">
            <div class="thumbnail-wrapper">
              <a href="#" class="thumbnail thumbnail--action">
                <img src="/images/thumbnails/width-240/fox-240.jpg" alt="Foxy" />
              </a>
            </div>
          </div>

          <div class="col-2">
            <div class="thumbnail-wrapper">
              <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
                <img src="/images/thumbnails/width-240/cat-240.jpg" alt="Katze" />
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="thumbnail-wrapper">
              <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
                <img src="/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
              </a>
            </div>
          </div>
         
          <div class="col-2">
            <div class="thumbnail-wrapper">
              <a href="#" class="thumbnail thumbnail--size-large thumbnail--circle thumbnail--action">
                <img src="/images/thumbnails/square/dog-square.jpg" alt="Doggo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </docs-item>


    <!-- Usage  -->
    <docs-item title="Usage" v-if="is_html">
      <table class="table table--compact table--celled" slot="body">
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
          <td><code>.thumbnail--shadow</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>Add 100% border radius.</td>
          <td><code>.thumbnail--circle</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Add hover effect</td>
          <td><code>.thumbnail--action</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Set with <code>.thumbnail--size-{size}</code>, if you are using any dimension thumbnail you need to set it to <code>.thumbnail-wrapper--size-{size}</code></td>
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
      thumbnail_basic: `<img class="thumbnail" src="/images/thumbnails/cat.jpg" alt="Katze" />`,
      thumbnail_shadow: `<img class="thumbnail thumbnail--shadow" src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />`,
      thumbnail_circle: `<img class="thumbnail thumbnail--circle thumbnail--shadow" src="/images/thumbnails/square/dog-square.jpg" alt="Doggo" />`,
      thumbnail_sizes: `<img class="thumbnail" src="/images/thumbnails/cat.jpg" alt="Doggo" />
<img class="thumbnail thumbnail--size-xsmall" src="/images/thumbnails/width-60/fox-60.jpg" alt="Foxy" />
<img class="thumbnail thumbnail--size-small thumbnail--action" src="/images/thumbnails/width-120/hedgehog-120.jpg" alt="Hedgy" />
<img class="thumbnail thumbnail--size-medium" src="/images/thumbnails/width-240/dog-240.jpg" alt="Doggo" />
<img class="thumbnail thumbnail--size-large" src="/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />`,
      thumbnail_action: `<div class="grid">
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--size-auto thumbnail--action">
      <img src="/images/thumbnails/cat.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/square/dog-square.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/square/fox-square.jpg" alt="Doggo" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
      <img src="/images/thumbnails/square/cat-square.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
      <img src="/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
    </a>
  </div>
</div>`,
      thumbnail_dimensions: `<div class="thumbnail-wrapper">
  <div class="thumbnail">
    <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
  </div>
</div>
<div class="thumbnail-wrapper thumbnail-wrapper--size-xsmall">
  <div class="thumbnail">
    <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
  </div>
</div>
<div class="thumbnail-wrapper thumbnail-wrapper--size-small">
  <div class="thumbnail thumbnail--circle">
    <img src="/images/thumbnails/width-240/hedgehog-240.jpg" alt="Hedgy" />
  </div>
</div>
<div class="thumbnail-wrapper thumbnail-wrapper--size-medium">
  <div class="thumbnail thumbnail--circle">
    <img src="/images/thumbnails/width-480/hedgehog-480.jpg" alt="Hedgy" />
  </div>
</div>

<div class="grid">
  <div class="col-2">
    <div class="thumbnail-wrapper">
      <a href="#" class="thumbnail thumbnail--action">
        <img src="/images/thumbnails/width-240/fox-240.jpg" alt="Foxy" />
      </a>
    </div>
  </div>
  <div class="col-2">
    <div class="thumbnail-wrapper">
      <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
        <img src="/images/thumbnails/width-240/cat-240.jpg" alt="Katze" />
      </a>
    </div>
  </div>
  <div class="col-2">
    <div class="thumbnail-wrapper">
      <a href="#" class="thumbnail thumbnail--circle thumbnail--action">
        <img src="/images/thumbnails/square/hedgehog-square.jpg" alt="Hedgy" />
      </a>
    </div>
  </div>
  <div class="col-2">
    <div class="thumbnail-wrapper">
      <a href="#" class="thumbnail thumbnail--size-large thumbnail--circle thumbnail--action">
        <img src="/images/thumbnails/square/dog-square.jpg" alt="Doggo" />
      </a>
    </div>
  </div>
</div>`
    }
  }
}
</script>