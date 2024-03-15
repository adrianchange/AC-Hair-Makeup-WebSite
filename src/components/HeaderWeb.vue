<template>
  <div class="header-wrapper">
    <!-- Eliminamos la barra de navegación de aquí para evitar duplicaciones, si es necesario -->
    <h1>{{ msg }}</h1>
    <div class="content-container">
      <ul class="footer">
        <li><a href="about">About</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="gallery">Gallery</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderWeb',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header-wrapper {
  text-align: center;
  width: 100vw; /* Ancho de la vista completa */
  height: 100vh; /* Altura de la vista completa */
  background-image: url('https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/jhxazxqbjcnujhajfrof');
  background-size: contain; /* Cambio clave para que la imagen se ajuste completamente */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita la repetición de la imagen */
  margin: 0; /* Elimina cualquier margen */
  padding: 0; /* Elimina cualquier padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}

.main-nav {
  padding: 20px;
  width: 100%;
  background-color: rgba(0,0,0,0.5); /* Semi-transparente para mejorar la visibilidad del texto */
  color: white; /* Cambia el color del texto para mejorar el contraste */
}

.main-nav a {
  color: white; /* Cambia el color de los enlaces para que sean visibles sobre el fondo */
  text-decoration: none;
  margin: 0 10px;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}

.content-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul.footer {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

ul.footer li {
  display: inline;
}

ul.footer a {
  color: white; /* Cambia el color para mejorar el contraste */
  text-decoration: none;
}
</style>


