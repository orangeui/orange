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
        <div class="o-callout">
          <p>Orange color lies between red and yellow on the light spectrum</p>
        </div>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="callout" v-else>
      <div slot="body">
        <o-callout>
          <p>Orange color lies between red and yellow on the light spectrum</p>
        </o-callout>
      </div>
    </docs-item>



    <!-- With a shadow  -->
    <docs-item title="With a shadow" :code="callout_shadow_html" v-if="is_html">
      <div slot="body">
        <div class="o-callout o-callout--color-white o-callout--shadow">
          <p>Orange color lies between red and yellow on the light spectrum</p>
        </div>
      </div>
    </docs-item>

    <docs-item title="With a shadow" :code="callout_shadow" v-else>
      <div slot="body">
        <o-callout color="white" shadow>
          <p>Orange color lies between red and yellow on the light spectrum</p>
        </o-callout>
      </div>
    </docs-item>




    <!-- With action  -->
    <docs-item title="With an action" :code="callout_action_html" v-if="is_html">
      <div slot="body">
        <div class="o-callout o-callout--color-green o-callout--action">
          <p>Click here to claim a free hat</p>
        </div>
      </div>
    </docs-item>




    <!-- As stats -->
    <docs-item title="As stats" :code="callout_stats_html" v-if="is_html">
      <div slot="body">
        <div class="grid">
          <div class="col-3">
            <div class="o-callout">
              <h1>28K</h1>
              <p>
                <strong>Impressions</strong><br>
                Quantity of notifications shown
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="o-callout">
              <h1>285</h1>
              <p>
                <strong>Clicks</strong><br>
                Traffic from linked notifications
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="o-callout">
              <h1>1106</h1>
              <p>
                <strong>Engagements</strong><br>
                Mouse hovers, which pause the animation
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="o-callout">
              <h1>$724</h1>
              <p>
                <strong>Sales</strong><br>
                Goal completion value in dollars
              </p>
            </div>
          </div>
        </div>
      </div>
    </docs-item>




    <!-- With an image -->
    <docs-item title="With an image" :code="callout_image_html" v-if="is_html">
      <div slot="body">
        <div class="grid">
          <div class="col-3">
            <div class="o-callout o-callout--color-primary o-callout--action">
              <div class="o-callout__image"><img src="https://fomo.com/static/images/app/dashboard/google-analytics.svg" alt="Callout #1"></div>
              <p><strong>Conversion metrics</strong><br>
                Connect Google Analytics to see Conversions &amp; Sales metrics.
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="o-callout o-callout--color-primary o-callout--action">
              <div class="o-callout__image"><img src="https://fomo.com/static/images/app/dashboard/badges.svg" alt="Callout #3"></div>
              <p><strong>Achievements</strong><br>
                Take note on your wins. Receive Badges for every milestone.
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="o-callout o-callout--color-primary o-callout--action">
              <div class="o-callout__image"><img src="https://fomo.com/static/images/app/dashboard/slack.svg" alt="Callout #4"></div>
              <p><strong>Real-time updates</strong><br>
                Get informed by sending Fomo events to any #channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </docs-item>




    <!-- Colors  -->
    <docs-item title="Colors" :code="callout_colors_html" v-if="is_html">
      <ul slot="body" class="docs__simple-list">
        <li>
          <div class="o-callout o-callout--color-white o-callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="o-callout o-callout--color-gray o-callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="o-callout o-callout--color-black o-callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="o-callout o-callout--color-primary o-callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
        <li>
          <div class="o-callout o-callout--color-secondary o-callout--shadow">
            <p>Click here to claim a free hat</p>
          </div>
        </li>
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
          <td>color</td>
          <td>Set with <code>.o-callout--color-{color}</code></td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>Throw a shadow</td>
          <td><code>.o-callout--shadow</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>Show hover effects</td>
          <td><code>.o-callout--action</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
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
          <td>color</td>
          <td>See <router-link :to="{ name: 'docs-global-colors'}"><span>Colors</span></router-link> page for possible values</td>
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
        <tr>
          <td>action</td>
          <td>Show hover effects</td>
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
      callout_html: `<div class="o-callout">
  <p>Orange color lies between red and yellow on the light spectrum</p>
</div>`,

      callout_shadow_html: `<div class="o-callout o-callout--color-white o-callout--shadow">
  <p>Orange color lies between red and yellow on the light spectrum</p>
</div>`,

      callout_action_html: `<div class="o-callout o-callout--color-green o-callout--action">
  <p>Click here to claim a free hat</p>
</div>`,

      callout_stats_html: `<div class="grid">
  <div class="col-3">
    <div class="o-callout">
      <h1>28K</h1>
      <p>
        <strong>Impressions</strong><br>
        Quantity of notifications shown
      </p>
    </div>
  </div>
  <div class="col-3">
    <div class="o-callout">
      <h1>285</h1>
      <p>
        <strong>Clicks</strong><br>
        Traffic from linked notifications
      </p>
    </div>
  </div>
  <div class="col-3">
    <div class="o-callout">
      <h1>1106</h1>
      <p>
        <strong>Engagements</strong><br>
        Mouse hovers, which pause the animation
      </p>
    </div>
  </div>
  <div class="col-3">
    <div class="o-callout">
      <h1>$724</h1>
      <p>
        <strong>Sales</strong><br>
        Goal completion value in dollars
      </p>
    </div>
  </div>
</div>`,

      callout_image_html: `<div class="grid">
  <div class="col-3">
    <div class="o-callout o-callout--color-primary o-callout--action">
      <div class="o-callout__image"><img src="https://fomo.com/static/images/app/dashboard/google-analytics.svg" alt="Callout #1"></div>
      <p><strong>Conversion metrics</strong><br>
        Connect Google Analytics to see Conversions &amp; Sales metrics.
      </p>
    </div>
  </div>
  <div class="col-3">
    <div class="o-callout o-callout--color-primary o-callout--action">
      <div class="o-callout__image"><img src="https://fomo.com/static/images/app/dashboard/badges.svg" alt="Callout #3"></div>
      <p><strong>Achievements</strong><br>
        Take note on your wins. Receive Badges for every milestone.
      </p>
    </div>
  </div>
  <div class="col-3">
    <div class="o-callout o-callout--color-primary o-callout--action">
      <div class="o-callout__image"><img src="https://fomo.com/static/images/app/dashboard/slack.svg" alt="Callout #4"></div>
      <p><strong>Real-time updates</strong><br>
        Get informed by sending Fomo events to any #channel.
      </p>
    </div>
  </div>
</div>`,
      
      callout_colors_html: `<div class="o-callout o-callout--color-{color} o-callout--shadow">
  <p>Click here to claim a free hat</p>
</div>`
    }
  }
}
</script>
