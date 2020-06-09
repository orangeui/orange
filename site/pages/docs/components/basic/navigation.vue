<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Navigation</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A navigation enables users to <mark>move around an app</mark>, visiting areas that are currently not in view.</p>
        <p>The component is a custom Vue component written in semantic markup, and comes in <mark>default</mark>, <mark>with Icons</mark>, and <mark>toned in color</mark> styles.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="navigation_default_html" v-if="is_html">
      <div slot="body">
        <nav class="o-nav">
          <ul>
            <li>
              <a href="/docs/navigation" class="is-active">Navigation</a>
            </li>
            <li>
              <a href="/docs/breadcrumbs">Breadcrumbs</a>
            </li>
            <li>
              <a href="/docs/message">Message</a>
            </li>
            <li>
              <a href="/docs/empty-state">Empty State</a>
            </li>
          </ul>
        </nav>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="navigation_default" v-else>
      <div slot="body">
        <o-navigation>
          <o-navigation-item to="navigation">
            Navigation
          </o-navigation-item>

          <o-navigation-item to="breadcrumbs">
            Breadcrumbs
          </o-navigation-item>

          <o-navigation-item to="message">
            Message
          </o-navigation-item>

          <o-navigation-item to="empty-state">
            Empty State
          </o-navigation-item>
        </o-navigation>
      </div>
    </docs-item>

    <!-- With icons -->
    <docs-item title="With icons" :code="navigation_icons_html" v-if="is_html">
      <div slot="body">
        <nav class="o-nav">
          <ul>
            <li>
              <a href="/docs/navigation" class="is-active">
                <span class="o-icon-integrations"></span> Navigation
              </a>
            </li>
            <li>
              <a href="/docs/breadcrumbs">
                <span class="o-icon-theme"></span> Breadcrumbs
              </a>
            </li>
            <li>
              <a href="/docs/message">
                <span class="o-icon-rules"></span> Message
              </a>
            </li>
            <li>
              <a href="/docs/empty-state">
                <span class="o-icon-code"></span> Empty State
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </docs-item>

    <docs-item title="With icons" :code="navigation_icons" v-else>
      <div slot="body">
        <o-navigation>
          <o-navigation-item to="navigation" icon="integrations">
            Navigation
          </o-navigation-item>

          <o-navigation-item to="breadcrumbs" icon="theme">
            Breadcrumbs
          </o-navigation-item>

          <o-navigation-item to="message" icon="rules">
            Message
          </o-navigation-item>

          <o-navigation-item to="empty-state" icon="code">
            Empty State
          </o-navigation-item>
        </o-navigation>
      </div>
    </docs-item>

    <!-- Align Center -->
    <docs-item title="Align center" :code="navigation_center">
      <div slot="body">
        <nav class="o-nav o-nav--center">
          <ul>
            <li>
              <a href="/docs/navigation" class="is-active">Navigation</a>
            </li>
            <li>
              <a href="/docs/breadcrumbs">Breadcrumbs</a>
            </li>
            <li>
              <a href="/docs/message">Message</a>
            </li>
            <li>
              <a href="/docs/empty-state">Empty State</a>
            </li>
          </ul>
        </nav>
      </div>
    </docs-item>

    <!-- Align Right -->
    <docs-item title="Align right" :code="navigation_right">
      <div slot="body">
        <nav class="o-nav o-nav--right">
          <ul>
            <li>
              <a href="/docs/navigation" class="is-active">Navigation</a>
            </li>
            <li>
              <a href="/docs/breadcrumbs">Breadcrumbs</a>
            </li>
            <li>
              <a href="/docs/message">Message</a>
            </li>
            <li>
              <a href="/docs/empty-state">Empty State</a>
            </li>
          </ul>
        </nav>
      </div>
    </docs-item>

    <!-- Colors -->
    <docs-item title="Toned in color" :code="navigation_colors_html" v-if="is_html">
      <div slot="body">
        <nav class="o-nav o-nav--color-secondary">
          <ul>
            <li>
              <a href="/docs/navigation" class="is-active">Navigation</a>
            </li>
            <li>
              <a href="/docs/breadcrumbs">Breadcrumbs</a>
            </li>
            <li>
              <a href="/docs/message">Message</a>
            </li>
            <li>
              <a href="/docs/empty-state">Empty State</a>
            </li>
          </ul>
        </nav>
      </div>
    </docs-item>

    <docs-item title="Toned in color" :code="navigation_colors" v-else>
      <div slot="body">
        <o-navigation color="secondary">
          <o-navigation-item to="navigation">
            Navigation
          </o-navigation-item>

          <o-navigation-item to="breadcrumbs">
            Breadcrumbs
          </o-navigation-item>

          <o-navigation-item to="message">
            Message
          </o-navigation-item>

          <o-navigation-item to="empty-state">
            Empty State
          </o-navigation-item>
        </o-navigation>
      </div>
    </docs-item>

    <!-- Disabled item -->
    <docs-item title="Disabled item" :code="navigation_disabled_html" v-if="is_html">
      <div slot="body">
        <nav class="o-nav">
          <ul>
            <li>
              <a href="/docs/navigation" class="is-active">Navigation</a>
            </li>
            <li>
              <a href="/docs/breadcrumbs">Breadcrumbs</a>
            </li>
            <li>
              <a href="/docs/message">Message</a>
            </li>
            <li>
              <a href="/docs/empty-state" class="is-disabled">Empty State</a>
            </li>
          </ul>
        </nav>
      </div>
    </docs-item>

    <!-- Disabled item -->
    <docs-item title="Disabled item" :code="navigation_disabled" v-else>
      <div slot="body">
        <o-navigation>
          <o-navigation-item to="navigation">
            Navigation
          </o-navigation-item>

          <o-navigation-item to="breadcrumbs">
            Breadcrumbs
          </o-navigation-item>

          <o-navigation-item to="message">
            Message
          </o-navigation-item>

          <o-navigation-item to="empty-state">
            Empty State
          </o-navigation-item>

          <o-navigation-item to="empty-state" :disabled="true">
            Disabled item
          </o-navigation-item>
        </o-navigation>
      </div>
    </docs-item>

    <!-- - Usage  -->
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
          <td>Set with <code>.o-nav--color-{color}</code></td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>Add an icon to a navigation item like <code>.o-icon-{icon-name}</code></td>
          <td>See <router-link :to="{ name: 'docs-global-icons'}"><span>Icons</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Disable a navigation item. Set with <code>.is-disabled</code> on <code>a</code> tag</td>
          <td><code>is-disabled</code></td>
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
          <td>Set the navigation's color. See <router-link to="colors">Colors</router-link> page for possible values.</td>
          <td>String</td>
          <td>false</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icons</td>
          <td>Set the navigation item icon. See <router-link to="icons">Icons</router-link></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Disable a navigation item.</td>
          <td>Boolean</td>
          <td>false</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsNavigation',

  data () {
    return {
      is_html: true,
      navigation_default: `<o-navigation>
  <o-navigation-item to="navigation">
    Navigation
  </o-navigation-item>

  <o-navigation-item to="breadcrumbs">
    Breadcrumbs
  </o-navigation-item>

  <o-navigation-item to="message">
    Message
  </o-navigation-item>

  <o-navigation-item to="empty-state">
    Empty State
  </o-navigation-item>
</o-navigation>`,
      navigation_default_html: `<nav class="o-nav">
  <ul>
    <li>
      <a href="/docs/navigation" class="is-active">Navigation</a>
    </li>
    <li>
      <a href="/docs/breadcrumbs">Breadcrumbs</a>
    </li>
    <li>
      <a href="/docs/message">Message</a>
    </li>
    <li>
      <a href="/docs/empty-state">Empty State</a>
    </li>
  </ul>
</nav>`,

      navigation_icons: `<o-navigation>
  <o-navigation-item to="navigation" icon="integrations">
    Navigation
  </o-navigation-item>

  <o-navigation-item to="breadcrumbs" icon="theme">
    Breadcrumbs
  </o-navigation-item>

  <o-navigation-item to="message" icon="rules">
    Message
  </o-navigation-item>

  <o-navigation-item to="empty-state" icon="code">
    Empty State
  </o-navigation-item>
</o-navigation>`,
      navigation_icons_html: `<nav class="o-nav">
  <ul>
    <li>
      <a href="/docs/navigation" class="is-active">
        <span class="o-icon-integrations"></span> Navigation
      </a>
    </li>

    <li>
      <a href="/docs/breadcrumbs">
        <span class="o-icon-theme"></span> Breadcrumbs
      </a>
    </li>

    <li>
      <a href="/docs/message">
        <span class="o-icon-rules"></span> Message
      </a>
    </li>

    <li>
      <a href="/docs/empty-state">
        <span class="o-icon-code"></span> Empty State
      </a>
    </li>
  </ul>
</nav>`,
      navigation_right: `<nav class="o-nav o-nav--right">
  <ul>
    <li>
      <a href="/docs/navigation" class="is-active">Navigation</a>
    </li>
    <li>
      <a href="/docs/breadcrumbs">Breadcrumbs</a>
    </li>
    <li>
      <a href="/docs/message">Message</a>
    </li>
    <li>
      <a href="/docs/empty-state">Empty State</a>
    </li>
  </ul>
</nav>`,
      navigation_center: `<nav class="o-nav o-nav--center">
  <ul>
    <li>
      <a href="/docs/navigation" class="is-active">Navigation</a>
    </li>
    <li>
      <a href="/docs/breadcrumbs">Breadcrumbs</a>
    </li>
    <li>
      <a href="/docs/message">Message</a>
    </li>
    <li>
      <a href="/docs/empty-state">Empty State</a>
    </li>
  </ul>
</nav>`,
      navigation_colors: `<o-navigation color="secondary">
  <o-navigation-item to="navigation">
    Navigation
  </o-navigation-item>

  <o-navigation-item to="breadcrumbs">
    Breadcrumbs
  </o-navigation-item>

  <o-navigation-item to="message">
    Message
  </o-navigation-item>

  <o-navigation-item to="empty-state">
    Empty State
  </o-navigation-item>
</o-navigation>`,
      navigation_colors_html: `<nav class="o-nav o-nav--color-{color}">
  <ul>
    <li>
      <a href="/docs/navigation" class="is-active">Navigation</a>
    </li>
    <li>
      <a href="/docs/breadcrumbs">Breadcrumbs</a>
    </li>
    <li>
      <a href="/docs/message">Message</a>
    </li>
    <li>
      <a href="/docs/empty-state">Empty State</a>
    </li>
  </ul>
</nav>`,

      navigation_disabled: `<o-navigation>
  <o-navigation-item to="navigation">
    Navigation
  </o-navigation-item>

  <o-navigation-item to="breadcrumbs">
    Breadcrumbs
  </o-navigation-item>

  <o-navigation-item to="message">
    Message
  </o-navigation-item>

  <o-navigation-item to="empty-state">
    Empty State
  </o-navigation-item>

  <o-navigation-item to="empty-state" :disabled="true">
    Disabled item
  </o-navigation-item>
</o-navigation>`,
      navigation_disabled_html: `<nav class="o-nav">
  <ul>
    <li>
      <a href="/docs/navigation" class="is-active">Navigation</a>
    </li>
    <li>
      <a href="/docs/breadcrumbs">Breadcrumbs</a>
    </li>
    <li>
      <a href="/docs/message">Message</a>
    </li>
    <li>
      <a href="/docs/empty-state" class="is-disabled">Empty State</a>
    </li>
  </ul>
</nav>`
    }
  }
}
</script>
