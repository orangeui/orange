<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Card</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A card <mark>groups content in a context</mark>.</p>
      </div>
    </docs-item>

    <!-- Basic -->
    <docs-item title="Basic" :code="card_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>
        </div>

        <div class="card__body">
          Body
        </div>

        <div class="card__footer">
          Footer
        </div>
      </div>
    </docs-item>

    <docs-item title="Basic" :code="card" v-else>
      <o-card slot="body">
        <o-card-header>
          <h3>Title</h3>
        </o-card-header>

        <o-card-body>
          Body
        </o-card-body>

        <o-card-footer>
          Footer
        </o-card-footer>
      </o-card>
    </docs-item>



    <!-- Card with button -->
    <docs-item title="With a button" :code="card_with_button_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>

          <button type="button" class="button">Action</button>
        </div>

        <div class="card__body">
          Body
        </div>

        <div class="card__footer">
          Footer
        </div>
      </div>
    </docs-item>

    <docs-item title="With a button" :code="card_with_button" v-else>
      <o-card slot="body">
        <o-card-header>
          <h3>Title</h3>

          <!-- Button -->
          <o-button text="Action" />
        </o-card-header>

        <o-card-body>
          Body
        </o-card-body>

        <o-card-footer>
          Footer
        </o-card-footer>
      </o-card>
    </docs-item>

    <!-- Card with an input -->
    <docs-item title="With an input" :code="card_with_input_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>

          <form class="form">
            <div class="form__item">
              <div class="form__wrapper">
                <div class="form__input-wrapper">
                  <input class="form__input" id="form_id" type="text" name="form_id" placeholder="Search">
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="card__body">
          Body
        </div>

        <div class="card__footer">
          Footer
        </div>
      </div>
    </docs-item>

    <docs-item title="With an input" :code="card_with_input" v-else>
      <o-card slot="body">
        <o-card-header>
          <h3>Title</h3>

          <form class="form">
            <o-input
              v-model="form_model"
              id="form_id"
              label="Search"
              type="text" />
          </form>
        </o-card-header>

        <o-card-body>
          Body
        </o-card-body>

        <o-card-footer>
          Footer
        </o-card-footer>
      </o-card>
    </docs-item>



    <!-- Card with navigation and button -->
    <docs-item title="With navigation and button" :code="card_with_nav_button_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <nav class="nav">
            <ul>
              <li>
                <a href="/docs/card" class="is-active">First item</a>
              </li>
              <li>
                <a href="/docs/changelog">Second item</a>
              </li>
              <li>
                <a href="/docs/contribute">Third item</a>
              </li>
              <li>
                <a href="/docs/about" class="is-disabled">Fourth item</a>
              </li>
            </ul>
          </nav>
          <button type="button" class="button">
            Action
          </button>
        </div>
        <div class="card__body">
          Body
        </div>
        <div class="card__footer">
          Footer
        </div>
      </div>
    </docs-item>

    <docs-item title="With navigation and button" :code="card_with_nav_button" v-else>
      <o-card slot="body">
        <o-card-header>
          <!-- Navigation -->
          <o-navigation>
            <o-navigation-item to="card">First item</o-navigation-item>
            <o-navigation-item to="changelog">Second item</o-navigation-item>
            <o-navigation-item to="contribute">Third item</o-navigation-item>
            <o-navigation-item to="about" disabled>Fourth item</o-navigation-item>
          </o-navigation>

          <o-button text="Action" />
        </o-card-header>

        <o-card-body>
          Body
        </o-card-body>

        <o-card-footer>
          Footer
        </o-card-footer>
      </o-card>
    </docs-item>



    <!-- Card with a list -->
    <docs-item title="With a list" :code="card_with_list_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>
        </div>
        <div class="card__body">
          <div class="list list--large list--divide list--no-gutter list--hover">

            <div class="list__item">
              <div class="list__slot">
                <h3 class="list__item-title">First item</h3>
                <p class="list__item-description">Description of the first item</p>
              </div>
              <div class="list__slot">
                <button type="button" class="button button--small button--icon-only">
                  <i class="icon-remove"></i>
                </button>
              </div>
            </div>
            <div class="list__item">
              <div class="list__slot">
                <div>
                  <h3 class="list__item-title">Second item</h3>
                  <p class="list__item-description">Description of the second item</p>
                </div>
              </div>
              <div class="list__slot">
                <button type="button" class="button button--small button--icon-only">
                  <i class="icon-remove"></i>
                </button>
              </div>
            </div>
            <div class="list__item">
              <div class="list__slot">
                <div>
                  <h3 class="list__item-title">Third item</h3>
                  <p class="list__item-description">Description of the third item</p>
                </div>
              </div>
              <div class="list__slot">
                <button type="button" class="button button--small button--icon-only">
                  <i class="icon-remove"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="With a list" :code="card_with_list" v-else>
      <o-card slot="body">
        <o-card-header>
          <h3>Title</h3>
        </o-card-header>

        <o-card-body>
          <list no_gutter divide hover>
            <list-item>
              <list-item-slot>
                <h3 class="list__item-title">First item</h3>
                <p class="list__item-description">Description of the first item</p>
              </list-item-slot>

              <list-item-slot>
                <o-button icon="remove" size="small" />
              </list-item-slot>
            </list-item>

            <list-item>
              <list-item-slot>
                <div>
                  <h3 class="list__item-title">Second item</h3>
                  <p class="list__item-description">Description of the second item</p>
                </div>
              </list-item-slot>

              <list-item-slot>
                <o-button icon="remove" size="small" />
              </list-item-slot>
            </list-item>

            <list-item>
              <list-item-slot>
                <div>
                  <h3 class="list__item-title">Third item</h3>
                  <p class="list__item-description">Description of the third item</p>
                </div>
              </list-item-slot>

              <list-item-slot>
                <o-button icon="remove" size="small" />
              </list-item-slot>
            </list-item>
          </list>
        </o-card-body>
      </o-card>
    </docs-item>


    <!-- Card with clickable footer -->
    <docs-item title="Clickable footer" :code="card_click_footer_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>
        </div>

        <div class="card__body">
          Body
        </div>

        <div class="card__footer card__footer--click">
          Load more
          <span class="icon-plus"></span>
        </div>
      </div>
    </docs-item>

    <docs-item title="Clickable footer" :code="card_click_footer" v-else>
      <o-card slot="body">
        <o-card-header>
          <h3>Title</h3>
        </o-card-header>

        <o-card-body>
          Body
        </o-card-body>

        <o-card-footer click>
          Load more
          <o-icon symbol="plus" />
        </o-card-footer>
      </o-card>
    </docs-item>



    <!-- Multiple sections -->
    <docs-item title="Multiple sections" :code="card_multiple_sections" v-show="!is_html">
      <div class="card" slot="body">

        <div class="card__header">
          <h2 class="card__title">Title</h2>
          <o-button text="Action" />
        </div>

        <div class="card__body">

          <!-- Section #1 -->
          <section class="card__section">
            <div class="card__section-header">
              <h2 class="card__section-title">First section</h2>

              <!-- Optional -->
              <div class="card__section-extras">
                <o-button text="Action" size="small" color="gray" />
              </div>
            </div>

            <div class="card__section-body">
              Body of first section
            </div>
          </section>

          <!-- Section #2 -->
          <section class="card__section">
            <div class="card__section-header">
              <h2 class="card__section-title">Second section</h2>

              <!-- Optional -->
              <div class="card__section-extras">
                <o-button text="Action" size="small" color="gray" />
              </div>
            </div>

            <div class="card__section-body">
              Body of second section
            </div>
          </section>
        </div>
      </div>
    </docs-item>



    <!-- Card without gutter -->
    <docs-item title="Without gutter" :code="card_full_html" v-if="is_html">
      <div class="card card--full" slot="body">
        <div class="card__body">
          Body
        </div>
      </div>
    </docs-item>

    <docs-item title="Without gutter" :code="card_full" v-else>
      <o-card slot="body" full>
        <o-card-body>
          Body
        </o-card-body>
      </o-card>
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
          <td>full</td>
          <td>Set with <code>.card--full</code></td>
          <td><code>full</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>clickable footer</td>
          <td>Set with <code>.card__footer--click</code> class on <code>.card__footer</code></td>
          <td><code>click</code></td>
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
import List from '../../components/List/List'
import ListItem from '../../components/List/ListItem'
import ListItemSlot from '../../components/List/ListItemSlot'

