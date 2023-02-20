<template >

<div class="col-sm-4">
<div class="card">
  <div class="card-body"> 
           <img :src="img" :alt="info">
           </div>
           <div class="card-footer">
      <br>
<router-link :to="'/prodotti/' + id " ><button class="button" >{{info}}</button></router-link>
           </div>
                
</div>
</div>

    
</template>
<script>
export default {
 props: ['name','img','info','id']
    
}
</script>
<style scoped>

.card-footer {
    
    background-color: white; ;
    border-top: none;
    padding: 3;
}

.button {
  background-color: #333333; 
  color: white;
  font-size: 20px;
  text-align: center;
  width: 210px;
  letter-spacing: 3px;


  text-align: center;
  border-left-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;

}
img{
    max-width: 50%;
    max-height: 50%;
}
</style>