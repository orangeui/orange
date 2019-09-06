<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Callout</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Description</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="callout_html" v-if="is_html">
      <div slot="body">
        <div class="row">
          <div class="col-sm-3">
            <div class="thumbnail thumbnail--circle">
              <img src="/images/empty-state.svg" alt="Image Title" />
            </div>
          </div>
          <div class="col-sm-3">
            <div class="thumbnail">
              <img src="https://foundation.zurb.com/sites/docs/assets/img/thumbnail/03.jpg" alt="Image Title" />
            </div>
          </div>

          <div class="col-sm-3">
            <div class="thumbnail thumbnail--circle thumbnail--shadow">
              <img src="/images/empty-state.svg" alt="Image Title" />
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <!-- With a shadow  -->
    <docs-item title="With a shadow" :code="callout_html" v-if="is_html">
      <div slot="body">
        <div class="callout callout--color-white callout--shadow">
          <p>Orange color lies between red and yellow on the light spectrum</p>
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
          <td>color</td>
          <td>Set with <code>.callout--color-{color}</code></td>
          <td>See <a href="/colors">Colors</a> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>Throw a shadow</td>
          <td><code>.callout--shadow</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Show hover effects</td>
          <td><code>.callout--action</code></td>
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
      callout_html: `<div class="callout">
  <p>Orange color lies between red and yellow on the light spectrum</p>
</div>`,
    }
  }
}
</script>