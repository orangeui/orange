<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>List</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A list is <mark>a container</mark> that <mark>groups items</mark>.</p>

        <p>When wrapping a list with a <code>.card</code> element use the <code>no_gutter</code> attribute that overflows card's body gutter. This makes the list take full width of it's parent card.</p>

        <p>You can add horizontal dividers between list items by specifying <code>divide</code> attribute.</p>

        <p>Add a hover effect to a list with <code>hover</code> attribute.</p>
      </div>
    </docs-item>

    <!-- Large Size -->
    <docs-item title="Large size" :code="list_large_html" v-if="is_html">
      <div slot="body">
        <div class="list list--large">
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Large size" :code="list_large" v-else>
      <div slot="body">
        <list>
          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>
        </list>
      </div>
    </docs-item>



    <!-- Medium Size -->
    <docs-item title="Medium size" :code="list_medium_html" v-if="is_html">
      <div slot="body">
        <div class="list list--medium">
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Medium size" :code="list_medium" v-else>
      <div slot="body">
        <list size="medium">
          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>
        </list>
      </div>
    </docs-item>



    <!-- Small Size -->
    <docs-item title="Small size" :code="list_small_html" v-if="is_html">
      <div slot="body">
        <div class="list list--small">
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Small size" :code="list_small" v-else>
      <div slot="body">
        <list size="small">
          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>
        </list>
      </div>
    </docs-item>


    <!-- Divide style -->
    <docs-item title="Divide style" :code="list_divide_html" v-if="is_html">
      <div slot="body">
        <div class="list list--large list--divide">
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Divide style" :code="list_divide" v-else>
      <div slot="body">
        <list divide>
          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>
        </list>
      </div>
    </docs-item>



    <!-- Hover style -->
    <docs-item title="Hover style" :code="list_hover_html" v-if="is_html">
      <div slot="body">
        <div class="list list--large list--hover">
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Hover style" :code="list_hover" v-else>
      <div slot="body">
        <list hover>
          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>
        </list>
      </div>
    </docs-item>



    <!-- Pointer style -->
    <docs-item title="Pointer style" :code="list_pointer_html" v-if="is_html">
      <div slot="body">
        <div class="list list--large list--pointer">
          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>

          <div class="list__item">
            <div class="list__slot">
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </div>
            <div class="list__slot">
              <button type="button" class="button button--small">Action</button>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Pointer style" :code="list_pointer" v-else>
      <div slot="body">
        <list pointer>
          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">First item</h3>
              <p class="list__item-description">Description of the first item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Second item</h3>
              <p class="list__item-description">Description of the second item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>

          <list-item>
            <list-item-slot>
              <h3 class="list__item-title">Third item</h3>
              <p class="list__item-description">Description of the third item</p>
            </list-item-slot>

            <list-item-slot>
              <o-button text="Action" size="small" />
            </list-item-slot>
          </list-item>
        </list>
      </div>
    </docs-item>

    <!-- Inside a Card -->
    <docs-item title="Inside a card, divided, hover, pointer" :code="list_no_gutter_html" v-if="is_html">
      <div class="card" slot="body">
        <div class="card__header">
          <h3>List title</h3>
        </div>
        <div class="card__body">
          <div class="list list--large list--divide list--no-gutter list--hover list--pointer">
            <div class="list__item">
              <div class="list__slot">
                <h3 class="list__item-title">First item</h3>
                <p class="list__item-description">Description of the first item</p>
              </div>
              <div class="list__slot">
                <button type="button" class="button button--small button--icon-only"><i class="icon-remove"></i></button>
              </div>
            </div>
            <div class="list__item">
              <div class="list__slot">
                <h3 class="list__item-title">Second item</h3>
                <p class="list__item-description">Description of the second item</p>
              </div>
              <div class="list__slot">
                <button type="button" class="button button--small button--icon-only"><i class="icon-remove"></i></button>
              </div>
            </div>
            <div class="list__item">
              <div class="list__slot">
                <h3 class="list__item-title">Third item</h3>
                <p class="list__item-description">Description of the third item</p>
              </div>
              <div class="list__slot">
                <button type="button" class="button button--small button--icon-only"><i class="icon-remove"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Inside a card, divided, hover, pointer" :code="list_no_gutter" v-else>
      <o-card slot="body">
        <o-card-header>
          <h3>List title</h3>
        </o-card-header>

        <o-card-body>
          <list no_gutter divide hover pointer>
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
                <h3 class="list__item-title">Second item</h3>
                <p class="list__item-description">Description of the second item</p>
              </list-item-slot>

              <list-item-slot>
                <o-button icon="remove" size="small" />
              </list-item-slot>
            </list-item>

            <list-item>
              <list-item-slot>
                <h3 class="list__item-title">Third item</h3>
                <p class="list__item-description">Description of the third item</p>
              </list-item-slot>

              <list-item-slot>
                <o-button icon="remove" size="small" />
              </list-item-slot>
            </list-item>
          </list>
        </o-card-body>
      </o-card>
    </docs-item>


    <!-- List - Usage  -->
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
          <td>size</td>
          <td>Set with <code>.list--{size}</code> class</td>
          <td><code>large</code>, <code>medium</code>, <code>small</code></td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>divide</td>
          <td>Set with <code>.list--divide</code> class</td>
          <td><code>divide</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>hover</td>
          <td>Set with <code>.list--hover</code> class</td>
          <td><code>hover</code></td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>no-gutter</td>
          <td>Set with <code>.list--no-gutter</code> class. Add negative margins to side at the <code>$spacing-base</code> size. It's common use in cards.</td>
          <td>string</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </docs-item>

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
          <td>size</td>
          <td>Size of list, different spacing between items. Possible values <code>large</code>, <code>medium</code>, <code>small</code>.</td>
          <td>String</td>
          <td>-</td>
          <td>large</td>
        </tr>
        <tr>
          <td>divide</td>
          <td>Add border between items.</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>hover</td>
          <td>Add hover style to item.</td>
          <td>Boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>no_gutter</td>
          <td>Add negative margins to side at the <code>$spacing-base</code> size. It's common use in cards.</td>
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
      is_html: true,
      list_items: [
        {
          title: 'First item',
          description: 'Item content #1',
          buttons: [
            {
              text: 'custom button',
              color: 'color-secondary'
            }
          ]
        },
        {
          title: 'Second item',
          description: 'Item content #2',
          buttons: [
            {
              text: 'custom button',
              color: 'color-secondary'
            }
          ]
        },
        {
          title: 'Third item',
          description: 'Item content #3',
          buttons: [
            {
              text: 'custom button',
              color: 'color-secondary'
            }
          ]
        },
        {
          title: 'Item Title #4',
          description: 'Item content #4',
          buttons: [
            {
              text: 'custom button',
              color: 'color-secondary'
            }
          ]
        }
      ],
      list_large: `<list>
  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>
</list>`,
      list_large_html: `<div class="list list--large">
  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>
</div>`,

      list_medium: `<list size="medium">
  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>
</list>`,
      list_medium_html: `<div class="list list--medium">
  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>
</div>`,

      list_small: `<list>
  <list-item size="small">
    <list-item-slot>
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>
</list>`,
      list_small_html: `<div class="list list--small">
  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>
</div>`,

      list_divide: `<list>
  <list-item divide>
    <list-item-slot>
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>
</list>`,
      list_divide_html: `<div class="list list--large list--divide">
  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>
</div>`,

      list_hover: `<list>
  <list-item hover>
    <list-item-slot>
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>
</list>`,
      list_hover_html: `<div class="list list--large list--hover">
  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>
</div>`,

      list_pointer: `<list>
  <list-item pointer>
    <list-item-slot>
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>

  <list-item>
    <list-item-slot>
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </list-item-slot>

    <list-item-slot>
      <o-button text="Action" size="small" />
    </list-item-slot>
  </list-item>
</list>`,
      list_pointer_html: `<div class="list list--large list--pointer">
  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">First item</h3>
      <p class="list__item-description">Description of the first item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Second item</h3>
      <p class="list__item-description">Description of the second item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>

  <div class="list__item">
    <div class="list__slot">
      <h3 class="list__item-title">Third item</h3>
      <p class="list__item-description">Description of the third item</p>
    </div>
    <div class="list__slot">
      <button type="button" class="button button--small">Action</button>
    </div>
  </div>
</div>`,

      list_no_gutter: `<o-card>
  <o-card-header>
    <h3>List title</h3>
  </o-card-header>

  <o-card-body>
    <list no_gutter divide hover pointer>
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
          <h3 class="list__item-title">Second item</h3>
          <p class="list__item-description">Description of the second item</p>
        </list-item-slot>

        <list-item-slot>
          <o-button icon="remove" size="small" />
        </list-item-slot>
      </list-item>

      <list-item>
        <list-item-slot>
          <h3 class="list__item-title">Third item</h3>
          <p class="list__item-description">Description of the third item</p>
        </list-item-slot>

        <list-item-slot>
          <o-button icon="remove" size="small" />
        </list-item-slot>
      </list-item>
    </list>
  </o-card-body>
</o-card>`,
        list_no_gutter_html: `<div class="card">
  <div class="card__header">
    <h3>List title</h3>
  </div>
  <div class="card__body">
    <div class="list list--large list--divide list--no-gutter list--hover list--pointer">
      <div class="list__item">
        <div class="list__slot">
          <h3 class="list__item-title">First item</h3>
          <p class="list__item-description">Description of the first item</p>
        </div>
        <div class="list__slot">
          <button type="button" class="button button--small button--icon-only"><i class="icon-remove"></i></button>
        </div>
      </div>

      <div class="list__item">
        <div class="list__slot">
          <h3 class="list__item-title">Second item</h3>
          <p class="list__item-description">Description of the second item</p>
        </div>
        <div class="list__slot">
          <button type="button" class="button button--small button--icon-only"><i class="icon-remove"></i></button>
        </div>
      </div>

      <div class="list__item">
        <div class="list__slot">
          <h3 class="list__item-title">Third item</h3>
          <p class="list__item-description">Description of the third item</p>
        </div>
        <div class="list__slot">
          <button type="button" class="button button--small button--icon-only"><i class="icon-remove"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>`
    }
  },

  computed: {
    list_items_with_images () {
      const list = _.cloneDeep(this.list_items)
      return list.map(item => {
        this.$set(item, 'image_url', 'https://fomo.com/static/images/app/dashboard/scorecard.svg')
        return item
      })
    },
    list_items_with_images_without_buttons () {
      const list = _.cloneDeep(this.list_items_with_images)
      return list.map(item => {
        this.$set(item, 'buttons', null)
        return item
      })
    }
  }
}
</script>