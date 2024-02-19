<template>
  <div class="container">
    <h1>Our Services</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(service, index) in services" :key="index">
        <div class="card">
          <img :src="service.image" class="card-img-top" alt="Service Image">
          <div class="card-body">
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          image: 'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/omdnzzuxweqrh0kpzwus',
          title: 'Wedding pack: Bride and Groom{Trial Hair, Skincare and Make-Up + Wedding day Hair , Skincare and Make-Up}',
          description: 'Total: 570 euros',
        },
        {
          image: 'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/zisq4nqfleuxiduplzna',
          title: 'Bride pack: {Trial and Wedding day Hair and Make-Up }',
          description: 'Total: 420 euros'
        },
        {
          image:'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/zisq4nqfleuxiduplzna',
          title: 'Guests Hair{Depending on the length and the complexity of the service}',
          description: 'Starting from 50 euros'
        },
        {
          image:'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/zisq4nqfleuxiduplzna',
          title: 'Guests Make-Up{Depending on the complexity of the service}',
          description: 'Starting from 60 euros'
        },
        {
          image:'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/zisq4nqfleuxiduplzna',
          title: 'Make-Up classes{One to one}',
          description: 'Starting 100 euros'
        },
        {
          image: 'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/zisq4nqfleuxiduplzna',
          title: 'Make-Up classes(Group 4/6 persons)',
          description: 'Starting from 350 euros'
        },
        // Agrega las otras cards aquí...
      ]
    };
  }
}
</script>

<style scoped>
/* Aquí puedes agregar estilos personalizados para las cards si lo deseas */
</style>