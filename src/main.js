import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.css";
import AOS from "aos";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);


app.AOS = new AOS.init({ disable: "phone" });
app.use(router);
app.mount("#app");
