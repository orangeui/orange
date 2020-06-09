<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Avatar</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Represents a character</p>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="avatar_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="o-avatar">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Basic" :code="avatar" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-avatar /></li>
      </ul>
    </docs-item>



    <!-- Looks -->
    <docs-item title="In circle" :code="avatar_circle_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="o-avatar o-avatar--circle">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="In circle" :code="avatar_circle" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-avatar look="circle" /></li>
      </ul>
    </docs-item>



    <!-- Sizes -->
    <docs-item title="Sizes" :code="avatar_sizes_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="o-avatar o-avatar--size-small">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
        <li>
          <div class="o-avatar">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
        <li>
          <div class="o-avatar o-avatar--size-large">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
        <li>
          <div style="width: 128px;">
            <div class="o-avatar o-avatar--size-auto">
              <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
                <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Sizes" :code="avatar_sizes" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-avatar size="small" /></li>
        <li><o-avatar /></li>
        <li><o-avatar size="large" /></li>
        <li>
          <div style="width: 128px">
            <o-avatar size="auto" />
          </div>
        </li>
      </ul>
    </docs-item>



    <!-- Colors -->
    <docs-item title="Colors" :code="avatar_colors_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="o-avatar o-avatar--color-primary">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
        <li>
          <div class="o-avatar o-avatar--color-secondary">
            <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Colors" :code="avatar_colors" v-else>
      <ul slot="body" class="docs__simple-list">
        <li><o-avatar color="primary" /></li>
        <li><o-avatar color="secondary" /></li>
        <li><o-avatar color="red" /></li>
        <li><o-avatar color="orange" /></li>
        <li><o-avatar color="yellow" /></li>
        <li><o-avatar color="green" /></li>
        <li><o-avatar color="indigo" /></li>
        <li><o-avatar color="blue" /></li>
        <li><o-avatar color="violet" /></li>
        <li><o-avatar color="black" /></li>
        <li><o-avatar color="gray" /></li>
        <li class="bg-black"><o-avatar color="white" /></li>
      </ul>
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
          <td>size</td>
          <td>Set with <code>.o-avatar--{size}</code> class</td>
          <td><code>null</code> - basic, <code>small</code>, <code>large</code>, <code>auto</code></td>
          <td>String</td>
          <td>-</td>
          <td>null</td>
        </tr>
        <tr>
          <td>look</td>
          <td>Set with <code>.o-avatar--{look}</code> class</td>
          <td><code>circle</code></td>
          <td>String</td>
          <td>-</td>
          <td>null</td>
        </tr>
        <tr>
          <td>color</td>
          <td>Set with <code>.o-avatar--color-{color}</code> class</td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>null - primary</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage" v-else>
      <table class="o-table o-table--compact o-table--celled" slot="body">
        <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>size</td>
          <td>Possible values: <code>null</code> - basic, <code>small</code>, <code>large</code>, <code>auto</code> - proportionally fits any parent element.</td>
          <td>String</td>
          <td>-</td>
          <td>null</td>
        </tr>
        <tr>
          <td>look</td>
          <td>Possible values: <code>circle</code></td>
          <td>String</td>
          <td>-</td>
          <td>null</td>
        </tr>
        <tr>
          <td>color</td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page for possible values</td>
          <td>String</td>
          <td>-</td>
          <td>null - primary</td>
        </tr>
        </tbody>
      </table>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsAvatar',

  data () {
    return {
      is_html: true,
      avatar: `<o-avatar />`,
      avatar_html: `<div class="o-avatar">
  <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
    <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
  </svg>
</div>`,

      avatar_circle: `<o-avatar look="circle" />`,
      avatar_circle_html: `<div class="o-avatar o-avatar--circle">
  <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
    <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
  </svg>
</div>`,

      avatar_sizes: `<o-avatar size="small" />
<o-avatar />
<o-avatar size="large" />

<div style="width: 128px">
  <o-avatar size="auto" />
</div>`,
      avatar_sizes_html: `<div class="o-avatar o-avatar--size-small">
  <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
    <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
  </svg>
</div>

<div class="o-avatar">
  <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
    <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
  </svg>
</div>

<div class="o-avatar o-avatar--size-large">
  <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
    <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
  </svg>
</div>

<div style="width: 128px;">
  <div class="o-avatar o-avatar--size-auto">
    <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
      <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
    </svg>
  </div>
</div>`,

      avatar_colors: `<o-avatar color="primary" />
<o-avatar color="secondary" />
<o-avatar color="red" />
<o-avatar color="orange" />
<o-avatar color="yellow" />
<o-avatar color="green" />
<o-avatar color="indigo" />
<o-avatar color="blue" />
<o-avatar color="violet" />
<o-avatar color="black" />
<o-avatar color="gray" />
<o-avatar color="white" />`,
      avatar_colors_html: `<div class="o-avatar o-avatar--color-{color}">
  <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
    <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
  </svg>
</div>`
    }
  }
}
</script>
