<template lang="pug">
  div
    TopBottomBar
</template>

<script>
  import TopBottomBar from './LandingPageView/TopBottomBar'
  import PhotonView from './LandingPageView/PhotonView'

  export default {
    components: {
      TopBottomBar,
      PhotonView
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  @import url("./LandingPageView/assets/photon-0.1.2/css/photon.css");
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
