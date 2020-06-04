<template>
  <div id="app">
    <div class="container">
      <h1>Example</h1>
      <o-card :full="true">
        <o-card-header>
          <h3>Title</h3>
        </o-card-header>
        <o-card-body>
          <o-list :hover="true" :divide="true">
            <o-list-item>
              <o-list-item-slot>
                <h3>First item</h3>
                <p>Description of the first item</p>
              </o-list-item-slot>
              <o-list-item-slot :action="true">
                <o-button text="Action" role="small" />
              </o-list-item-slot>
            </o-list-item>
            <o-list-item>
              <o-list-item-slot>
                <h3>Second item</h3>
                <p>Description of the second item</p>
              </o-list-item-slot>
              <o-list-item-slot :action="true">
                <o-button text="Action" role="small" />
              </o-list-item-slot>
            </o-list-item>
            <o-list-item>
              <o-list-item-slot>
                <h3>Third item</h3>
                <p>Description of the third item</p>
              </o-list-item-slot>
              <o-list-item-slot :action="true">
                <o-button text="Action" role="small" />
              </o-list-item-slot>
            </o-list-item>
          </o-list>
        </o-card-body>
      </o-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>
