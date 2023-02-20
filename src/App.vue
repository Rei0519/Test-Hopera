<template>
  <nav class="navi" >
     <the-header></the-header>
  </nav>
  <section class="hero-section">
      <router-view></router-view>
      </section>
     
        <the-footer></the-footer>
         
</template>
<script>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navi{
  height: 70px;

}
body {
    height:100%;
    margin: 0;
}
html {
    min-height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
}

.footer {
    position: absolute;

    height: 70px;
    /* width: 100vw; */
 
}

</style>
