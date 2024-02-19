<template>
    <div class="category">
      <h1>{{ categoryName }}</h1>
      <router-link to="/gallery" class="back-button">Gallery</router-link>
      <div class="card-container">
        <div class="card" v-for="imagen in imagenes" :key="imagen.id" @mouseover="hoveredId = imagen.id" @mouseleave="hoveredId = null">
          <img :src="imagen.url" alt="Imagen" class="card-img" :class="{ 'zoom': hoveredId === imagen.id }">
          <div class="card-body">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let categoryId = ref('');
let categoryName = ref('');
let imagenes = ref([]);
let hoveredId = ref(null);

onMounted(() => {
  const route = useRoute();
  categoryId.value = route.params.id;

  // Set category name based on category ID
  switch (categoryId.value) {
    case '1':
      categoryName.value = '';
      break;
    case '2':
      categoryName.value = 'Maids of Honour';
      break;
    case '3':
      categoryName.value = 'Guests';
      break;
    case '4':
      categoryName.value = 'Grooms';
      break;
    default:
      break;
  }

  // Simulate loading images for each category
  switch (categoryId.value) {
    case '1': // Brides
      imagenes.value = [
        { id: 1, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/vrvgy9hcufxk59bnyvyr' },
        { id: 2, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/vpvstmpaqyrvsfmeparr' },
        { id: 3, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/yo68fldeszsp2bko8vh3' },
        { id: 4, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/c6lp8hawv6kqq3cgb8lp' },
        { id: 5, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/qalf1jpefqixrl6ytfpv' },
        { id: 6, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/fj8uodglry6hjqdvl2tt' },
        { id: 7, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/otdtjvqtdlbk9opqqmqe' },
        { id: 8, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1400,w_1000/MyWebsite/oj6yo5lvegdp0nxrtoy7.jpg' },
        { id: 9, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1200,w_1000/MyWebsite/fbzst1imye35q26xr2pf' },
        { id: 10, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1200,w_1000/MyWebsite/jhxazxqbjcnujhajfrof' },
        { id: 11, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1200,w_1000/MyWebsite/qnyywg2ztdmywpfedgxv' },
        { id: 12, url: 'https://res.cloudinary.com/da5uckicu/image/upload/c_scale,h_1200,w_1000/MyWebsite/bhdqwmnqjt9fk3rn5f0g' },
        // Add more images here...
      ];
      break;
    case '2': // Maids of Honour
      // Load images for Maids of Honour category
      break;
    case '3': // Guests
      // Load images for Guests category
      break;
    case '4': // Grooms
      // Load images for Grooms category
      break;
    default:
      break;
  }
});
</script>
  
  <style scoped>
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
.back-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #800024b6;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.back-button:hover {
  background-color: green;
}
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    width: 300px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow:visible; /* Para evitar que la imagen se salga del contenedor */
    transition: transform 0.3s ease; /* Transición suave para el efecto de zoom */
  }
  
  .card-img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  
  .card-body {
    padding: 0px;
  }
  
  .zoom {
    transform: scale(1.1); /* Ajusta el nivel de zoom deseado */
  }
  </style>

  
  
  
  
  