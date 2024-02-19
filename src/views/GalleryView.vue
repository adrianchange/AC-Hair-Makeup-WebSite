<template>
  <div class="container">
    <ul>
      <li v-for="categoria in categorias" :key="categoria.id">
        <router-link :to="{ name: 'category', params: { id: categoria.id }}">
          {{ categoria.nombre }}
        </router-link>
      </li>
    </ul>
  </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        categorias: [
          { id: 1, nombre: 'Brides' },
          { id: 2, nombre: 'Maids of Honour' },
          { id: 3, nombre: 'Guests' },
          { id: 4, nombre: 'Grooms' }
        ]
      };
    }
  }
  </script>

<style scoped>
 .container {
  background-image: url('https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/gpzdfeaeda91itulkwag');
  background-size: cover;
  /* Centra la imagen de fondo horizontal y verticalmente */
  background-position:center;
  /* Fija la imagen de fondo en la ventana gráfica, para que no se desplace con el contenido */
 
  height: 80vh;
  margin-right: 100px;
  margin-top: 30px;
  border-radius: 50px;
 }
  

</style>
