<template>
  <section
    class="wrapper"
    data-barba="container"
    data-barba-namespace="home"
  >
    <div class="title">
      <h1>Some of our finest work</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sint porro
        et! Sint corrupti quibusdam rem quae ab officia ipsum commodi laudantium
        at. Nesciunt omnis suscipit soluta placeat quaerat, fugiat repellendus,
        ab rerum excepturi laboriosam nam, doloribus voluptate laudantium
        cupiditate pariatur fuga. Voluptas laboriosam voluptatibus maxime
        excepturi impedit expedita ipsam.
      </p>
    </div>
    <div class="portfolio">
      <div
        v-for="n in 15"
        :key="n"
        class="item"
      >
        <img
          :src="`src/assets/images/portfolio-item${n + 1}.jpg`"
          alt=""
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      imgPath: 'src/assets/images/portfolio-item1.jpg',
    }
  },
});
</script>

<style scoped></style>
