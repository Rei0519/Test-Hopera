<template >
<div class="container-fluid">

<div class="textOnImg ">
  <img class="home mt-2 img-thumbnail" alt="" width="100%"  src="../assets/photoChisiamoHeader.png" />
  <div class="bottom-left" > Loren <strong>ipsum</strong> dolor</div>
  <div class="bottom-right"><img src="../assets/serramenti_Tavola.svg" height="200" width="300" alt="..." ></div> 

</div>
    <section>
   <!-- <div class="row col-lg-12 col-sm-12">
      <img class="home mt-2" alt="" width="100%" src="../assets/photo1Chisiamo.png" />
    </div> -->
     <div class="right mt-5">
   <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
    <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        iusto, mollitia distinctio harum nulla suscipit itaque enim asperiores
        architecto, quos, ad voluptates eaque modi voluptas deserunt nostrum
        atque laborum temporibus.</p>
     </div>
    </section>  
  <section>
 <div class="wrapper col-lg-12 col-xl-12 ">
  <div class="left-side col-sm-6 " >
   <div data-aos="fade-right"  data-aos-duration="800"  data-aos-offset="300"
     data-aos-easing="ease-in" > 
               <div class="border-right">
                   <img class="home"  height="auto" alt="" src="../assets/photo1Chisiamo.png" /> <br>
                     <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo cupiditate ut similique nobis rerum ab 
                      voluptatum commodi molestias laboriosam libero, quis consequuntur iste, corrupti quam mollitia eos quia facere.</p>
                   </div>
          </div>
  </div> 
  <div class="right-side col-sm-6 emptydiv d-sm-none d-md-block" ></div>

</div>
 <div class="wrapper col-lg-12 col-xl-12 ">
  <div class="left-side col-sm-6 emptydiv d-sm-none d-md-block" ></div>
  <div class="right-side col-sm-6">
   <div  data-aos="fade-left"  data-aos-duration="800"   
     data-aos-easing="ease-in">
        <div class="border-left">
                   <img class="home" alt="" src="../assets/photo2Chisiamo.png" />
                       <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo cupiditate ut similique nobis rerum ab voluptatum commodi molestias laboriosam libero, quis consequuntur iste, corrupti quam mollitia eos quia facere.</p> 
                   </div>
          </div>
  </div>
</div>
 <div class="wrapper col-lg-12 col-xl-12 ">
  <div class="left-side col-sm-6 " >
   <div data-aos="fade-right"  data-aos-duration="800"  data-aos-offset="300"
     data-aos-easing="ease-in" > 
               <div class="border-right">
                   <img class="home" alt="" src="../assets/photo3Chisiamo.png" /> 
                     <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo cupiditate ut similique nobis rerum ab 
                      voluptatum commodi molestias laboriosam libero, quis consequuntur iste, corrupti quam mollitia eos quia facere.</p>
                   </div>
          </div>
  </div> 
  <div class="right-side col-sm-6 emptydiv d-sm-none d-md-block" ></div>

</div>
 <div class="wrapper col-lg-12 col-xl-12 ">
  <div class="left-side col-sm-6 emptydiv d-sm-none d-md-block" ></div>
  <div class="right-side col-sm-6">
   <div  data-aos="fade-left"  data-aos-duration="800"   
     data-aos-easing="ease-in">
        <div class="border-left">
                   <img class="home" alt="" src="../assets/photo4Chisiamo.png" />
                       <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo cupiditate ut similique nobis rerum ab voluptatum commodi molestias laboriosam libero, quis consequuntur iste, corrupti quam mollitia eos quia facere.</p> 
                   </div>
          </div>
  </div>
</div>
  </section>
  <br>
  <div>
         <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
    <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        iusto, mollitia distinctio harum nulla suscipit itaque enim asperiores
        architecto, quos, ad voluptates eaque modi voluptas deserunt nostrum
        atque laborum temporibus.</p>
     </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

@media(max-width:900px) {
  .emptydiv{
    visibility: hidden;
     border-right:hidden;
  }
 .left-side[data-v-ad275430]{
  border-right: 0;
  width:100%;
  padding: 0;
   margin-top:15px;
 }
.wrapper[data-v-ad275430] {
 display:block;
}
 .right-side[data-v-ad275430] {
    flex-grow: 1;
    border-left: 0;
  width:100%;
  padding: 0;
  margin-top:15px;
}
}
/* (A) FLEX WRAPPER */
.wrapper {
  display: flex;
  overflow-x: hidden;
 
}
 
/* (B) LEFT-RIGHT DIMENSIONS */
.left-side { width: 50%; }
.right-side { flex-grow: 1; } /* auto use all remaining space */
.left-side, .right-side { padding: 10px; }
 
/* (C) VERTICAL LINE */
.left-side { border-right: 5px solid rgb(0, 0, 0); }

section{
  padding: 10px;
}
  .border-left{
    border-radius: 1px 50px 30px;
    height: 400px;
     padding-top: 40px;
   
     border: 0.1px solid rgba(0, 0, 0, 0.2);
     background-color: rgb(245, 245, 245);
  }

    .border-right{
    border-radius: 30px 1px 30px 30px;
    height: 400px;
    padding-top: 40px;
    
    border: 0.1px solid rgba(0, 0, 0, 0.2);
    background-color: rgb(245, 245, 245);
  }
  img{
    height: 60%;
  } 
 
.textOnImg{
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  color: rgb(255, 255, 255);
}
.bottom-left {
   font-size: 250%;

  position: absolute;
  bottom: 10%;
  left: 20%;
   font-size: 56px;
 font-family: 'Heebo';
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}
.bottom-right{
  position: absolute;
  bottom: 7%;
  right: 30%;
 font-size: 56px;

 font-family: 'Heebo';
}


.paragraph{
  padding: 7px;
}
</style>
