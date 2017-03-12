<template>
  <div class="window">
    <header class="toolbar toolbar-header">
      <h1 class="title">Header</h1>
    </header>
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <button class="btn btn-default"  v-on:click="selectSrc">Select src</button>
          <button class="btn btn-default"  v-on:click="selectDst">Select dst</button>
          <span class="icon icon-note"></span>
        </div>
        <div class="pane">
        </div>
      </div>
    </div>
    <footer class="toolbar toolbar-footer">
      <h1 class="title">Footer</h1>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'topbottom-bar',
    created () {
    },
    methods: {
      selectSrc () {
        const path = this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})
        console.log(`src: ${path}`)
      },
      selectDst () {
        const path = this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})
        console.log(`dst: ${path}`)
      }
    }
  }
</script>

<style scoped>
</style>
