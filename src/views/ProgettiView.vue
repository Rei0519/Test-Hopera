<template >
<div class="textOnImg">
  <img class="home mt-2" alt="" width="100%" src="../assets/photoProgettiHeader.png" />
  <div class="bottom-left">Loren <strong>ipsum</strong> dolor</div>
  <div class="bottom-right"><img class="home" alt="" width="130%" height="auto" src="../assets/serramenti_Tavola.svg" /></div>
</div>
    <div>
        <h1>Progetti</h1>

        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
    <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        iusto, mollitia distinctio harum nulla suscipit itaque enim asperiores
        architecto, quos, ad voluptates eaque modi voluptas deserunt nostrum
        atque laborum temporibus.</p>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .textOnImg{
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
}
.bottom-left {
  position: absolute;
  bottom: 10%;
  left: 20%;
   font-size: 56px;
 font-family: 'Heebo';
}
.bottom-right{
  position: absolute;
  bottom: 7%;
  right: 30%;
 font-size: 56px;
 font-family: 'Heebo';
}
</style>