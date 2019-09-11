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
        <img class="thumbnail" src="/images/thumbnails/cat.jpg" alt="Katze" />
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
        <img class="thumbnail thumbnail--circle" src="/images/thumbnails/dog-square.jpg" alt="Doggo" />
      </div>
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
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/cat.jpg" alt="Katze" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/dog.jpg" alt="Doggo" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/fox.jpg" alt="Foxy" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
            </a>
          </div>
          <div class="col-2">
            <a href="#" class="thumbnail thumbnail--action">
              <img src="/images/thumbnails/cat.jpg" alt="Katze" />
            </a>
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
      thumbnail_circle: `<img class="thumbnail thumbnail--circle thumbnail--shadow" src="/images/thumbnails/dog-square.jpg" alt="Doggo" />`,
      thumbnail_action: `<div class="grid">
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/cat.jpg" alt="Katze" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/dog.jpg" alt="Doggo" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/fox.jpg" alt="Foxy" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/hedgehog.jpg" alt="Hedgy" />
    </a>
  </div>
  <div class="col-2">
    <a href="#" class="thumbnail thumbnail--action">
      <img src="/images/thumbnails/cat.jpg" alt="Katze" />
    </a>
  </div>
</div>`
    }
  }
}
</script>