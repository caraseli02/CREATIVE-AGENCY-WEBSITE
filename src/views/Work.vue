<template>
  <section class="mt-24 px-4 content-container overflow-hidden">
    <div class="">
      <h1 class="mb-12 font-medium italic text-8xl">
        Works
      </h1>
    </div>
    <div
      class="absolute top-25 -left-0 w-56 sm:w-72 h-56 sm:h-72 bg-purple-300 rounded-full transform skew-y-12  mix-blend-multiply filter blur-xl"
    />
    <div
      class="absolute bottom-0 -right-0 w-64 sm:w-72 h-56 sm:h-72 bg-yellow-300 rounded-full transform -skew-y-12 mix-blend-multiply filter blur-xl"
    />
    <div class="-mt-10 w-sceen glass overflow-scroll h-full shadow-xl sm:shadow-none z-0 mx-auto sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <div
        v-for="n in 15"
        :key="n"
        class="relative md:m-2"
      >
        <img
          class="mt-8 w-3/4 mx-auto rounded-t-lg"
          :src="`src/assets/images/portfolio-item${n + 1}.jpg`"
          alt=""
        >

        <div class="w-3/4 mx-auto bg-gray-300 rounded-lg text-center ml-2">
          <h3 class="py-4 font-medium text-md mr-2">
            Lorem ipsum dolor sit amet.
          </h3>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              class="w-2/4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-50 bg-indigo-700 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 absolute bottom-12 right-2"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-2 h-64" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    
  },
  data() {
    return {
      imgPath: "src/assets/images/portfolio-item1.jpg",
    };
  },
});
</script>

<style scoped>
</style>