export default {
  components: {
    List,
    ListItem,
    ListItemSlot
  },

  data () {
    return {
      form_model: null,
      is_html: true,
      card: `<o-card>
  <o-card-header>
    <h3>Title</h3>
  </o-card-header>

  <o-card-body>
    Body
  </o-card-body>

  <o-card-footer>
    Footer
  </o-card-footer>
</o-card>`,
      card_html: `<div class="card">
  <div class="card__header">
    <h3>Title</h3>
  </div>

  <div class="card__body">
    Body
  </div>

  <div class="card__footer">
    Footer
  </div>
</div>`,

      card_with_button: `<o-card>
  <o-card-header>
    <h3>Title</h3>

    <o-button text="Action" />
  </o-card-header>

  <o-card-body>
    Body
  </o-card-body>

  <o-card-footer>
    Footer
  </o-card-footer>
</o-card>`,
      card_with_button_html: `<div class="card">
  <div class="card__header">
    <h3>Title</h3>

    <button type="button" class="button">Action</button>
  </div>

  <div class="card__body">
    Body
  </div>

  <div class="card__footer">
    Footer
  </div>
</div>`,

      card_with_input: `<o-card>
  <o-card-header>
    <h3>Title</h3>

    <form class="form">
      <o-input
        v-model="form_model"
        id="form_id"
        label="Search"
        type="text" />
    </form>
  </o-card-header>

  <o-card-body>
    Body
  </o-card-body>

  <o-card-footer>
    Footer
  </o-card-footer>
</o-card>`,
      card_with_input_html: `<div class="card">
  <div class="card__header">
    <h3>Title</h3>

    <form class="form">
      <div class="form__item">
        <div class="form__wrapper">
          <div class="form__input-wrapper">
            <input class="form__input" id="form_id" type="text" name="form_id" placeholder="Search">
          </div>
        </div>
      </div>
    </form>
  </div>

  <div class="card__body">
    Body
  </div>

  <div class="card__footer">
    Footer
  </div>
</div>`,

      card_with_nav_button: `<o-card>
  <o-card-header>
    <!-- Navigation -->
    <o-navigation>
      <o-navigation-item to="card">First item</o-navigation-item>
      <o-navigation-item to="changelog">Second item</o-navigation-item>
      <o-navigation-item to="contribute">Third item</o-navigation-item>
      <o-navigation-item to="about" disabled>Fourth item</o-navigation-item>
    </o-navigation>

    <o-button text="Action" />
  </o-card-header>

  <o-card-body>
    Body
  </o-card-body>

  <o-card-footer>
    Footer
  </o-card-footer>
</o-card>`,
      card_with_nav_button_html: `<div class="card">
  <div class="card__header">
    <nav class="nav">
      <ul>
        <li>
          <a href="/docs/card" class="is-active">First item</a>
        </li>
        <li>
          <a href="/docs/changelog">Second item</a>
        </li>
        <li>
          <a href="/docs/contribute">Third item</a>
        </li>
        <li>
          <a href="/docs/about" class="is-disabled">Fourth item</a>
        </li>
      </ul>
    </nav>

    <button type="button" class="button">
      Action
    </button>
  </div>

  <div class="card__body">
    Body
  </div>

  <div class="card__footer">
    Footer
  </div>
</div>`,

      card_click_footer: `<o-card>
  <o-card-header>
    <h3>Title</h3>

    <!-- Button -->
    <o-button text="Action" />
  </o-card-header>

  <o-card-body>
    Body
  </o-card-body>

  <o-card-footer click>
    Load more
    <o-icon symbol="plus" />
  </o-card-footer>
</o-card>`,
      card_click_footer_html: `<div class="card">
  <div class="card__header">
    <h3>Title</h3>
  </div>

  <div class="card__body">
    Body
  </div>

  <div class="card__footer card__footer--click">
    Load more
    <span class="icon-plus"></span>
  </div>
</div>`,

      card_with_list: `<o-card>
  <o-card-header>
    <h3>Title</h3>
  </o-card-header>

  <o-card-body>
    <list no_gutter divide hover>
      <list-item>
        <list-item-slot>
          <h3 class="list__item-title">First item</h3>
          <p class="list__item-description">Description of the first item</p>
        </list-item-slot>

        <list-item-slot>
          <o-button icon="remove" size="small" />
        </list-item-slot>
      </list-item>

      <list-item>
        <list-item-slot>
          <div>
            <h3 class="list__item-title">Second item</h3>
            <p class="list__item-description">Description of the second item</p>
          </div>
        </list-item-slot>

        <list-item-slot>
          <o-button icon="remove" size="small" />
        </list-item-slot>
      </list-item>

      <list-item>
        <list-item-slot>
          <div>
            <h3 class="list__item-title">Third item</h3>
            <p class="list__item-description">Description of the third item</p>
          </div>
        </list-item-slot>

        <list-item-slot>
          <o-button icon="remove" size="small" />
        </list-item-slot>
      </list-item>
    </list>
  </o-card-body>
</o-card>`,
      card_with_list_html: `<div class="card">
  <div class="card__header">
    <h3>Title</h3>
  </div>
  <div class="card__body">
    <div class="list list--large list--divide list--no-gutter list--hover">

      <div class="list__item">
        <div class="list__slot">
          <h3 class="list__item-title">First item</h3>
          <p class="list__item-description">Description of the first item</p>
        </div>
        <div class="list__slot">
          <button type="button" class="button button--small button--icon-only">
            <i class="icon-remove"></i>
          </button>
        </div>
      </div>

      <div class="list__item">
        <div class="list__slot">
          <div>
            <h3 class="list__item-title">Second item</h3>
            <p class="list__item-description">Description of the second item</p>
          </div>
        </div>
        <div class="list__slot">
          <button type="button" class="button button--small button--icon-only">
            <i class="icon-remove"></i>
          </button>
        </div>
      </div>

      <div class="list__item">
        <div class="list__slot">
          <div>
            <h3 class="list__item-title">Third item</h3>
            <p class="list__item-description">Description of the third item</p>
          </div>
        </div>
        <div class="list__slot">
          <button type="button" class="button button--small button--icon-only">
            <i class="icon-remove"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,

      card_full: `<o-card full>
  <o-card-body>
    Body
  </o-card-body>
</o-card>`,
      card_full_html: `<div class="card card--full">
  <div class="card__body">
    Body
  </div>
</div>`,

      card_multiple_sections: `<div class="card">

  <div class="card__header">
    <h2 class="card__title">Title</h2>
    <o-button text="Action" />
  </div>

  <div class="card__body">

    <!-- Section #1 -->
    <section class="card__section">
      <div class="card__section-header">
        <h2 class="card__section-title">First section</h2>

        <!-- Optional -->
        <div class="card__section-extras">
          <o-button text="Action" size="small" color="gray" />
        </div>
      </div>

      <div class="card__section-body">
        Body of first section
      </div>
    </section>

    <!-- Section #2 -->
    <section class="card__section">
      <div class="card__section-header">
        <h2 class="card__section-title">Second section</h2>

        <!-- Optional -->
        <div class="card__section-extras">
          <o-button text="Action" size="small" color="gray" />
        </div>
      </div>

      <div class="card__section-body">
        Body of second section
      </div>
    </section>
  </div>

</div>`
    }
  }
}
</script>
