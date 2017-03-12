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
          <button class="btn btn-default"  v-on:click="crop">crop</button>
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
  import fs from 'fs'
  import rx from 'rxjs'

  export default {
    name: 'topbottom-bar',
    data () {
      return {
        dst: '',
        src: ''
      }
    },
    created () {
    },
    methods: {
      selectSrc () {
        this.src = this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})
      },
      selectDst () {
        this.dst = this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})
      },
      crop () {
        console.log(fs)
        console.log(rx)
      }
    }
  }
</script>

<style scoped>
</style>
