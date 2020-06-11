<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Message</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A Message <mark>explains nearby content</mark>. It can serve as a simple explanation cue or hold a button that triggers an action. It takes full width of it's parent.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="message_html" v-if="is_html">
      <div slot="body">
        <div class="o-message">
          <div class="o-message__body">
            <p>
              Some text and a <a href="#">link</a>.
            </p>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="message" v-else>
      <div slot="body">
        <o-message>
          <p>
            Some text and a <a href='#'>link</a>.
          </p>
        </o-message>
      </div>
    </docs-item>

    <!-- Colors -->
    <docs-item title="Colors" :code="message_colors_html" v-if="is_html">
      <ul class="docs__simple-list" slot="body">
        <li>
          <div class="o-message">
            <div class="o-message__body">
              <h6>Heading</h6>
              <p>
                Body text
              </p>
            </div>
            <div class="o-message__action">
              <button type="button" class="o-button o-button--small o-button--color-gray">
                action
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="o-message o-message--color-secondary">
            <div class="o-message__body">
              <h6>Heading</h6>
              <p>
                Body text
              </p>
            </div>
            <div class="o-message__action">
              <button type="button" class="o-button o-button--small o-button--color-secondary">
                action
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="o-message o-message--color-yellow">
            <div class="o-message__body">
              <h6>Heading</h6>
              <p>
                Body text
              </p>
            </div>
            <div class="o-message__action">
              <button type="button" class="o-button o-button--small o-button--color-yellow">
                action
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="o-message o-message--color-green">
            <div class="o-message__body">
              <h6>Heading</h6>
              <p>
                Body text
              </p>
            </div>
            <div class="o-message__action">
              <button type="button" class="o-button o-button--small o-button--color-green">
                action
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="o-message o-message--color-red">
            <div class="o-message__body">
              <h6>Heading</h6>
              <p>
                Body text
              </p>
            </div>
            <div class="o-message__action">
              <button type="button" class="o-button o-button--small o-button--color-red">
                action
              </button>
            </div>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Colors" :code="message_colors" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-message heading="Heading">
            <p>
              Body text
            </p>

            <o-button text="action" size="small" slot="action" />
          </o-message>
        </li>
        <li>
          <o-message color="secondary" heading="Heading">
            <p>
              Body text
            </p>

            <o-button text="action" size="small" slot="action" />
          </o-message>
        </li>
        <li>
          <o-message color="yellow" heading="Heading">
            <p>
              Body text
            </p>

            <o-button text="action" size="small" slot="action" />
          </o-message>
        </li>
        <li>
          <o-message color="green" heading="Heading">
            <p>
              Body text
            </p>

            <o-button text="action" size="small" slot="action" />
          </o-message>
        </li>
        <li>
          <o-message color="red" heading="Heading">
            <p>
              Body text
            </p>

            <o-button text="action" size="small" slot="action" />
          </o-message>
        </li>
      </ul>
    </docs-item>

    <!-- With an avatar -->
    <docs-item title="With an avatar" :code="message_avatar_html" v-if="is_html">
      <div slot="body">
        <div class="o-message o-message--color-secondary">
          <div class="o-avatar o-avatar--size-small o-avatar--circle">
            <svg viewBox="0 0 80 80" width="80px" xmlns="http://www.w3.org/2000/svg">
              <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
            </svg>
          </div>
          <div class="o-message__body">
            <p>
              Body text
            </p>
          </div>
          <div class="o-message__action">
            <button type="button" class="o-button o-button--small o-button--color-secondary">
              action
            </button>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="With an avatar" :code="message_avatar" v-else>
      <div slot="body">
        <o-message color="secondary">
          <o-avatar name="user" look="circle" size="small" slot="avatar" />

          <p>
            Body text
          </p>

          <o-button text="action" size="small" slot="action" />
        </o-message>
      </div>
    </docs-item>

    <!-- Full width -->
    <docs-item title="No border radius" :code="message_no_border_radius_html" v-if="is_html">
      <div slot="body">
        <p>Meant to be used outside containers in order to take full browser width.</p>

        <div class="o-message o-message--color-secondary o-message--full">
          <div class="o-message__body">
            <h6>Heading</h6>
            <p>
              Body text
            </p>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="No border radius" :code="message_no_border_radius" v-else>
      <div slot="body">
        <p>Meant to be used outside containers in order to take full browser width.</p>

        <o-message color="secondary" size="full" heading="Heading">
          <p>
            Body text
          </p>
        </o-message>
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
          <td>color</td>
          <td>Set with <code>.o-message--color-{color}</code> class</td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Set with <code>.o-message--full</code>. Meant to be used outside containers in order to take full browser width.</td>
          <td><code>full</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

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
          <td>color</td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page for possible values</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Possible values: <code>full</code> (without border radius)</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>Throw a shadow</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsMessage',

  methods: {
    onClick () {
      console.log('test')
    }
  },

  data () {
    return {
      is_html: true,
      message: `<o-message>
  <p>
    Some text and a <a href='#'>link</a>.
  </p>
</o-message>`,
      message_html: `<div class="o-message">
  <div class="o-message__body">
    <p>
      Some text and a <a href="#">link</a>.
    </p>
  </div>
</div>`,

      message_colors: `<o-message>
  <p>
    <strong>Heading</strong><br>
    Body text
  </p>
  <o-button text="action" size="small" />
</o-message>

<o-message color="secondary">
  <p>
    <strong>Heading</strong><br>
    Body text
  </p>
  <o-button text="action" size="small" />
</o-message>

<o-message color="yellow">
  <p>
    <strong>Heading</strong><br>
    Body text
  </p>
  <o-button text="action" size="small" />
</o-message>

<o-message color="green">
  <p>
    <strong>Heading</strong><br>
    Body text
  </p>
  <o-button text="action" size="small" />
</o-message>

<o-message color="red">
  <p>
    <strong>Heading</strong><br>
    Body text
  </p>
  <o-button text="action" size="small" />
</o-message>`,
      message_colors_html: `<div class="o-message o-message--color-{color}">
  <div class="o-message__body">
    <h6>Heading</h6>
    <p>
      Body text
    </p>
  </div>
  <div class="o-message__action">
    <button type="button" class="o-button o-button--small o-button--color-{color}">
      action
    </button>
  </div>
</div>`,

      message_avatar: `<o-message color="secondary">
  <div>
    <o-avatar name="user" look="circle" size="small" />
    Body text
  </div>
  <o-button text="action" size="small" />
</o-message>`,
      message_avatar_html: `<div class="o-message o-message--color-{color}">
  <div class="o-avatar o-avatar--size-small o-avatar--circle">
    <svg viewBox="0 0 80 80" width="80px" height="auto" xmlns="http://www.w3.org/2000/svg">
      <path d="m28.6091684 41.6452381c3.2812101 2.1225413 7.1921206 3.3547619 11.3908316 3.3547619s8.1096215-1.2322206 11.3908316-3.3547619c16.5421837 4.9053348 28.6091684 20.2208507 28.6091684 38.3547619 0 22.09139-17.90861 40-40 40s-40-17.90861-40-40c0-18.1339112 12.0669847-33.4494271 28.6091684-38.3547619zm11.3908316.3547619c-9.9411255 0-18-8.0588745-18-18s8.0588745-18 18-18 18 8.0588745 18 18-8.0588745 18-18 18z" fill-rule="evenodd"></path>
    </svg>
  </div>
  <div class="o-message__body">
    <p>
      Body text
    </p>
  </div>
  <div class="o-message__action">
    <button type="button" class="o-button o-button--small o-button--color-{color}">
      action
    </button>
  </div>
</div>`,

      message_no_border_radius: `<o-message color="secondary" size="full">
  <p>
    <strong>Heading</strong><br>
    Body text
  </p>
</o-message>`,
      message_no_border_radius_html: `<div class="o-message o-message--color-{color} o-message--full">
  <div class="o-message__body">
    <h6>Heading</h6>
    <p>
      Body text
    </p>
  </div>
</div>`
    }
  }
}
</script>
