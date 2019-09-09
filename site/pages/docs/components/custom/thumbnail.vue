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
        <div class="thumbnail">
          <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
        </div>
      </div>
    </docs-item>
    
    <!-- With shadow  -->
    <docs-item title="With shadow" :code="thumbnail_shadow" v-if="is_html">
      <div slot="body">
        <div class="thumbnail thumbnail--shadow">
          <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
        </div>
      </div>
    </docs-item>

    <!-- As circle  -->
    <docs-item title="As circle" :code="thumbnail_circle" v-if="is_html">
      <div slot="body">
        <div class="thumbnail thumbnail--circle thumbnail--shadow">
          <img src="/images/thumbnails/dog-square.jpg" alt="Image Title" />
        </div>
      </div>
    </docs-item>

    <!-- As gallery  -->
    <docs-item title="As gallery" :code="thumbnail_gallery" v-if="is_html">
      <div slot="body">
        <div class="row">
          <div class="col-sm-3">
            <div class="thumbnail thumbnail--shadow">
              <img src="/images/thumbnails/dog.jpg" alt="Image Title" />
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail thumbnail--shadow">
              <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail thumbnail--shadow">
              <img src="/images/thumbnails/hedgehog.jpg" alt="Image Title" />
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail thumbnail--shadow">
              <img src="/images/thumbnails/fox.jpg" alt="Image Title" />
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
      thumbnail_basic: `<div class="thumbnail">
  <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
</div>`,
      thumbnail_shadow: `<div class="thumbnail thumbnail--shadow">
  <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
</div>`,
      thumbnail_circle: `<div class="thumbnail thumbnail--circle thumbnail--shadow">
  <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
</div>`,
      thumbnail_gallery: `<div class="row">
  <div class="col-sm-3">
    <div class="thumbnail thumbnail--shadow">
      <img src="/images/thumbnails/dog.jpg" alt="Image Title" />
    </div>
  </div>
  <div class="col-sm-3">
    <div class="thumbnail thumbnail--shadow">
      <img src="/images/thumbnails/cat.jpg" alt="Image Title" />
    </div>
  </div>
  <div class="col-sm-3">
    <div class="thumbnail thumbnail--shadow">
      <img src="/images/thumbnails/hedgehog.jpg" alt="Image Title" />
    </div>
  </div>
  <div class="col-sm-3">
    <div class="thumbnail thumbnail--shadow">
      <img src="/images/thumbnails/fox.jpg" alt="Image Title" />
    </div>
  </div>
</div>`,
    }
  }
}
</script>