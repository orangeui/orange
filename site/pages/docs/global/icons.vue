<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Icons</h1>
      <o-label size="small" text="Vue" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>Icons are graphical projections of <mark>objects, actions and ideas</mark>.</p>
      </div>
    </docs-item>

    <docs-item title="Symbols" :code="icons_glyphs_html" v-if="is_html">
      <ul class="docs__simple-list" slot="body">
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="icon-caret-up"></span>
            <span class="docs__icons-text">caret-up</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-caret-down"></span>
            <span class="docs__icons-text">caret-down</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-breadcrumb"></span>
            <span class="docs__icons-text">breadcrumb</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-arrow-left"></span>
            <span class="docs__icons-text">arrow-left</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-arrow-right"></span>
            <span class="docs__icons-text">arrow-right</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-arrow-skip"></span>
            <span class="docs__icons-text">skip</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-arrow-up"></span>
            <span class="docs__icons-text">arrow-up</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-arrow-down"></span>
            <span class="docs__icons-text">arrow-down</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="icon-plus"></span>
            <span class="docs__icons-text">plus</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-x"></span>
            <span class="docs__icons-text">x</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-tick"></span>
            <span class="docs__icons-text">tick</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-remove"></span>
            <span class="docs__icons-text">remove</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-more"></span>
            <span class="docs__icons-text">more</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-burger"></span>
            <span class="docs__icons-text">burger</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="icon-dashboard"></span>
            <span class="docs__icons-text">dashboard</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-settings"></span>
            <span class="docs__icons-text">settings</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-events"></span>
            <span class="docs__icons-text">events</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-integrations"></span>
            <span class="docs__icons-text">integrations</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-billing"></span>
            <span class="docs__icons-text">billing</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-theme"></span>
            <span class="docs__icons-text">theme</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-rules"></span>
            <span class="docs__icons-text">rules</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-lock"></span>
            <span class="docs__icons-text">lock</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-refresh"></span>
            <span class="docs__icons-text">refresh</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-external"></span>
            <span class="docs__icons-text">external</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="icon-mobile"></span>
            <span class="docs__icons-text">mobile</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-desktop"></span>
            <span class="docs__icons-text">desktop</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="icon-audience"></span>
            <span class="docs__icons-text">audience</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-budget"></span>
            <span class="docs__icons-text">budget</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-launch"></span>
            <span class="docs__icons-text">launch</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-heart"></span>
            <span class="docs__icons-text">heart</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-code"></span>
            <span class="docs__icons-text">code</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-team"></span>
            <span class="docs__icons-text">team</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-profile"></span>
            <span class="docs__icons-text">profile</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-plan"></span>
            <span class="docs__icons-text">plan</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-editor"></span>
            <span class="docs__icons-text">editor</span>
          </div>
          <div class="docs__icons-item">
            <span class="icon-target"></span>
            <span class="docs__icons-text">target</span>
          </div>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Symbols" :code="icons_glyphs" v-else>
      <ul slot="body" class="docs__simple-list">

        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <o-icon symbol="caret-up" />
            <span class="docs__icons-text">caret-up</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="caret-down" />
            <span class="docs__icons-text">caret-down</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="breadcrumb" />
            <span class="docs__icons-text">breadcrumb</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="arrow-left" />
            <span class="docs__icons-text">arrow-left</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="arrow-right" />
            <span class="docs__icons-text">arrow-right</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="arrow-skip" />
            <span class="docs__icons-text">skip</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="arrow-up" />
            <span class="docs__icons-text">arrow-up</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="arrow-down" />
            <span class="docs__icons-text">arrow-down</span>
          </div>
        </li>

        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <o-icon symbol="plus" />
            <span class="docs__icons-text">plus</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="x" />
            <span class="docs__icons-text">x</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="tick" />
            <span class="docs__icons-text">tick</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="remove" />
            <span class="docs__icons-text">remove</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="more" />
            <span class="docs__icons-text">more</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="burger" />
            <span class="docs__icons-text">burger</span>
          </div>

        </li>

        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <o-icon symbol="dashboard" />
            <span class="docs__icons-text">dashboard</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="settings" />
            <span class="docs__icons-text">settings</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="events" />
            <span class="docs__icons-text">events</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="integrations" />
            <span class="docs__icons-text">integrations</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="billing" />
            <span class="docs__icons-text">billing</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="theme" />
            <span class="docs__icons-text">theme</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="rules" />
            <span class="docs__icons-text">rules</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="lock" />
            <span class="docs__icons-text">lock</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="refresh" />
            <span class="docs__icons-text">refresh</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="external" />
            <span class="docs__icons-text">external</span>
          </div>
        </li>

        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <o-icon symbol="mobile" />
            <span class="docs__icons-text">mobile</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="desktop" />
            <span class="docs__icons-text">desktop</span>
          </div>
        </li>

        <li class="docs__icons-list">

          <div class="docs__icons-item">
            <o-icon symbol="audience" />
            <span class="docs__icons-text">audience</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="budget" />
            <span class="docs__icons-text">budget</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="launch" />
            <span class="docs__icons-text">launch</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="heart" />
            <span class="docs__icons-text">heart</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="code" />
            <span class="docs__icons-text">code</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="team" />
            <span class="docs__icons-text">team</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="profile" />
            <span class="docs__icons-text">profile</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="plan" />
            <span class="docs__icons-text">plan</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="editor" />
            <span class="docs__icons-text">editor</span>
          </div>

          <div class="docs__icons-item">
            <o-icon symbol="target" />
            <span class="docs__icons-text">target</span>
          </div>

        </li>

      </ul>
    </docs-item>



    <!-- Colors  -->
    <docs-item title="Colors" :code="icons_colors_html" v-if="is_html">
      <ul class="docs__simple-list" slot="body">
        <li>
          <span class="icon-target color-primary"></span>
          <span class="icon-target color-secondary"></span>
        </li>
        <li>
          <span class="icon-target color-red"></span>
          <span class="icon-target color-orange"></span>
          <span class="icon-target color-yellow"></span>
          <span class="icon-target color-green"></span>
          <span class="icon-target color-indigo"></span>
          <span class="icon-target color-blue"></span>
          <span class="icon-target color-violet"></span></li>
        <li>
          <span class="icon-target color-black"></span>
          <span class="icon-target color-gray"></span>
          <span class="bg-black">
            <span class="icon-target color-white"></span>
          </span>
        </li>
      </ul>
    </docs-item>

    <docs-item title="Colors" :code="icons_colors" v-else>
      <ul slot="body" class="docs__simple-list">
        <li>
          <o-icon symbol="target" color="primary" />
          <o-icon symbol="target" color="secondary" />
        </li>
        <li>
          <o-icon symbol="target" color="red" />
          <o-icon symbol="target" color="orange" />
          <o-icon symbol="target" color="yellow" />
          <o-icon symbol="target" color="green" />
          <o-icon symbol="target" color="indigo" />
          <o-icon symbol="target" color="blue" />
          <o-icon symbol="target" color="violet" />
        </li>
        <li>
          <o-icon symbol="target" color="black" />
          <o-icon symbol="target" color="gray" />
          <span class="bg-black">
            <o-icon symbol="target" color="white" />
          </span>
        </li>
      </ul>
    </docs-item>

  </div>
</template>

<script>
export default {
  name: 'DocsIcons',

  data () {
    return {
      is_html: true,
      icons_glyphs: `<o-icon symbol="{symbol}" />`,
      icons_glyphs_html: `<span class="icon-{symbol}"></span>`,

      icons_colors: `<o-icon symbol="{symbol}" color="{color}" />`,
      icons_colors_html: `<span class="icon-{symbol} color-{color}"></span>`
    }
  }
}
</script>
