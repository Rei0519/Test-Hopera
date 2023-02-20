<template>
    <div class="textOnImg">
      <img class="image" src="../assets/photoContattiHeader.png"/>
       <div class="bottom-left ">Loren <strong>ipsum</strong> dolor</div>
    </div>

<section id="contact">
  
  <h1 class="section-header">Contatto</h1>
  
  <div class="contact-wrapper">
  
  <!-- Left contact page --> 
    
    <form  class="form-horizontal"  ref="form" @submit.prevent="sendEmail" >
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" name="user_name"  placeholder="Nome Cognome"  required>
        </div>
      </div>
<br>
      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" name="user_email" placeholder="E-mail"  required>
        </div>
      </div>
      <br>

      <textarea class="form-control" rows="7" placeholder="Mesaggio" name="message"   required></textarea>
      
       <button class="btn btn-primary send-button"  type="submit" >
        <div class="alt-send-button">
              <input type="submit" value="Send">
          <!-- <i class="fa fa-paper-plane"></i><span class="send-text">Invia</span> -->
        </div>
      
      </button>  
       
    </form>
    
  <!-- Left contact page --> 
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Citta, Stato</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">email@email.com</a></span></i></li>
          
        </ul>

        <hr>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  

</template> 


<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
     console.log(this.$refs.form);
      emailjs.sendForm('service_xcitbbn', 'template_hltgqjl', this.$refs.form, 'jo7XVPPNnzAQIuDkr')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
<style scoped>

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

body {
  margin: 0;
  padding: 0;
  background-color: #000;
  padding-bottom: 100px;
}

#contact {
  width: 100%;
  height: 100%;
  
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 200 40px 'Oswald', sans-serif;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-family: 'heebo';
  font-weight: 400;
  border: 1px solid black;
  padding: 20px;
  
}

.form-control, 
textarea {
  max-width: 400px;

  color: rgb(0, 0, 0);
  letter-spacing: 1px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 100%;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 300px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>