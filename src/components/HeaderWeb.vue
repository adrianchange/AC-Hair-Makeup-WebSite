<template>
   <h1>{{ msg }}</h1>
  <div class="container">
    <ul class="footer">
      <li><a href="about">About</a></li>
      <li><a href="services">Services</a></li>
      <li><a href="gallery">Gallery</a></li>
      <li><a href="contact">Contact</a></li>
    </ul>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #800024b6;
}
.container {
  background-image: url('https://res.cloudinary.com/da5uckicu/image/upload/MyWebsite/jhxazxqbjcnujhajfrof');
  background-size:cover;
  background-position:center;
  height: 60vh;
  border-radius: 50px;
  max-width: 700px;
  margin-bottom: 200px;


}


</style>
