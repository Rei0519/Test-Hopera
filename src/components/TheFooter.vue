<template>
<footer class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<br>
<a href="#" class="fa fa-youtube"></a>
<a href="#" class="fa fa-instagram"></a>
<a href="#" class="fa fa-facebook"></a>

<p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iusto, mollitia distinctio harum nulla suscipit</p>
<br>

</footer>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin-top: 5rem;
  border-top: 1px solid #000;
  
}
.fa {
  padding: 10px;
  font-size: 20px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin: 5px 5px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #000000;
  color: white;
}

.fa-youtube {
  background: #000000;
  color: white;
}

.fa-instagram {
  background: #000000;
  color: rgb(255, 255, 255);
}
.paragraph {
margin-top: 1rem;
}
</style>