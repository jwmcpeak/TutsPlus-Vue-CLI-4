<template>
  <div class="about">
    <h1>Guitars</h1>

    <div
      class="guitar-item"
      v-for="guitar in guitars" :key="guitar.src"
    >
      <h3>{{guitar.name}}</h3>
      <img :src="guitar.src" alt="">
    </div>


  </div>
</template>
<script>
export default {
  created() {
    fetch('./guitars.json').then(res => res.json()).then(data => {
      this.guitars = data;
    });
  },
  data() {
    return {
      guitars: []
    }
  }
}
</script>