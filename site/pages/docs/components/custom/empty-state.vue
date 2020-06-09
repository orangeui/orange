<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Empty State</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>An Empty State explains the view when it's empty.</p>
      </div>
    </docs-item>

    <!-- Inside a card -->
    <docs-item title="Inside a card" :code="empty_state_default_list_html" v-if="is_html">
      <div class="o-card" slot="body">
        <div class="o-card__body">
          <div class="o-empty-state">
            <div class="o-empty-state__content">
              <div class="o-empty-state__title">
                <h2>It's your first time here</h2>
              </div>

              <div class="o-empty-state__description">
                <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
              </div>

              <div class="o-empty-state__buttons">
                <button type="button" class="o-button">Continue</button>
              </div>
            </div>

            <div class="o-empty-state__image"><img src="/images/empty-state.svg"></div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Inside a card" :code="empty_state_default_list" v-else>
      <div class="o-card" slot="body">
        <div class="o-card__body">
          <o-empty-state image_path="/images/empty-state.svg">
            <h2 slot="heading">It's your first time here</h2>
            <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
            <template slot="buttons">
              <o-button text="Continue" />
            </template>
          </o-empty-state>
        </div>
      </div>
    </docs-item>

    <!-- No gutter -->
    <docs-item title="No gutter" :code="empty_state_no_gutter_list_html" v-if="is_html">
      <div class="o-empty-state o-empty-state--no-gutter" slot="body">
        <div class="o-empty-state__content">
          <div class="o-empty-state__title">
            <h2>It's your first time here</h2>
          </div>

          <div class="o-empty-state__description">
            <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
          </div>

          <div class="o-empty-state__buttons">
            <button type="button" class="o-button">
              Continue
            </button>
          </div>
        </div>

        <div class="o-empty-state__image"><img src="/images/empty-state.svg"></div>
      </div>
    </docs-item>

    <docs-item title="No gutter" :code="empty_state_no_gutter_list" v-else>
      <o-empty-state image_path="/images/empty-state.svg" slot="body" no_gutter>
        <h2 slot="heading">It's your first time here</h2>
        <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
        <template slot="buttons">
          <o-button text="Continue" />
        </template>
      </o-empty-state>
    </docs-item>

    <!-- Empty State - Usage  -->
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
          <td>no-gutter</td>
          <td>Remove side margins. Set with <code>.o-empty-state--no-gutter</code></td>
          <td><code>no-gutter</code></td>
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
          <td>image_path</td>
          <td>Set an image to display inside the component</td>
          <td>String</td>
          <td>true</td>
          <td>null</td>
        </tr>
        <tr>
          <td>no_gutter</td>
          <td>Remove side margins</td>
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
  name: 'DocsEmptyState',

  data () {
    return {
      is_html: true,
      empty_state_default_list: `<div class="o-card">
  <div class="o-card__body">
    <o-empty-state image_path="/images/empty-state.svg">
      <h2 slot="heading">It's your first time here</h2>
      <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
      <template slot="buttons">
        <o-button text="Continue" />
      </template>
    </o-empty-state>
  </div>
</div>`,
      empty_state_default_list_html: `<div class="o-card">
  <div class="o-card__body">
    <div class="o-empty-state">
      <div class="o-empty-state__content">
        <div class="o-empty-state__title">
          <h2>It's your first time here</h2>
        </div>

        <div class="o-empty-state__description">
          <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
        </div>

        <div class="o-empty-state__buttons">
          <button type="button" class="o-button">Continue</button>
        </div>
      </div>

      <div class="o-empty-state__image"><img src="/images/empty-state.svg"></div>
    </div>
  </div>
</div>`,

      empty_state_no_gutter_list: `<o-empty-state image_path="/images/empty-state.svg" slot="body" no_gutter>
  <h2 slot="heading">It's your first time here</h2>
  <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
  <template slot="buttons">
    <o-button text="Continue" />
  </template>
</o-empty-state>`,
      empty_state_no_gutter_list_html: `<div class="o-empty-state o-empty-state--no-gutter">
  <div class="o-empty-state__content">
    <div class="o-empty-state__title">
      <h2>It's your first time here</h2>
    </div>

    <div class="o-empty-state__description">
      <p>A short explanation of this view or why it is empty. Longer texts span into multiple lines.</p>
    </div>

    <div class="o-empty-state__buttons">
      <button type="button" class="o-button">
        Continue
      </button>
    </div>
  </div>

  <div class="o-empty-state__image"><img src="/images/empty-state.svg"></div>
</div>`
    }
  }
}
</script>
