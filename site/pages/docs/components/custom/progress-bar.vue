<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Progress Bar</h1>
      <o-label size="small" text="HTML" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>A progress bar informs users about the <mark>progression of a running task</mark>, and can contextually mark the current <mark>point in a period</mark>.</p>
        <p>The Progress Bar component is a custom component and comes in <mark>line</mark> and <mark>circular style</mark>, both of which offer different levels of data exposure.</p>
      </div>
    </docs-item>

    <docs-item title="Line" :code="progress_bar_line_html" v-if="is_html">
      <div slot="body">
        <div
          class="o-progress-bar o-progress-bar--line"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="o-progress-bar__line">
            <div class="o-progress-bar__line-outer">
              <div class="o-progress-bar__line-inner" style="width: 60%;"> 
              </div>
            </div>
          </div>
        </div>
        
        <div
          class="o-progress-bar o-progress-bar--line mt-4"
          style="color: #474ba5;"
          data-stroke-width="15"
          role="progressbar"
          aria-valuenow="33"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="o-progress-bar__line">
            <div class="o-progress-bar__line-outer" style="height:15px;">
              <div class="o-progress-bar__line-inner" style="width: 33%;"></div>
            </div>
          </div>
          <div class="o-progress-bar__text">
            <span>33%</span>
            <span class="o-progress-bar__custom-text">with custom text</span>
          </div>
        </div>

        <div
          class="o-progress-bar o-progress-bar--line mt-4"
          style="color: blue;"
          data-stroke-width="18"
          role="progressbar"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="o-progress-bar__line">
            <div class="o-progress-bar__line-outer" style="height:18px;">
              <div class="o-progress-bar__line-inner" style="width: 30%;">
                <div class="o-progress-bar__line-innerText o-progress-bar__line-innerText--below">
                  30% Custom text
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="o-progress-bar o-progress-bar--line mt-4"
          style="color: red;"
          data-stroke-width="18"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="o-progress-bar__line">
            <div class="o-progress-bar__line-outer" style="height:18px;">
              <div class="o-progress-bar__line-inner" style="width: 60%;">
                <div class="o-progress-bar__line-innerText">
                  60% Custom text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Line" :code="progress_bar_line" v-else>
      <div slot="body">
        <o-progress-bar class="mb24" :percentage="5"></o-progress-bar>

        <o-progress-bar class="mb24" :text_inside="false" :show_text="true" :custom_text="'with custom text'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>

        <o-progress-bar class="mb24" :text_inside="true" :show_text="true" :stroke_width="18" :percentage="40" color="green" custom_text="sine"></o-progress-bar>
        <o-progress-bar class="is-disabled" :text_inside="false" :show_text="true" :custom_text="'disabled state'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>
      
      </div>
    </docs-item>

    <docs-item title="Circle" :code="progress_bar_circle_html" v-if="is_html">
      <div slot="body">
        <div class="o-progress-bar o-progress-bar--circle" data-width="250" data-stroke-width="20" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
          <div class="o-progress-bar__circle" style="width: 250px; height: 250px;">
            <svg viewBox="0 0 100 100">
              <path class="o-progress-bar__circle-track" fill="none" d="M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92" stroke-width="8.0"></path>
              <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none" d="M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92" stroke-width="8.0" style="stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 202.319px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;"></path>
            </svg>
          </div>
        </div>

        <div class="o-progress-bar o-progress-bar--circle" data-width="170" data-stroke-width="5" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="color: green;">
          <div class="o-progress-bar__circle" style="width: 170px; height: 170px;">
            <svg viewBox="0 0 100 100">
              <path class="o-progress-bar__circle-track" fill="none" d="M 50 50 m 0 -48 a 48 48 0 1 1 0 96 a 48 48 0 1 1 0 -96" stroke-width="2.9"></path>
              <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none" d="M 50 50 m 0 -48 a 48 48 0 1 1 0 96 a 48 48 0 1 1 0 -96" stroke-width="2.9" style="stroke-dasharray: 305.049px, 305.049px; stroke-dashoffset: 152.524px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;"></path>
            </svg>
          </div>
        </div>

        <div class="o-progress-bar o-progress-bar--circle" data-width="100" data-stroke-width="10" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="color: red;">
          <div class="o-progress-bar__circle" style="width: 100px; height: 100px;">
            <svg viewBox="0 0 100 100">
              <path class="o-progress-bar__circle-track" fill="none" d="M 50 50 m 0 -45 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90" stroke-width="10.0"></path>
              <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none" d="M 50 50 m 0 -45 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90" stroke-width="10.0" style="stroke-dasharray: 282.743px, 282.743px; stroke-dashoffset: 141.372px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;"></path>
            </svg>
          </div>
          <div class="o-progress-bar__text" style="font-size: 13.1111px; padding: 0px 15px;">
            <span class="o-progress-bar__text-number">50</span>
            <span class="o-progress-bar__text-percentage">%</span>
            <span class="o-progress-bar__custom-text">Custom text</span>
          </div>
        </div>
      </div>
    </docs-item>

    <docs-item title="Circle" :code="progress_bar_circle" v-else>
      <div slot="body">
        <o-progress-bar type="circle" :percentage="10" :show_text="false" :width="250" :stroke_width="20"></o-progress-bar>
        <o-progress-bar type="circle" :percentage="50" :show_text="true" color="green"></o-progress-bar>
        <o-progress-bar type="circle" :percentage="25" :show_text="true" color="green" :custom_text="'custom text'"></o-progress-bar>
        <o-progress-bar class="is-disabled" type="circle" :percentage="25" :show_text="true" color="sapphire" :custom_text="'disabled'"></o-progress-bar>
      </div>
    </docs-item>

    <docs-item title="Disabled" :code="progress_bar_disabled_html" v-if="is_html">
      <div slot="body">
        <div
          class="o-progress-bar o-progress-bar--line is-disabled"
          style="color: red;"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="o-progress-bar__line">
            <div class="o-progress-bar__line-outer">
              <div class="o-progress-bar__line-inner" style="width: 60%;"> 
              </div>
            </div>
          </div>
        </div>

        <div class="o-progress-bar o-progress-bar--circle is-disabled mt-4" data-width="100" data-stroke-width="10" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="color: red;">
          <div class="o-progress-bar__circle" style="width: 100px; height: 100px;">
            <svg viewBox="0 0 100 100">
              <path class="o-progress-bar__circle-track" fill="none" d="M 50 50 m 0 -45 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90" stroke-width="10.0"></path>
              <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none" d="M 50 50 m 0 -45 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90" stroke-width="10.0" style="stroke-dasharray: 282.743px, 282.743px; stroke-dashoffset: 141.372px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;"></path>
            </svg>
          </div>
          <div class="o-progress-bar__text" style="font-size: 13.1111px; padding: 0px 15px;">
            <span class="o-progress-bar__text-number">50</span>
            <span class="o-progress-bar__text-percentage">%</span>
            <span class="o-progress-bar__custom-text">Custom text</span>
          </div>
        </div>
        
      </div>
    </docs-item>

    <!-- Progress bar usage  -->
    <docs-item title="Usage" v-if="is_html">
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
            <td>value</td>
            <td>Set with data attribute <code>aria-valuenow</code>. Note: Set value as text if you have it.</td>
            <td>Number</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>stroke-width</td>
            <td>Set with data attribute <code>data-stroke-width</code>.</td>
            <td>Number</td>
            <td>-</td>
            <td>8</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Change width and height of progress bar type <code>circle</code> by setting data attribute <code>data-width</code>.</td>
            <td>Number</td>
            <td>-</td>
            <td>170</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Color of progress bar and text. Set style <code>color</code> attribute.</td>
            <td>String</td>
            <td>-</td>
            <td>secondary</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Set with <code>is-disabled</code> class on <code>.o-progress-bar</code></td>
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
      is_html: true,
      progress_bar_line: `<o-progress-bar class="mb24" :percentage="5"></o-progress-bar>

<o-progress-bar class="mb24" :text_inside="false" :show_text="true" :custom_text="'with custom text'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>

<o-progress-bar :text_inside="true" :show_text="true" :stroke_width="18" :percentage="50" color="green"></o-progress-bar>

<o-progress-bar class="is-disabled" :text_inside="false" :show_text="true" :custom_text="'disabled state'" :stroke_width="5" :percentage="10" color="green"></o-progress-bar>`,
      progress_bar_line_html: `<div
  class="o-progress-bar o-progress-bar--line"
  role="progressbar"
  aria-valuenow="60"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="o-progress-bar__line">
    <div class="o-progress-bar__line-outer">
      <div class="o-progress-bar__line-inner" style="width: 60%;"> 
      </div>
    </div>
  </div>
</div>

<div
  class="o-progress-bar o-progress-bar--line"
  style="color: #474ba5;"
  role="progressbar"
  aria-valuenow="33"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="o-progress-bar__line">
    <div class="o-progress-bar__line-outer" style="height:15px;">
      <div class="o-progress-bar__line-inner" style="width: 33%;"></div>
    </div>
  </div>
  <div class="o-progress-bar__text">
    <span>33%</span>
    <span class="o-progress-bar__custom-text">with custom text</span>
  </div>
</div>

<div
  class="o-progress-bar o-progress-bar--line"
  style="color: blue;"
  role="progressbar"
  aria-valuenow="30"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="o-progress-bar__line">
    <div class="o-progress-bar__line-outer" style="height:18px;">
      <div class="o-progress-bar__line-inner" style="width: 30%;">
        <div class="o-progress-bar__line-innerText">
          30% Custom text
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="o-progress-bar o-progress-bar--line"
  style="color: red;"
  role="progressbar"
  aria-valuenow="60"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="o-progress-bar__line">
    <div class="o-progress-bar__line-outer" style="height:18px;">
      <div class="o-progress-bar__line-inner" style="width: 60%;">
        <div class="o-progress-bar__line-innerText">
          60% Custom text
        </div>
      </div>
    </div>
  </div>
</div>`,
      progress_bar_circle: `<o-progress-bar type="circle" :percentage="10" :show_text="false" :width="250" :stroke_width="20"></o-progress-bar>

<o-progress-bar type="circle" :percentage="50" :show_text="true" color="green"></o-progress-bar>

<o-progress-bar type="circle" :percentage="25" :show_text="true" color="green" :custom_text="'custom text'"></o-progress-bar>

<o-progress-bar class="is-disabled" type="circle" :percentage="25" :show_text="true" color="sapphire" :custom_text="'disabled'"></o-progress-bar>`,
      progress_bar_circle_html: `<div class="o-progress-bar o-progress-bar--circle"
  data-width="250"
  data-stroke-width="20"
  aria-valuenow="30"
  aria-valuemin="0"
  aria-valuemax="100"
  style="color: #474BA5;">
  <div class="o-progress-bar__circle">
    <svg viewBox="0 0 100 100">
      <path class="o-progress-bar__circle-track" fill="none"></path>
      <path class="o-progress-bar__circle-path"stroke-linecap="square" stroke="currentColor" fill="none"></path>
    </svg>
  </div>
</div>

<div class="o-progress-bar o-progress-bar--circle"
  data-width="170"
  data-stroke-width="5"
  aria-valuenow="50"
  aria-valuemin="0"
  aria-valuemax="100"
  style="color: green;">
  <div class="o-progress-bar__circle">
    <svg viewBox="0 0 100 100">
      <path class="o-progress-bar__circle-track" fill="none"></path>
      <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none"></path>
    </svg>
  </div>
</div>

<div class="o-progress-bar o-progress-bar--circle"
  data-width="100"
  data-stroke-width="10"
  aria-valuenow="50"
  aria-valuemin="0"
  aria-valuemax="100"
  style="color: red;">
  <div class="o-progress-bar__circle">
    <svg viewBox="0 0 100 100">
      <path class="o-progress-bar__circle-track" fill="none"></path>
      <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none"></path>
    </svg>
  </div>

  <div class="o-progress-bar__text">
    <span class="o-progress-bar__text-number">50</span>
    <span class="o-progress-bar__text-percentage">%</span>
    <span class="o-progress-bar__custom-text">Custom text</span>
  </div>
</div>`,
      progress_bar_disabled_html: `<div class="o-progress-bar o-progress-bar--line is-disabled"
  style="color: red;"
  role="progressbar"
  aria-valuenow="60"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="o-progress-bar__line">
    <div class="o-progress-bar__line-outer">
      <div class="o-progress-bar__line-inner" style="width: 60%;"> 
      </div>
    </div>
  </div>
</div>
      
<div class="o-progress-bar o-progress-bar--circle is-disabled"
  data-width="100"
  data-stroke-width="10"
  aria-valuenow="50"
  aria-valuemin="0"
  aria-valuemax="100"
  style="color: red;">
  <div class="o-progress-bar__circle">
    <svg viewBox="0 0 100 100">
      <path class="o-progress-bar__circle-track" fill="none"></path>
      <path class="o-progress-bar__circle-path" stroke-linecap="square" stroke="currentColor" fill="none"></path>
    </svg>
  </div>

  <div class="o-progress-bar__text">
    <span class="o-progress-bar__text-number">50</span>
    <span class="o-progress-bar__text-percentage">%</span>
    <span class="o-progress-bar__custom-text">Custom text</span>
  </div>
</div>`
    }
  }
}
</script>
