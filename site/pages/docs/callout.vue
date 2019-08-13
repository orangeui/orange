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
        <div class="callout callout--color-primary">
          <p>Click here to claim a free hat</p>
        </div>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="callout" v-else>
      <div slot="body">
        <o-callout>
          <p>Click here to claim a free hat</p>
        </o-callout>
      </div>
    </docs-item>



    <!-- With a shadow  -->
    <docs-item title="With a shadow" :code="callout_shadow_html" v-if="is_html">
      <div slot="body">
        <div class="callout callout--color-white callout--shadow">
          <p>Click here to claim a free hat</p>
        </div>
      </div>
    </docs-item>

    <docs-item title="With a shadow" :code="callout_shadow" v-else>
      <div slot="body">
        <o-callout color="white" shadow>
          <p>Click here to claim a free hat</p>
        </o-callout>
      </div>
    </docs-item>



    <!-- Colors  -->
    <docs-item title="Colors" :code="callout_colors_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="callout callout--color-white callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-gray callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-black callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-primary callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-secondary callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-yellow callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-green callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-red callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="callout callout--color-red-light callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Colors" :code="callout_colors" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-callout color="white" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="gray" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="black" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="primary" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="secondary" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="yellow" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="green" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
        <li>
          <o-callout color="red" shadow>
            <p>Click here to claim a free hat</p>
          </o-callout>
        </li>
      </ul>
    </docs-item>



    <!-- With an image -->
    <docs-item title="With an image" :code="callout_image_html" v-if="is_html">
      <div slot="body">
        <div class="row">
          <div class="col-sm-3">
            <div class="callout callout--color-yellow callout--shadow">
              <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/google-analytics.svg" alt="Callout #1"></div>
              <p><strong>Conversion metrics</strong><br>
                Connect Google Analytics to see Conversions &amp; Sales metrics.
              </p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="callout callout--color-secondary callout--shadow">
              <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/scorecard.svg" alt="Callout #2"></div>
              <p><strong>Fomo Scorecard</strong><br>
                Set up goals to measure Fomo's impact on your business. Easy.
              </p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="callout callout--color-white callout--shadow">
              <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/badges.svg" alt="Callout #3"></div>
              <p><strong>Achievements</strong><br>
                Take note on your wins. Receive Badges for every milestone.
              </p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="callout callout--color-white callout--shadow">
              <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/slack.svg" alt="Callout #4"></div>
              <p><strong>Real-time updates</strong><br>
                Get informed by sending Fomo events to any #channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="With an image" :code="callout_image" v-else>
      <div slot="body">
        <div class="row">
          <div class="col-sm-3">
            <o-callout color="yellow" shadow>
              <div class="callout__image">
                <img src="https://fomo.com/static/images/app/dashboard/google-analytics.svg" alt="Callout #1">
              </div>
              <p>
                <strong>Conversion metrics</strong><br>
                Connect Google Analytics to see Conversions & Sales metrics.
              </p>
            </o-callout>
          </div>

          <div class="col-sm-3">
            <o-callout color="secondary" shadow>
              <div class="callout__image">
                <img src="https://fomo.com/static/images/app/dashboard/scorecard.svg" alt="Callout #2">
              </div>
              <p>
                <strong>Fomo Scorecard</strong><br>
                Set up goals to measure Fomo's impact on your business. Easy.
              </p>
            </o-callout>
          </div>

          <div class="col-sm-3">
            <o-callout color="white" shadow>
              <div class="callout__image">
                <img src="https://fomo.com/static/images/app/dashboard/badges.svg" alt="Callout #3">
              </div>
              <p>
                <strong>Achievements</strong><br>
                Take note on your wins. Receive Badges for every milestone.
              </p>
            </o-callout>
          </div>

          <div class="col-sm-3">
            <o-callout color="white" shadow>
              <div class="callout__image">
                <img src="https://fomo.com/static/images/app/dashboard/slack.svg" alt="Callout #4">
              </div>
              <p>
                <strong>Real-time updates</strong><br>
                Get informed by sending Fomo events to any #channel.
              </p>
            </o-callout>
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
          <td>color</td>
          <td>Set with <code>.button--color-{color}</code></td>
          <td>See <a href="/colors">Colors</a> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>Set with <code>.button--shadow</code></td>
          <td><code>shadow</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage" v-else>
      <table class="table table--compact table--celled" slot="body">
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
          <td>See <a href="/colors">Colors</a> page for possible values</td>
          <td>String</td>
          <td>-</td>
          <td>primary</td>
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
  name: 'DocsCallout',

  data () {
    return {
      is_html: true,
      callout: `<o-callout>
  <p>Click here to claim a free hat</p>
</o-callout>`,
      callout_html: `<div class="callout callout--color-primary">
  <p>Click here to claim a free hat</p>
</div>`,

      callout_shadow: `<o-callout color="white" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>`,
      callout_shadow_html: `<div class="callout callout--color-white callout--shadow">
  <p>Click here to claim a free hat</p>
</div>`,

      callout_colors: `<o-callout color="white" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="gray" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="black" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="primary" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="secondary" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="yellow" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="green" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>

<o-callout color="red" shadow>
  <p>Click here to claim a free hat</p>
</o-callout>`,
      callout_colors_html: `<div class="callout callout--color-{color} callout--shadow">
  <p>Click here to claim a free hat</p>
</div>`,

      callout_image: `<div class="row">
  <div class="col-sm-3">
    <o-callout color="yellow" shadow>
      <div class="callout__image">
        <img src="https://fomo.com/static/images/app/dashboard/google-analytics.svg" alt="Callout #1">
      </div>
      <p>
        <strong>Conversion metrics</strong><br>
        Connect Google Analytics to see Conversions & Sales metrics.
      </p>
    </o-callout>
  </div>

  <div class="col-sm-3">
    <o-callout color="secondary" shadow>
      <div class="callout__image">
        <img src="https://fomo.com/static/images/app/dashboard/scorecard.svg" alt="Callout #2">
      </div>
      <p>
        <strong>Fomo Scorecard</strong><br>
        Set up goals to measure Fomo's impact on your business. Easy.
      </p>
    </o-callout>
  </div>

  <div class="col-sm-3">
    <o-callout color="white" shadow>
      <div class="callout__image">
        <img src="https://fomo.com/static/images/app/dashboard/badges.svg" alt="Callout #3">
      </div>
      <p>
        <strong>Achievements</strong><br>
        Take note on your wins. Receive Badges for every milestone.
      </p>
    </o-callout>
  </div>

  <div class="col-sm-3">
    <o-callout color="white" shadow>
      <div class="callout__image">
        <img src="https://fomo.com/static/images/app/dashboard/slack.svg" alt="Callout #4">
      </div>
      <p>
        <strong>Real-time updates</strong><br>
        Get informed by sending Fomo events to any #channel.
      </p>
    </o-callout>
  </div>
</div>`,
      callout_image_html: `<div class="row">
  <div class="col-sm-3">
    <div class="callout callout--color-yellow callout--shadow">
      <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/google-analytics.svg" alt="Callout #1"></div>
      <p><strong>Conversion metrics</strong><br>
        Connect Google Analytics to see Conversions &amp; Sales metrics.
      </p>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="callout callout--color-secondary callout--shadow">
      <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/scorecard.svg" alt="Callout #2"></div>
      <p><strong>Fomo Scorecard</strong><br>
        Set up goals to measure Fomo's impact on your business. Easy.
      </p>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="callout callout--color-white callout--shadow">
      <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/badges.svg" alt="Callout #3"></div>
      <p><strong>Achievements</strong><br>
        Take note on your wins. Receive Badges for every milestone.
      </p>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="callout callout--color-white callout--shadow">
      <div class="callout__image"><img src="https://fomo.com/static/images/app/dashboard/slack.svg" alt="Callout #4"></div>
      <p><strong>Real-time updates</strong><br>
        Get informed by sending Fomo events to any #channel.
      </p>
    </div>
  </div>
</div>`
    }
  }
}
</script>
