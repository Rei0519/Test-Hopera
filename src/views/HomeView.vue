<template>
<div class="container-fluid">
<div class="col-lg-12 col-xl-12 col-sm-12">
  <section>
<div class="col-sm-12">
      <div>
     <video autoplay muted loop>
        <source src="../assets/Video_Hopera1920x650.mp4" type="video/mp4">
    </video>
    <img class="home" alt="" width="60%" height="auto" src="../assets/serramenti_Tavola.svg" />
    
        
    <h1>Serramenti di autore</h1>
    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
    <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        iusto, mollitia distinctio harum nulla suscipit itaque enim asperiores
        architecto, quos, ad voluptates eaque modi voluptas deserunt nostrum
        atque laborum temporibus.</p>
      </div>
 
      

    </div>
     <div class="col-sm-12 mt-2 mb-2">
              <button class="button">SERVICES</button> 
        </div>
  </section>
     <section>
  <div class="textOnImg col-sm-12">
        <img class="image" alt="" width="100%" height="auto" src="../assets/photoHome.png" />
        <div class="centered col-sm-12">Loren <strong>ipsum</strong> dolor</div>
    </div>
    <div class="col-sm-12">
      <div class="col-sm-12">
     <h1>Serramenti di autore</h1>
    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
   <div class="col-sm-12"> <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        iusto, mollitia distinctio harum nulla suscipit itaque enim asperiores
        architecto, quos, ad voluptates eaque modi voluptas deserunt nostrum
        atque laborum temporibus.</p></div> 
      </div>
    </div>
     <div class="col-sm-12">
           <router-link to="/chiSiamo"><button class="button">CHI SIAMO</button></router-link>
        </div>
     </section>
      
  </div>
  
</div>
  
  
</template>

<script>
export default{

}

</script>

<style scoped >


.textOnImg{
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vw;
 font-family: 'Heebo';
  
}

video {
  max-width: 100%;
}
image {
  max-width: 100%;
}
.home{
  display: block;
 margin-left: 31%;
  width: 40%;
}
.button {
  background-color: #333333; 
  color: white;
  font-size: 20px;
  width: 210px;
  letter-spacing: 3px;

  position: relative;

}
.paragraph {
  width: 100%;

  text-align: center;
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}
.paragraph {
  width: 60%;

   height: 100%;
   margin: auto;
   left: 0;
   right: 0;
   top: 10%;
   bottom: 10%;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
font-size:xx-large;
}

</style>
