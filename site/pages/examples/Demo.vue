<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Avatar</h1>
      <o-label size="small" text="Vue" />
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <p>
          Avatars of our illustrations we use accross the app/website. Every Avatar has it's own purpose, like <mark>ai-robot</mark> which is used in <mark>Message</mark> status about technical details.
        </p>
      </div>
    </docs-item>

    <!-- Avatar Default -->
    <docs-item title="Default" :code="avatar_default">
      <div slot="body">
        <o-avatar class="mb24" name="ai-robot" size="small"></o-avatar>
        <o-avatar class="mb24" name="ai-robot" size="notification"></o-avatar>

        <o-avatar class="mb24" name="granny" size="small"></o-avatar>
        <o-avatar class="mb24" name="granny" size="notification"></o-avatar>

        <o-avatar class="mb24" name="sonny" size="small"></o-avatar>
        <o-avatar class="mb24" name="sonny" size="notification"></o-avatar>
      </div>
    </docs-item>

    <!-- Avatar - Usage  -->
    <docs-item title="Usage">
      <div slot="body">
        <table class="table table--basic table--celled">
          <thead>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
            <th>Type</th>
            <th>Required prop</th>
            <th>Default</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>name</td>
            <td>It's for calling illustration of avatar. Possible values <code>ai-robot</code>, <code>granny</code>, <code>sonny</code>.</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>Size of avatar, avatar images might be cropped differently between sizes. Possible values <code>small</code>, <code>notification</code>.</td>
            <td>String</td>
            <td>-</td>
            <td>small</td>
          </tr>
          </tbody>
        </table>
      </div>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'DocsAvatar',

  data () {
    return {
      avatar_default: `<o-avatar name="ai-robot" type="small"></o-avatar>
<o-avatar name="ai-robot" type="notification"></o-avatar>

<o-avatar name="granny" type="small"></o-avatar>
<o-avatar name="granny" type="notification"></o-avatar>

<o-avatar name="sonny" type="small"></o-avatar>
<o-avatar name="sonny" type="notification"></o-avatar>`
    }
  }
}
</script>
