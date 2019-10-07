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
    <docs-item title="Basic" :code="card">
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

    <!-- Card with button -->
    <docs-item title="With a button" :code="card_with_button">
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

    <!-- Card with an input -->
    <docs-item title="With an input" :code="card_with_input">
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

    <!-- Card with navigation and button -->
    <docs-item title="With navigation and button" :code="card_with_nav_button">
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

    <!-- Card with image -->
    <docs-item title="With image" :code="card_with_image">
      <div class="grid grid--1 md:grid--2" slot="body">
        <div class="card">
          <div class="card__image">
            <img src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Card image">
          </div>
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

        <div class="card">
          <div class="card__image">
            <img src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Card image">
          </div>
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
      </div>
    </docs-item>

    <!-- Card with a list -->
    <docs-item title="With a list" :code="card_with_list">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>
        </div>
        <div class="card__body">
          <ul class="list list--large list--divide list--no-gutter list--hover">
            <li>
              <div>
                <h3>First item</h3>
                <p>Description of the first item</p>
              </div>

              <div class="list__action">
                <button type="button" class="button button--small">Action</button>
              </div>
            </li>

            <li>
              <div>
                <h3>Second item</h3>
                <p>Description of the second item</p>
              </div>

              <div class="list__action">
                <button type="button" class="button button--small">Action</button>
              </div>
            </li>

            <li>
              <div>
                <h3>Third item</h3>
                <p>Description of the third item</p>
              </div>

              <div class="list__action">
                <button type="button" class="button button--small">Action</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </docs-item>

    <!-- Card with clickable footer -->
    <docs-item title="Clickable footer" :code="card_click_footer">
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

    <!-- Multiple sections -->
    <docs-item title="Multiple sections" :code="card_multiple_sections">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>Title</h3>
          <button type="button" class="button">Action</button>
        </div>

        <section class="card__section">
          <div class="card__header">
            <h4>First section</h4>

            <button type="button" class="button button--small button--color-gray">Action</button>
          </div>

          <div class="card__body">Body of first section</div>
        </section>

        <section class="card__section">
          <div class="card__header">
            <h4>Second section</h4>

            <button type="button" class="button button--small button--color-gray">Action</button>
          </div>

          <div class="card__body">Body of second section</div>
        </section>

        <div class="card__footer">
          Footer
        </div>
      </div>
    </docs-item>

    <!-- Card without gutter -->
    <docs-item title="Without gutter" :code="card_full">
      <div class="card card--full" slot="body">
        <div class="card__body">
          Body
        </div>
      </div>
    </docs-item>

    <!-- Usage  -->
    <docs-item title="Usage">
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
import List from '@/components/List/List'
import ListItem from '@/components/List/ListItem'
import ListItemSlot from '@/components/List/ListItemSlot'

export default {
  components: {
    List,
    ListItem,
    ListItemSlot
  },

  data () {
    return {
      card: `<div class="card">
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
      card_with_button: `<div class="card">
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
      card_with_input: `<div class="card">
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
      card_with_nav_button: `<div class="card">
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
      card_with_image: `<div class="grid grid--1 md:grid--2">
  <div class="card">
    <div class="card__image">
      <img src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Card image">
    </div>
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

  <div class="card">
    <div class="card__image">
      <img src="https://orangecss.com/images/thumbnails/width-480/hedgehog-480.jpg" alt="Card image">
    </div>
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
</div>`,
      card_click_footer: `<div class="card">
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
      card_with_list: `<div class="card" slot="body">
  <div class="card__header">
    <h3>Title</h3>
  </div>
  <div class="card__body">
    <ul class="list list--large list--divide list--no-gutter list--hover">
      <li>
        <div>
          <h3>First item</h3>
          <p>Description of the first item</p>
        </div>

        <div class="list__action">
          <button type="button" class="button button--small">Action</button>
        </div>
      </li>

      <li>
        <div>
          <h3>Second item</h3>
          <p>Description of the second item</p>
        </div>

        <div class="list__action">
          <button type="button" class="button button--small">Action</button>
        </div>
      </li>

      <li>
        <div>
          <h3>Third item</h3>
          <p>Description of the third item</p>
        </div>

        <div class="list__action">
          <button type="button" class="button button--small">Action</button>
        </div>
      </li>
    </ul>
  </div>
</div>`,
      card_full: `<div class="card card--full">
  <div class="card__body">
    Body
  </div>
</div>`,
      card_multiple_sections: `<div class="card">
  <div class="card__header">
    <h3>Title</h3>
    <button type="button" class="button">Action</button>
  </div>

  <section class="card__section">
    <div class="card__header">
      <h4>First section</h4>

      <button type="button" class="button button--small button--color-gray">Action</button>
    </div>

    <div class="card__body">Body of first section</div>
  </section>

  <section class="card__section">
    <div class="card__header">
      <h4>Second section</h4>

      <button type="button" class="button button--small button--color-gray">Action</button>
    </div>

    <div class="card__body">Body of second section</div>
  </section>

  <div class="card__footer">
    Footer
  </div>
</div>`
    }
  }
}
</script>
