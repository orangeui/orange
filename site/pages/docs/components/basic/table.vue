<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Table</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A table displays a collections of data grouped into rows. Just a bunch of good old tables.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="table_html" v-if="is_html">
      <div slot="body">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Spend</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shopify sales</td>
              <td>4,230</td>
              <td>520</td>
              <td>$78</td>
              <td>Simple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="table" v-else>
      <div slot="body">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Spend</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shopify sales</td>
              <td>4,230</td>
              <td>520</td>
              <td>$78</td>
              <td>Simple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <!-- With border -->
    <docs-item title="With a bottom border" :code="table_border_bottom_html" v-if="is_html">
      <div slot="body">
        <table class="table table--border-bottom">
          <thead>
            <tr>
              <th>Title</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Spend</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shopify sales</td>
              <td>4,230</td>
              <td>520</td>
              <td>$78</td>
              <td>Simple</td>
            </tr>
            <tr>
              <td>Shopify sales</td>
              <td>4,230</td>
              <td>520</td>
              <td>$78</td>
              <td>Simple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="With a bottom border" :code="table_border_bottom" v-else>
      <div slot="body">
        <table class="table table--border-bottom">
          <thead>
            <tr>
              <th>Title</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Spend</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shopify sales</td>
              <td>4,230</td>
              <td>520</td>
              <td>$78</td>
              <td>Simple</td>
            </tr>
            <tr>
              <td>Shopify sales</td>
              <td>4,230</td>
              <td>520</td>
              <td>$78</td>
              <td>Simple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>



    <!-- Fixed -->
    <docs-item title="Fixed" :code="table_fixed_html" v-if="is_html">
      <div slot="body">
        <p>Distribute columns evenly</p>
        <table class="table table--fixed">
          <thead>
            <tr>
              <th>Budget</th>
              <th>Spent Budget</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30,000</td>
              <td>$768</td>
              <td>Wed, May 9th 2018</td>
            </tr>
            <tr>
              <td>$10,000</td>
              <td>$10,000</td>
              <td>Tue, May 8th 2018</td>
            </tr>
            <tr>
              <td>$2,000</td>
              <td>$2,000</td>
              <td>Mon, May 7th 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="Fixed" :code="table_fixed" v-else>
      <div slot="body">
        <p>Distribute columns evenly</p>
        <table class="table table--fixed">
          <thead>
            <tr>
              <th>Budget</th>
              <th>Spent Budget</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30,000</td>
              <td>$768</td>
              <td>Wed, May 9th 2018</td>
            </tr>
            <tr>
              <td>$10,000</td>
              <td>$10,000</td>
              <td>Tue, May 8th 2018</td>
            </tr>
            <tr>
              <td>$2,000</td>
              <td>$2,000</td>
              <td>Mon, May 7th 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>



    <!-- Compact -->
    <docs-item title="Compact" :code="table_compact_html" v-if="is_html">
      <div slot="body">
        <table class="table table--fixed table--compact table--border-bottom">
          <thead>
            <tr>
              <th>Budget</th>
              <th>Spent Budget</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30,000</td>
              <td>$768</td>
              <td>Wed, May 9th 2018</td>
            </tr>
            <tr>
              <td>$10,000</td>
              <td>$10,000</td>
              <td>Tue, May 8th 2018</td>
            </tr>
            <tr>
              <td>$2,000</td>
              <td>$2,000</td>
              <td>Mon, May 7th 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="Compact" :code="table_compact" v-else>
      <div slot="body">
        <table class="table table--fixed table--compact table--border-bottom">
          <thead>
            <tr>
              <th>Budget</th>
              <th>Spent Budget</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30,000</td>
              <td>$768</td>
              <td>Wed, May 9th 2018</td>
            </tr>
            <tr>
              <td>$10,000</td>
              <td>$10,000</td>
              <td>Tue, May 8th 2018</td>
            </tr>
            <tr>
              <td>$2,000</td>
              <td>$2,000</td>
              <td>Mon, May 7th 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>



    <!-- Celled -->
    <docs-item title="Celled" :code="table_celled_html" v-if="is_html">
      <div slot="body">
        <table class="table table--celled">
          <thead>
            <tr>
              <th>Budget</th>
              <th>Spent Budget</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30,000</td>
              <td>$768</td>
              <td>Wed, May 9th 2018</td>
            </tr>
            <tr>
              <td>$10,000</td>
              <td>$10,000</td>
              <td>Tue, May 8th 2018</td>
            </tr>
            <tr>
              <td>$2,000</td>
              <td>$2,000</td>
              <td>Mon, May 7th 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="Celled" :code="table_celled" v-else>
      <div slot="body">
        <table class="table table--celled">
          <thead>
            <tr>
              <th>Budget</th>
              <th>Spent Budget</th>
              <th>Date added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30,000</td>
              <td>$768</td>
              <td>Wed, May 9th 2018</td>
            </tr>
            <tr>
              <td>$10,000</td>
              <td>$10,000</td>
              <td>Tue, May 8th 2018</td>
            </tr>
            <tr>
              <td>$2,000</td>
              <td>$2,000</td>
              <td>Mon, May 7th 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>



    <!-- Definition -->
    <docs-item title="Definition" :code="table_definition_html" v-if="is_html">
      <div slot="body">
        <table class="table table--fixed table--compact table--definition table--border-bottom">
          <thead>
            <th>Plan</th>
            <th>Fomo Essential</th>
            <th>
              Fomo Plus <span class="label label--green label--small">current plan</span>
            </th>
            <th>Fomo Advanced</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <button type="button" class="button button--basic button--small">Downgrade to Essential</button>
              </td>
              <td>
                <button type="button" class="button button--basic button--small">Cancel subscription</button>
              </td>
              <td>
                <button type="button" class="button button--small">Upgrade to Advanced</button>
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>$39 / month</td>
              <td>$79 / month</td>
              <td>$199 / month</td>
            </tr>
            <tr>
              <td>Notifications</td>
              <td>50,000</td>
              <td>200,000</td>
              <td>3,000,000</td>
            </tr>
            <tr>
              <td>Website domains</td>
              <td>unlimited</td>
              <td>unlimited</td>
              <td>unlimited</td>
            </tr>
            <tr>
              <td>Custom page rules</td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
            </tr>
            <tr>
              <td>Email support</td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>

    <docs-item title="Definition" :code="table_definition" v-else>
      <div slot="body">
        <table class="table table--fixed table--compact table--definition table--border-bottom">

          <!-- Head -->
          <thead>
            <th>Plan</th>
            <th>Fomo Essential</th>
            <th>
              Fomo Plus
              <o-label size="small" color="green" text="current plan" />
            </th>
            <th>
              Fomo Advanced
            </th>
          </thead>

          <!-- Body -->
          <tbody>
            <tr>
              <td></td>
              <td>
                <o-button size="small" variant="basic" text="Downgrade to Essential" />
              </td>
              <td>
                <o-button size="small" variant="basic" text="Cancel subscription" />
              </td>
              <td>
                <o-button size="small" text="Upgrade to Advanced" />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>$39 / month</td>
              <td>$79 / month</td>
              <td>$199 / month</td>
            </tr>
            <tr>
              <td>Notifications</td>
              <td>50,000</td>
              <td>200,000</td>
              <td>3,000,000</td>
            </tr>
            <tr>
              <td>Website domains</td>
              <td>unlimited</td>
              <td>unlimited</td>
              <td>unlimited</td>
            </tr>
            <tr>
              <td>Custom page rules</td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
            </tr>
            <tr>
              <td>Email support</td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
              <td><span class="icon-tick"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </docs-item>


    <!-- in a Card -->
    <docs-item title="In a card" :code="table_card_html" v-if="is_html">
      <div slot="body">
        <div class="card card--full">
          <div class="card__header">
            <h3 class="card__title">Budgets</h3>
          </div>

          <div class="card__body">
            <table class="table table--fixed">
              <thead>
              <tr>
                <th>Budget</th>
                <th>Spent Budget</th>
                <th>Date added</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>$30,000</td>
                <td>$768</td>
                <td>Wed, May 9th 2018</td>
              </tr>
              <tr>
                <td>$10,000</td>
                <td>$10,000</td>
                <td>Tue, May 8th 2018</td>
              </tr>
              <tr>
                <td>$2,000</td>
                <td>$2,000</td>
                <td>Mon, May 7th 2018</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="In a card" :code="table_card" v-else>
      <div slot="body">
        <div class="card card--full">

          <!-- Card header  -->
          <div class="card__header">
            <h3 class="card__title">Budgets</h3>
          </div>

          <!-- Card body  -->
          <div class="card__body">
            <table class="table table--fixed">
              <thead>
              <tr>
                <th>Budget</th>
                <th>Spent Budget</th>
                <th>Date added</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>$30,000</td>
                <td>$768</td>
                <td>Wed, May 9th 2018</td>
              </tr>
              <tr>
                <td>$10,000</td>
                <td>$10,000</td>
                <td>Tue, May 8th 2018</td>
              </tr>
              <tr>
                <td>$2,000</td>
                <td>$2,000</td>
                <td>Mon, May 7th 2018</td>
              </tr>
              </tbody>
            </table>
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
          <td>bottom-border</td>
          <td>Set with <code>.table--border-bottom</code> class</td>
          <td><code>border-bottom</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>fixed</td>
          <td>Set with <code>.table--fixed</code> class to distribute columns evenly</td>
          <td><code>fixed</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>compact</td>
          <td>Set with <code>.table--compact</code> class</td>
          <td><code>compact</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>definition</td>
          <td>Set with <code>.table--defintion</code> class to add more spacing to <code>th</code> tags</td>
          <td><code>definition</code></td>
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
  name: 'DocsTable',

  data () {
    return {
      is_html: true,
      table: `<table class="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Impressions</th>
      <th>Clicks</th>
      <th>Spend</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Shopify sales</td>
      <td>4,230</td>
      <td>520</td>
      <td>$78</td>
      <td>Simple</td>
    </tr>
  </tbody>
</table>`,
      table_html: `<table class="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Impressions</th>
      <th>Clicks</th>
      <th>Spend</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Shopify sales</td>
      <td>4,230</td>
      <td>520</td>
      <td>$78</td>
      <td>Simple</td>
    </tr>
  </tbody>
</table>`,

      table_border_bottom: `<table class="table table--border-bottom">
  <thead>
    <tr>
      <th>Title</th>
      <th>Impressions</th>
      <th>Clicks</th>
      <th>Spend</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Shopify sales</td>
      <td>4,230</td>
      <td>520</td>
      <td>$78</td>
      <td>Simple</td>
    </tr>
    <tr>
      <td>Shopify sales</td>
      <td>4,230</td>
      <td>520</td>
      <td>$78</td>
      <td>Simple</td>
    </tr>
  </tbody>
</table>`,
      table_border_bottom_html: `<table class="table table--border-bottom">
  <thead>
    <tr>
      <th>Title</th>
      <th>Impressions</th>
      <th>Clicks</th>
      <th>Spend</th>
      <th>Type</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Shopify sales</td>
      <td>4,230</td>
      <td>520</td>
      <td>$78</td>
      <td>Simple</td>
    </tr>
    <tr>
      <td>Shopify sales</td>
      <td>4,230</td>
      <td>520</td>
      <td>$78</td>
      <td>Simple</td>
    </tr>
  </tbody>
</table>`,

      table_fixed: `<table class="table table--fixed">
  <thead>
    <tr>
      <th>Budget</th>
      <th>Spent Budget</th>
      <th>Date added</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>$30,000</td>
      <td>$768</td>
      <td>Wed, May 9th 2018</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>$10,000</td>
      <td>Tue, May 8th 2018</td>
    </tr>
    <tr>
      <td>$2,000</td>
      <td>$2,000</td>
      <td>Mon, May 7th 2018</td>
    </tr>
  </tbody>
</table>`,
      table_fixed_html: `<table class="table table--fixed">
  <thead>
    <tr>
      <th>Budget</th>
      <th>Spent Budget</th>
      <th>Date added</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>$30,000</td>
      <td>$768</td>
      <td>Wed, May 9th 2018</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>$10,000</td>
      <td>Tue, May 8th 2018</td>
    </tr>
    <tr>
      <td>$2,000</td>
      <td>$2,000</td>
      <td>Mon, May 7th 2018</td>
    </tr>
  </tbody>
</table>`,
      table_compact: `<table class="table table--fixed table--compact table--border-bottom">
  <thead>
    <tr>
      <th>Budget</th>
      <th>Spent Budget</th>
      <th>Date added</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>$30,000</td>
      <td>$768</td>
      <td>Wed, May 9th 2018</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>$10,000</td>
      <td>Tue, May 8th 2018</td>
    </tr>
    <tr>
      <td>$2,000</td>
      <td>$2,000</td>
      <td>Mon, May 7th 2018</td>
    </tr>
  </tbody>
</table>`,
      table_compact_html: `<table class="table table--fixed table--compact table--border-bottom">
  <thead>
    <tr>
      <th>Budget</th>
      <th>Spent Budget</th>
      <th>Date added</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>$30,000</td>
      <td>$768</td>
      <td>Wed, May 9th 2018</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>$10,000</td>
      <td>Tue, May 8th 2018</td>
    </tr>
    <tr>
      <td>$2,000</td>
      <td>$2,000</td>
      <td>Mon, May 7th 2018</td>
    </tr>
  </tbody>
</table>`,

      table_celled: `<table class="table table--celled">
  <thead>
    <tr>
      <th>Budget</th>
      <th>Spent Budget</th>
      <th>Date added</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$30,000</td>
      <td>$768</td>
      <td>Wed, May 9th 2018</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>$10,000</td>
      <td>Tue, May 8th 2018</td>
    </tr>
    <tr>
      <td>$2,000</td>
      <td>$2,000</td>
      <td>Mon, May 7th 2018</td>
    </tr>
  </tbody>
</table>`,
      table_celled_html: `<table class="table table--celled">
  <thead>
    <tr>
      <th>Budget</th>
      <th>Spent Budget</th>
      <th>Date added</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$30,000</td>
      <td>$768</td>
      <td>Wed, May 9th 2018</td>
    </tr>
    <tr>
      <td>$10,000</td>
      <td>$10,000</td>
      <td>Tue, May 8th 2018</td>
    </tr>
    <tr>
      <td>$2,000</td>
      <td>$2,000</td>
      <td>Mon, May 7th 2018</td>
    </tr>
  </tbody>
</table>`,

      table_definition: `<table class="table table--fixed table--compact table--definition table--border-bottom">
  <thead>
    <th>Plan</th>
    <th>Fomo Essential</th>
    <th>
      Fomo Plus
      <o-label size="small" color="green" text="current plan" />
    </th>
    <th>
      Fomo Advanced
    </th>
  </thead>

  <tbody>
    <tr>
      <td></td>
      <td>
        <o-button size="small" variant="basic" text="Downgrade to Essential" />
      </td>
      <td>
        <o-button size="small" variant="basic" text="Cancel subscription" />
      </td>
      <td>
        <o-button size="small" text="Upgrade to Advanced" />
      </td>
    </tr>
    <tr>
      <td>Price</td>
      <td>$39 / month</td>
      <td>$79 / month</td>
      <td>$199 / month</td>
    </tr>
    <tr>
      <td>Notifications</td>
      <td>50,000</td>
      <td>200,000</td>
      <td>3,000,000</td>
    </tr>
    <tr>
      <td>Website domains</td>
      <td>unlimited</td>
      <td>unlimited</td>
      <td>unlimited</td>
    </tr>
    <tr>
      <td>Custom page rules</td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
    </tr>
    <tr>
      <td>Email support</td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
    </tr>
  </tbody>
</table>`,
      table_definition_html: `<table class="table table--fixed table--compact table--definition table--border-bottom">
  <thead>
    <th>Plan</th>
    <th>Fomo Essential</th>
    <th>
      Fomo Plus <span class="label label--green label--small">current plan</span>
    </th>
    <th>Fomo Advanced</th>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>
        <button type="button" class="button button--basic button--small">Downgrade to Essential</button>
      </td>
      <td>
        <button type="button" class="button button--basic button--small">Cancel subscription</button>
      </td>
      <td>
        <button type="button" class="button button--small">Upgrade to Advanced</button>
      </td>
    </tr>
    <tr>
      <td>Price</td>
      <td>$39 / month</td>
      <td>$79 / month</td>
      <td>$199 / month</td>
    </tr>
    <tr>
      <td>Notifications</td>
      <td>50,000</td>
      <td>200,000</td>
      <td>3,000,000</td>
    </tr>
    <tr>
      <td>Website domains</td>
      <td>unlimited</td>
      <td>unlimited</td>
      <td>unlimited</td>
    </tr>
    <tr>
      <td>Custom page rules</td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
    </tr>
    <tr>
      <td>Email support</td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
      <td><span class="icon-tick"></span></td>
    </tr>
  </tbody>
</table>`,

      table_card: `<div class="card card--full">
  <div class="card__header">
    <h3 class="card__title">In a card</h3>

    <button class="button button--color-primary button--icon">
      Add
      <i class="button__icon icon-add"></i>
    </button>
  </div>

  <div class="card__body">
    <table class="table table--fixed">
      <thead>
        <tr>
          <th>Budget</th>
          <th>Spent Budget</th>
          <th>Date added</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>$30,000</td>
          <td>$768</td>
          <td>Wed, May 9th 2018</td>
        </tr>
        <tr>
          <td>$10,000</td>
          <td>$10,000</td>
          <td>Tue, May 8th 2018</td>
        </tr>
        <tr>
          <td>$2,000</td>
          <td>$2,000</td>
          <td>Mon, May 7th 2018</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
      table_card_html: `<div class="card card--full">
  <div class="card__header">
    <h3 class="card__title">Budgets</h3>
  </div>

  <div class="card__body">
    <table class="table table--fixed">
      <thead>
      <tr>
        <th>Budget</th>
        <th>Spent Budget</th>
        <th>Date added</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>$30,000</td>
        <td>$768</td>
        <td>Wed, May 9th 2018</td>
      </tr>
      <tr>
        <td>$10,000</td>
        <td>$10,000</td>
        <td>Tue, May 8th 2018</td>
      </tr>
      <tr>
        <td>$2,000</td>
        <td>$2,000</td>
        <td>Mon, May 7th 2018</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>`
    }
  }
}
</script>
