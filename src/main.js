import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
    cloud_name: 'da5uckicu',
    api_key: '665297857772432'
  });
  


createApp(App).use(router).provide('cloudinary', cloudinary).mount('#app')
