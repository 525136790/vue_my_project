<template>
  <div id="app">
    <keep-alive include="home">
        <router-view></router-view>
    </keep-alive>
    
   
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
