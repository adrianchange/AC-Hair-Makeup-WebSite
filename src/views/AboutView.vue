<template>
  <div class="container">
    <h1>About me</h1>
    <div class="row">
      <div class="col-12 mb-4" v-for="(card, index) in cards" :key="index">
        <div class="card custom-card">
          <img :src="card.image" class="card-img-top" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      cards: [
        {
          image: 'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/hiyeebyaq3nkxmu3nplc',
          title: 'Hair and Make-Up artistry ',
          description: 'With over more than 15 years in the Beauty Industry I enjoy so much working with people and is so challenging for me discovering  their better version using make-up and hair artistry. For me is very important to get to know better the person before starting any service. I try to use as much as I can natural products , natural looks and before make-Up I treat specially the skin since this is primordial for the make-up to look natural and fresh'
        },
        {
          image: 'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/pwui4ynz9ms0djpowsyy',
          title: 'Weddings',
          description: 'I like working with brides in their wedding day ; I am aware of the importance of this day for each bride and this why I try to make the most of it with my beauty skills but also my patience and dedication '
        },
        {
          image: 'https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/ct81hhjm4s6vdx8bcjzw',
          title: 'Movies or TV series',
          description: 'From now and then I get the chance to work with models, actresses and actors  '
        },
        // Agrega las otras cards aquí...
      ]
    };
  }
}
</script>

<style scoped>
/* Estilos personalizados para las cards */
.container {
  display: inline-block;
 }

.custom-card {
  max-width: 600px; /* Ajusta el valor según lo que desees */
  margin: auto; /* Centra los cards horizontalmente */
  border-radius: 50px;
}
.card-img-top {
  width: 100%;
  height:auto;
  border-radius: 50px;
}
</style>

