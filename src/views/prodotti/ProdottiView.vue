<template>
  <div class="container-fluid">
    <section>
      <div class="col-sm-12 col-xl-12 col-lg-12">
      <div class="textOnImg" data-aos="zoom-out" data-aos-duration="1000" >
        <img class="hero-image" alt="" src="../../assets/photoProdottiHeader.png" />
        <div class="bottom-left">Loren <strong>ipsum</strong> dolor</div>
        <div class="bottom-right"><img class="home" alt="" width="130%" height="auto" src="../../assets/serramenti_Tavola.svg" /></div>
      </div>
      <br>
      <br>
      <div class="col-sm-12">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          iusto,
        </h1>
        <br>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque non
          quam ex quaerat, suscipit ipsum ullam debitis autem omnis maiores
          eligendi vel impedit necessitatibus fuga. Iste asperiores quas minima
          voluptas?
        </p>
      </div>
      <br>
      </div>

    </section>
    <section class="products">
      <div class="col-sm-12 col-lg-12 col-xl-12 row d-flex justify-content-center " data-aos="fade-up" data-aos-duration="1500">
       
<single-product
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :img="product.image"
          :info="product.info"
          :id="product.id"
        ></single-product>
        
      </div>
    </section>
  </div>
</template>
<script>
import SingleProduct from "@/components/SingleProduct.vue";
import  products from "@/products.js";

export default {
  components: { SingleProduct },
  data() {
    return {
     products : products,
  }
},
}
</script>

<style scoped>
.products{
    overflow-x: hidden;
}


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
