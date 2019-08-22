<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Breadcrumbs</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Show a path</p>
      </div>
    </docs-item>

    <!-- Default -->
    <docs-item title="Basic" :code="breadcrumbs_html" v-if="is_html">

      <div slot="body">
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__menu">
            <li>
              <a class="is-active">
                <span class="breadcrumbs__link-arrow-tail"></span>
                <span class="icon-integrations"></span>
                First
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Second
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Third
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Fourth
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </docs-item>

    <docs-item title="Basic" :code="breadcrumbs" v-else>

      <div slot="body">
        <o-breadcrumbs>
          <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
        </o-breadcrumbs>
      </div>

    </docs-item>



    <!-- Back Button -->
    <docs-item title="With a back button" :code="breadcrumbs_back_button_html" v-if="is_html">

      <div slot="body">
        <nav class="breadcrumbs">
          <a href="/" class="breadcrumbs__button is-active">
            <span class="breadcrumbs__button-arrow-tail"></span>
            Back
          </a>

          <ul class="breadcrumbs__menu">
            <li>
              <a class="is-active">
                <span class="breadcrumbs__link-arrow-tail"></span>
                <span class="icon-integrations"></span>
                First
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Second
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Third
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Fourth
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </docs-item>

    <docs-item title="With a back button" :code="breadcrumbs_back_button" v-else>

      <div slot="body">
        <!-- With back route -->
        <o-breadcrumbs back_route="documentation">
          <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
        </o-breadcrumbs>
      </div>

    </docs-item>



    <!-- Full width -->
    <docs-item title="Full width" :code="breadcrumbs_full_width_html" v-if="is_html">

      <div slot="body">
        <nav class="breadcrumbs breadcrumbs--full">
          <ul class="breadcrumbs__menu">
            <li>
              <a class="is-active">
                <span class="breadcrumbs__link-arrow-tail"></span>
                <span class="icon-integrations"></span>
                First
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Second
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Third
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Fourth
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </docs-item>

    <docs-item title="Full width" :code="breadcrumbs_full_width" v-else>

      <div slot="body">
        <o-breadcrumbs size="full">
          <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
        </o-breadcrumbs>
      </div>

    </docs-item>



    <!-- Steps -->
    <docs-item title="Steps" :code="breadcrumbs_steps_html" v-if="is_html">

      <div slot="body">
        <nav class="breadcrumbs breadcrumbs--full">
          <ul class="breadcrumbs__menu">
            <li>
              <a class="is-active">
                <span class="breadcrumbs__link-arrow-tail"></span>
                <span class="icon-integrations"></span>
                First
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a class="is-active">
                <span class="breadcrumbs__link-arrow-tail"></span>
                Second
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Third
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
            <li>
              <a>
                <span class="breadcrumbs__link-arrow-tail"></span>
                Fourth
                <span class="breadcrumbs__link-arrow-head"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </docs-item>

    <docs-item title="Steps" :code="breadcrumbs_steps" v-else>

      <div slot="body">
        <o-breadcrumbs size="full" type="steps">
          <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a" active>Second</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
          <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
        </o-breadcrumbs>
      </div>

    </docs-item>

    <!-- Colors -->
    <docs-item title="Colors" :code="breadcrumbs_colors_html" v-if="is_html">

      <ul slot="body" class="docs__simple-list">
        <li>
          <nav class="breadcrumbs breadcrumbs--color-primary">
            <ul class="breadcrumbs__menu">
              <li>
                <a class="is-active">
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  <span class="icon-integrations"></span>
                  First
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
              <li>
                <a class="is-active">
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  Second
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
              <li>
                <a>
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  Third
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
              <li>
                <a>
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  Fourth
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <nav class="breadcrumbs breadcrumbs--color-secondary">
            <ul class="breadcrumbs__menu">
              <li>
                <a class="is-active">
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  <span class="icon-integrations"></span>
                  First
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
              <li>
                <a class="is-active">
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  Second
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
              <li>
                <a>
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  Third
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
              <li>
                <a>
                  <span class="breadcrumbs__link-arrow-tail"></span>
                  Fourth
                  <span class="breadcrumbs__link-arrow-head"></span>
                </a>
              </li>
            </ul>
          </nav>
        </li>
      </ul>

    </docs-item>

    <docs-item title="Colors" :code="breadcrumbs_colors" v-else>

      <ul slot="body" class="docs__simple-list">
        <li>
          <o-breadcrumbs color="primary">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="secondary">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>
        </li>
        <li>
          <o-breadcrumbs color="red">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="orange">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="yellow">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="green">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="indigo">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="blue">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="violet">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>
        </li>
        <li>
          <o-breadcrumbs color="black">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <o-breadcrumbs color="gray">
            <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
            <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
          </o-breadcrumbs>

          <div class="bg-black">
            <o-breadcrumbs color="white">
              <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
              <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
              <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
              <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
            </o-breadcrumbs>
          </div>
        </li>
      </ul>

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
          <td>size</td>
          <td>Set with <code>.breadcrumbs--{size}</code></td>
          <td><code>full</code>.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>Set with <code>.avatar--color-{color}</code> class</td>
          <td>See <a href="/colors">Colors</a> page</td>
          <td>String</td>
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
          <td>back_route</td>
          <td>Add back button next to breadcrumbs. Pass in <code>name</code> of route.</td>
          <td>String or Object</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>Type of breadcrumbs. Possible values: <code>steps</code>.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Size of breadcrumbs. Possible values: <code>full</code>.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>color</td>
          <td>Color of of breadcrumbs. Possible values: all base colors from <code>$colors</code> config. For example: <code>primary</code>, <code>secondary</code>, <code>green</code>, <code>red</code>, etc.</td>
          <td>String</td>
          <td>-</td>
          <td>gray</td>
        </tr>
        </tbody>
      </table>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsBreadcrumbs',

  data () {
    return {
      is_html: true,
      breadcrumbs: `<o-breadcrumbs>
  <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
</o-breadcrumbs>`,
      breadcrumbs_html: `<nav class="breadcrumbs">
  <ul class="breadcrumbs__menu">
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        <span class="icon-integrations"></span>
        First
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Second
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Third
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Fourth
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
  </ul>
</nav>`,

      breadcrumbs_back_button: `<o-breadcrumbs back_route="documentation">
  <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
</o-breadcrumbs>`,
      breadcrumbs_back_button_html: `<nav class="breadcrumbs">
  <a href="/" class="breadcrumbs__button is-active">
    <span class="breadcrumbs__button-arrow-tail"></span>
    Back
  </a>

  <ul class="breadcrumbs__menu">
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        <span class="icon-integrations"></span>
        First
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Second
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Third
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Fourth
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
  </ul>
</nav>`,

      breadcrumbs_full_width: `<o-breadcrumbs size="full">
  <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Second</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
</o-breadcrumbs>`,
      breadcrumbs_full_width_html: `<nav class="breadcrumbs breadcrumbs--full">
  <ul class="breadcrumbs__menu">
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        <span class="icon-integrations"></span>
        First
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Second
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Third
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Fourth
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
  </ul>
</nav>`,

      breadcrumbs_steps: `<o-breadcrumbs size="full" type="steps">
  <o-breadcrumbs-item tag="a" icon="integrations" active>First</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a" active>Second</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Third</o-breadcrumbs-item>
  <o-breadcrumbs-item tag="a">Fourth</o-breadcrumbs-item>
</o-breadcrumbs>`,
      breadcrumbs_steps_html: `<nav class="breadcrumbs breadcrumbs--full">
  <ul class="breadcrumbs__menu">
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        <span class="icon-integrations"></span>
        First
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        Second
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Third
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Fourth
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
  </ul>
</nav>`,

      breadcrumbs_colors: `<o-breadcrumbs color="primary">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="secondary">
  ...
</o-breadcrumbs>


<o-breadcrumbs color="red">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="orange">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="yellow">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="green">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="indigo">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="blue">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="violet">
  ...
</o-breadcrumbs>


<o-breadcrumbs color="black">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="gray">
  ...
</o-breadcrumbs>

<o-breadcrumbs color="white">
  ...
</o-breadcrumbs>`,
      breadcrumbs_colors_html: `<nav class="breadcrumbs breadcrumbs--color-{color}">
  <ul class="breadcrumbs__menu">
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        <span class="icon-integrations"></span>
        First
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a class="is-active">
        <span class="breadcrumbs__link-arrow-tail"></span>
        Second
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Third
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
    <li>
      <a>
        <span class="breadcrumbs__link-arrow-tail"></span>
        Fourth
        <span class="breadcrumbs__link-arrow-head"></span>
      </a>
    </li>
  </ul>
</nav>`
    }
  }
}
</script>