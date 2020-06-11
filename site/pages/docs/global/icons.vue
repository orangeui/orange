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
            <span class="o-icon-caret-up"></span>
            <span class="docs__icons-text">caret-up</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-caret-down"></span>
            <span class="docs__icons-text">caret-down</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-breadcrumb"></span>
            <span class="docs__icons-text">breadcrumb</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-arrow-left"></span>
            <span class="docs__icons-text">arrow-left</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-arrow-right"></span>
            <span class="docs__icons-text">arrow-right</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-arrow-up"></span>
            <span class="docs__icons-text">arrow-up</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-arrow-down"></span>
            <span class="docs__icons-text">arrow-down</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-arrow-skip"></span>
            <span class="docs__icons-text">arrow-skip</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="o-icon-plus"></span>
            <span class="docs__icons-text">plus</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-x"></span>
            <span class="docs__icons-text">x</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-tick"></span>
            <span class="docs__icons-text">tick</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-remove"></span>
            <span class="docs__icons-text">remove</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-more"></span>
            <span class="docs__icons-text">more</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-burger"></span>
            <span class="docs__icons-text">burger</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-archive"></span>
            <span class="docs__icons-text">archive</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="o-icon-dashboard"></span>
            <span class="docs__icons-text">dashboard</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-settings"></span>
            <span class="docs__icons-text">settings</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-events"></span>
            <span class="docs__icons-text">events</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-integrations"></span>
            <span class="docs__icons-text">integrations</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-billing"></span>
            <span class="docs__icons-text">billing</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-theme"></span>
            <span class="docs__icons-text">theme</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-rules"></span>
            <span class="docs__icons-text">rules</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-lock"></span>
            <span class="docs__icons-text">lock</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-refresh"></span>
            <span class="docs__icons-text">refresh</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-external"></span>
            <span class="docs__icons-text">external</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-loading"></span>
            <span class="docs__icons-text">loading</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="o-icon-mobile"></span>
            <span class="docs__icons-text">mobile</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-desktop"></span>
            <span class="docs__icons-text">desktop</span>
          </div>
        </li>
        <li class="docs__icons-list">
          <div class="docs__icons-item">
            <span class="o-icon-audience"></span>
            <span class="docs__icons-text">audience</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-budget"></span>
            <span class="docs__icons-text">budget</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-launch"></span>
            <span class="docs__icons-text">launch</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-heart"></span>
            <span class="docs__icons-text">heart</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-code"></span>
            <span class="docs__icons-text">code</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-team"></span>
            <span class="docs__icons-text">team</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-profile"></span>
            <span class="docs__icons-text">profile</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-plan"></span>
            <span class="docs__icons-text">plan</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-editor"></span>
            <span class="docs__icons-text">editor</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-target"></span>
            <span class="docs__icons-text">target</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-circles"></span>
            <span class="docs__icons-text">circles</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-eye"></span>
            <span class="docs__icons-text">eye</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-mail"></span>
            <span class="docs__icons-text">mail</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-palette"></span>
            <span class="docs__icons-text">palette</span>
          </div>
          <div class="docs__icons-item">
            <span class="o-icon-play"></span>
            <span class="docs__icons-text">play</span>
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
          <span class="o-icon-target color-primary"></span>
          <span class="o-icon-target color-secondary"></span>
        </li>
        <li>
          <span class="o-icon-target color-red"></span>
          <span class="o-icon-target color-orange"></span>
          <span class="o-icon-target color-yellow"></span>
          <span class="o-icon-target color-green"></span>
          <span class="o-icon-target color-indigo"></span>
          <span class="o-icon-target color-blue"></span>
          <span class="o-icon-target color-violet"></span></li>
        <li>
          <span class="o-icon-target color-black"></span>
          <span class="o-icon-target color-gray"></span>
          <span class="bg-black">
            <span class="o-icon-target color-white"></span>
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
      icons_glyphs_html: `<span class="o-icon-{symbol}"></span>`,

      icons_colors: `<o-icon symbol="{symbol}" color="{color}" />`,
      icons_colors_html: `<span class="o-icon-{symbol} color-{color}"></span>`
    }
  }
}
</script>
