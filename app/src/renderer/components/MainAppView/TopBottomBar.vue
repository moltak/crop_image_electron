<template>
  <div class="window">
    <header class="toolbar toolbar-header">
      <h1 class="title">Header</h1>
    </header>
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <p><button class="btn btn-default" v-on:click="selectSrc">원본 디렉토리 선택</button></p>
          <p><button class="btn btn-default" v-on:click="selectDst">결과물 디렉토리 선택</button></p>
          <p><button class="btn btn-primary" v-on:click="crop">자르기!!</button></p>
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
  import easyimage from 'easyimage'
  import Promise from 'bluebird'
  const readDir = Promise.promisify(fs.readdir)

  export default {
    name: 'topbottom-bar',
    data () {
      return {
        dst: '',
        src: '',
        promises: []
      }
    },
    created () {
    },
    methods: {
      selectSrc () {
        this.src = this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})
        this.printFiles()
      },
      printFiles () {
        this.srcFiles = []
        readDir(this.src[0])
          .then(files => files.forEach(i => this.promises.push(easyimage.info(this.src + '/' + i))))
      },
      selectDst () {
        this.dst = this.$electron.remote.dialog.showOpenDialog({properties: ['openDirectory']})
      },
      crop () {
        if (this.dst === '') return -1

        rx.Observable
          .forkJoin(this.promises)
          .flatMap(i => [].concat.apply([], i))
          .map(i => {
            const opt = {
              src: i.path,
              dst: this.dst + '/' + i.name,
              cropwidth: i.width - 2,
              cropheight: i.height,
              x: 0,
              y: 0
            }
            return easyimage.crop(opt).then()
          })
          .flatMap(i => i)
          .subscribe(i => console.log(i))
      }
    }
  }
</script>

<style scoped>
</style>
