<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Progress Bar</h1>
      <o-label size="small" text="Vue" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A progress bar informs users about the <mark>progression of a running task</mark>, and can contextually mark the current <mark>point in a period</mark>.</p>
        <p>The Progress Bar component is a custom Vue component and comes in <mark>line</mark> and <mark>circular style</mark>, both of which offer different levels of data exposure.</p>
      </div>
    </docs-item>

    <docs-item title="Line" :code="progress_bar_line">
      <div slot="body">
        <o-progress-bar class="mb24" :percentage="5"></o-progress-bar>

        <o-progress-bar class="mb24" :text_inside="false" :show_text="true" :custom_text="'with custom text'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>

        <o-progress-bar class="mb24" :text_inside="true" :show_text="true" :stroke_width="18" :percentage="40" color="green"></o-progress-bar>
        <o-progress-bar class="is-disabled" :text_inside="false" :show_text="true" :custom_text="'disabled state'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>
      </div>
    </docs-item>

    <docs-item title="Circle" :code="progress_bar_circle">
      <div slot="body">
        <o-progress-bar type="circle" :percentage="10" :show_text="false" :width="250" :stroke_width="20"></o-progress-bar>
        <o-progress-bar type="circle" :percentage="50" :show_text="true" color="green"></o-progress-bar>
        <o-progress-bar type="circle" :percentage="25" :show_text="true" color="green" :custom_text="'custom text'"></o-progress-bar>
        <o-progress-bar class="is-disabled" type="circle" :percentage="25" :show_text="true" color="sapphire" :custom_text="'disabled'"></o-progress-bar>
      </div>
    </docs-item>

    <!-- Checkbox usage  -->
    <docs-item title="Usage">
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
            <td>type</td>
            <td>Type of progress bar. Possible value <code>line</code>, <code>circle</code>. </td>
            <td>String</td>
            <td>-</td>
            <td>line</td>
          </tr>
          <tr>
            <td>percentage</td>
            <td>Value of progress bar.</td>
            <td>Number</td>
            <td>true</td>
            <td>0</td>
          </tr>
          <tr>
            <td>stroke_width</td>
            <td>Stroke width.</td>
            <td>Number</td>
            <td>-</td>
            <td>8</td>
          </tr>
          <tr>
            <td>text_inside</td>
            <td>Display text inside <code>line</code> bar. Make sure that <code>stroke_width</code> is high enough.</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Change width and height of progress bar type <code>circle</code>.</td>
            <td>Number</td>
            <td>-</td>
            <td>170</td>
          </tr>
          <tr>
            <td>show_text</td>
            <td>Display percentage text inside/outside progress bar.</td>
            <td>Boolean</td>
            <td>-</td>
            <td>false</td>
          </tr>
          <tr>
            <td>custom_text</td>
            <td>Display extra custom text next/below percentage text progress bar.</td>
            <td>String</td>
            <td>-</td>
            <td>null</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Color of progress bar and text. Possible values <code>sapphire</code>, <code>green</code>. Will add more when needed.</td>
            <td>String</td>
            <td>-</td>
            <td>sapphire</td>
          </tr>
        </tbody>
      </table>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsProgressBar',

  data () {
    return {
      progress_bar_line: `<o-progress-bar class="mb24" :percentage="5"></o-progress-bar>

<o-progress-bar class="mb24" :text_inside="false" :show_text="true" :custom_text="'with custom text'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>

<o-progress-bar :text_inside="true" :show_text="true" :stroke_width="18" :percentage="50" color="green"></o-progress-bar>

<o-progress-bar class="is-disabled" :text_inside="false" :show_text="true" :custom_text="'disabled state'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>`,
      progress_bar_circle: `<o-progress-bar type="circle" :percentage="10" :show_text="false" :width="250" :stroke_width="20"></o-progress-bar>

<o-progress-bar type="circle" :percentage="50" :show_text="true" color="green"></o-progress-bar>

<o-progress-bar type="circle" :percentage="25" :show_text="true" color="green" :custom_text="'custom text'"></o-progress-bar>

<o-progress-bar class="is-disabled" type="circle" :percentage="25" :show_text="true" color="sapphire" :custom_text="'disabled'"></o-progress-bar>`
    }
  }
}
</script>
