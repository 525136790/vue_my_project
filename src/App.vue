<template>
  <div id="app">
    <router-view></router-view>
    <Footernav></Footernav>
  </div>
</template>
<script>
import Footernav from './components/footer'
export default {
  components:{
    Footernav
  }
}
</script>
<style>

</style>
