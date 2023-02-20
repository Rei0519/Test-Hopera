<template>
<div class="container-fluid">
<section>
  
<div v-for="info in infoProduct" :key="info.name">
<div class="col-12 text-center">

<h1 class="name-title">{{info.name}}</h1>
</div>
        
<div class="col-lg-12 col-sm-12 row  d-flex justify-content-around mt-3">
        <div class="col-sm-6 " data-aos="fade-up"  data-aos-duration="2000" >
             <div>
                <img :src="info.image" class="center" alt="image of info">
             </div>
              </div>

            <div class="col-sm-6  mt-2">
              <br>
                <h3>{{info.title}}</h3>
                <br>
                <p class="paragraph">{{info.description}}</p>
                
             </div>
         </div>
       
    </div>

   

</section>

</div>


</template>
<script>
import  products from "@/products.js";
export default {
    props:['id'],
    data() {
        return {
          infoProduct: [],
        }
    },
    mounted() {
        return this.infoProduct = products.filter(prod => prod.id == this.id);
    }
}
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;

}

.name-title {
  text-align: left;
  margin-top: 1%;
  margin-left: 7%;
}

.paragraph {
  width: 60%;
   height: 100px;
   margin: auto;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
}
</style>