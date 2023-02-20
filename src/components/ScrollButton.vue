<template>
    <button @click="scrollToTop()" :style="mybutton" id="myBtn" title="Go to top">^</button>
</template>

<script>
export default {
    methods: {

 scrollToTop() {
            window.scrollTo(0, 0);
        }
    
  },
 
}
</script>

<style scoped>
#myBtn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  height: 35px;
  width: 35px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: rgb(78, 67, 67);
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
}

#myBtn:hover {
  background-color: #555;
}
</style>