<template>
    <div class="container">
      <!-- Botón desplegable y formulario -->
      <div class="content">
        <div class="dropdown">
          <button class="dropbtn" @click="toggleDropdown">Would you like to know more ?</button>
          <div class="dropdown-content" :class="{ 'show': isDropdownOpen }">
            <form class="form" action="/submit" method="post" v-if="isDropdownOpen">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required><br>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required><br>
              <label for="subject">Subject:</label>
              <input type="text" id="subject" name="subject"><br>
              <label for="message">Your message:</label>
              <textarea id="message" name="message"></textarea><br>
              <button class="button" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Botón para llamar -->
      <div class="call-us-btn" @click="togglePhoneNumber">
        <i class="bi bi-telephone-fill"></i> {{ phoneNumber ? 'Gracias' : 'Call Us' }}
      </div>
  
      <!-- Información de contacto (se mostrará después de hacer clic en "Call Us") -->
      <div v-if="phoneNumber" class="contact-info">
        <p><i class="bi bi-telephone-fill"></i> {{ phoneNumber }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        isDropdownOpen: false,
        phoneNumber: null
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
        // Ocultar el número de teléfono si el formulario está abierto
        if (this.isDropdownOpen) {
          this.phoneNumber = null;
        }
      },
      togglePhoneNumber() {
        // Mostrar u ocultar el número de teléfono al hacer clic en "Call Us"
        this.phoneNumber = this.phoneNumber ? null : '+34627255152';
        // Ocultar el formulario si el número de teléfono está abierto
        if (this.phoneNumber) {
          this.isDropdownOpen = false;
        }
      }
    }
  }
  </script>
  
  
  <style scoped>
.container {
  background-image: url('https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/cyslyp0wyqvhjixrzfbp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  border-radius: 50px;
}
.content {
  align-self: flex-end;
  font-family: 'Courier New', Courier, monospace;
}
  
  /* Estilo del botón "Call Us" */
  .call-us-btn {
  background-color: #42b983;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50px;
  font-family: 'Courier New', Courier, monospace;
}
  
.call-us-btn:hover {
  background-color: #2a9055;
}
  
  /* Estilo del contenido de contacto */
  .contact-info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 50px;
  }
  
  /* Estilo del formulario desplegable */
  .dropdown-content {
    border-radius: 50px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .form {
    background-color:transparent;


  }
  
  /* Estilo del botón del formulario */
  .button {
    background-color: #42b983;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 50px;
  }
  .dropbtn {
    border-radius: 50px;
    background-color: transparent;
  }
  
  .button:hover {
    background-color: #2a9055;
  }
  
  /* Estilos para el icono de llamada */
  .bi-telephone-fill {
    font-size: 15px;
    border-radius: 50px;  }
  </style>