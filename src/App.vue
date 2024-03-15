<template>
  <div>
    <!-- Botón para activar el modal -->
    <button @click="toggleModal">Menu</button>

    <!-- Modal Dropdown -->
    <div v-if="isModalOpen" class="modal" @click.self="toggleModal">
      <nav class="modal-content">
        <router-link to="/" @click="toggleModal">Home</router-link> |
        <router-link to="/about" @click="toggleModal">About</router-link> |
        <router-link to="/services" @click="toggleModal">Services</router-link> |
        <router-link to="/gallery" @click="toggleModal">Gallery</router-link> |
        <router-link to="/contact" @click="toggleModal">Contact</router-link>
      </nav>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: rgb(85, 104, 85);
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #888;

  border-radius: 10px;
  position: relative; /* Puede ser útil si necesitas otros ajustes posicionales */
  top: 0; /* Alinea la parte superior del contenido con la parte superior del modal */
}

button {
  margin: 20px;
  font-size: 20px; /* Ajusta esto según necesites */
  font-family: 'Courier New', Courier, monospace;
  background-color: rgb(85, 104, 85);
  
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none; /* Elimina el subrayado */
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
