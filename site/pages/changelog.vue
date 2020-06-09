<template>
  <div class="docs__section">
    <div class="docs__header">
      <h1>Changelog</h1>
    </div>

    <docs-item class="explanation">
      <div slot="body">
        <h2>What's new</h2>
        <p>
          Orange came out to play in summer 2019. Here's what happened ever since.
        </p>

        <h3><strong>Releasing version v1.2.1</strong> - September 5, 2019</h3>
        <ul>
          <li>
            <p><strong>Fix:</strong>  Added support for extras/action in basic inputs.</p>
          </li>
        </ul>
        
        <h3><strong>Releasing version v1.2.0</strong> - August 30, 2019</h3>
        <ul>
          <li>
            <p><strong>Update:</strong> List component received an update with simplified markup. Instead of writing <code>.list__{element}</code> for each child element of <code>.list__item</code>, we changed <code>.list__item</code> to <code>&#60;li&#62;</code> and styling is now targeted directly to html tags. For exact changes, <a href="https://www.orangecss.com/docs/components/basic/list">check the docs</a>.</p>
          </li>
          <li>
            <p><strong>Update:</strong>  Breadcrumbs component was refactored. We removed unnecessary classes from its structure to make it simpler.</p>
          </li>
          <li>
            <p><strong>Update:</strong> Input component has a simpler structure. We removed two wrappers from it and it does not affect the versions below.</p>
          </li>
          <li>
            <p><strong>Update:</strong> All the JS components were refactored for more stable use.</p>
          </li>
          <li>
            <p><strong>New:</strong> Added new input styling version where you can put <code>action/extras</code> on the side of input. Note you need to add extra input wrapper, <a href="https://www.orangecss.com/docs/components/form/input">check the docs</a>.</p>
          </li>
          <li>
            <p><strong>New:</strong> Toggle component have now possibility of adding custom value texts for <code>enabled/disabled</code> state, <a href="https://www.orangecss.com/docs/components/form/toggle">check the docs</a>.</p>
          </li>
          <li>
            <p><strong>New:</strong> Textarea height can now be configured with <code>rows</code> attribute.</p>
          </li>
        </ul>

        <h3><strong>Releasing version v1.1.1</strong> - August 16, 2019</h3>
        <ul>
          <li>
            <p><strong>Fix:</strong> Remove unneeded files from npm package</p>
          </li>
        </ul>

        <h3><strong>Releasing version v1.1.0</strong> - August 16, 2019</h3>
        <ul>
          <li>
            <p><strong>Add:</strong> <code>.nav--center</code> and `.nav--right` for Navigation alignments.</p>
          </li>
          <li>
            <p><strong>Add:</strong> Introducing the <code>.card__section</code> for dividing the Card content into sections.</p>
          </li>
          <li>
            <p><strong>Add:</strong> Hover effect on Callout is now added with class <code>.callout--action</code>. This way, Callout can be used for showing stats and doesn't have an effect of a button.</p>
          </li>
          <li>
            <p><strong>Add:</strong> All components are now served with all the colors and not only the parent colors set in <code>_variables.scss</code>.</p>
          </li>
        </ul>

        <h3><strong>Releasing version v1.0.0</strong> - July 23, 2019</h3>
        <ul>
          <li>
            <p>Soft launch</p>
          </li>
        </ul>
      </div>
    </docs-item>
  </div>
</template>

<script>
export default {
  name: 'Changelog'
}
</script>
