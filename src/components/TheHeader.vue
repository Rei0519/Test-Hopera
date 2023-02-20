<template>

<section>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color:#ffffff;">
  <div class="container-fluid">
   <router-link class="navbar-brand" to="/home" ></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0  mr-10">
         <li class="nav-item">
         <router-link class="nav-link" to="/home">Home</router-link>
        </li>
       
        <li class="nav-item">
         <router-link class="nav-link" to="/chiSiamo">Chi Siamo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prodotti">Prodotti</router-link>
        </li>
        <li class="nav-item">
             <router-link class="nav-link" to="/progetti">Progetti</router-link>
        </li>
        <li class="nav-item">
      <router-link class="nav-link" to="/contatti">Contatti</router-link>
        </li>
      </ul>
      <a href="#" ></a>
    </div>
  </div>
</nav>
</section>

</template>
<script>
export default {};
</script>
<style scoped>
.collapse{
  padding-right: 150px;
}
.navbar-brand {
  background-image: url("../assets/Hopera_Logo.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
margin-left: 80px;
  width: 80px;
  height: 48px;
  
}
@media only screen and (max-width: 768px) {
 
    .collapse{
  padding-right: unset;
}
.navbar-brand{
  margin-left: unset;
}
}
.nav-item{
  font-size: 100%;
}
.navbar {
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  position: fixed; 
  width:100%;
  z-index: 99;
}
.navbar-nav .nav-link {
  color: #000000;

}
@media screen and (min-width: 769px) {
  .btn {
    background-color: #000000;
    color: #ffffff;
    border-radius: 0;
    border-width: 2px;

    
      border: 2px solid #000000;
    } 
  }

@media screen and (max-width: 768px) {
  .btn {
    padding: 0;
    color: #000000;
  }
}
</style>