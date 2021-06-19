<template>
  <section
    class="p-8 h-screen overflow-scroll bg-gray-800 -mt-16 pt-16 text-white"
  >
    <div class="title">
      <h1 class="text-2xl font-bold mb-8 mt-24">
        Let's <span class="text-indigo-400">CREATE</span> something great.
      </h1>
    </div>
    <div
      class="absolute top-30 -left-10 w-56 sm:w-72 h-56 sm:h-72 circle-top rounded-full transform skew-y-12 animate-blob z-0 filter blur-xl"
    />
    <div
      class="absolute bottom-20 -right-0 w-64 sm:w-72 h-56 sm:h-72 circle-bottom rounded-full animate-blob animation-delay-4 z-0 filter blur-xl"
    />
    <div
      v-for="item in serviceList"
      :key="item"
      class="w-full h-96 border-8 border-black rounded-xl mb-12 glass relative"
    >
      <span class="w-1/3 h-1 bg-gray-300 rounded-lg flex items-center absolute left-1/3 bottom-1" />
      <span class="w-8 h-1 bg-gray-800 rounded-lg flex items-center absolute mt-0.5 right-3 -top-3" />
      <div class="grid grid-cols-2 grid-rows-3 justify-items-center gap-1 overflow-hidden">
        <!-- <div class="bg-gray-300  pt-4 pb-16 px-2 w-2/3 h-48 absolute top-0 left-0 z-0 circeClip" /> -->
        <h2 class="text-4xl font-medium z-10 mt-4 ml-4 col-span-2">
          {{ item }}
        </h2>
        <ul class="grid grid-cols-2 grid-rows-2 w-20 h-20 z-10">
          <li class="bg-blue-300 border-4 w-8 h-8 border-white rounded-xl" />
          <li class="bg-blue-900 border-4 w-8 h-8 border-white rounded-xl" />
          <li class="bg-green-200 border-4 w-8 h-8 border-white rounded-xl" />
          <li class="bg-green-900 border-4 w-8 h-8 border-white rounded-xl" />
        </ul>
        <p class="p-2">
          Unique and user friendly design.
        </p>
        <img
          src="src/assets/images/design.png"
          class="h-24 rounded-2xl m-1 shadow-lg"
        >
        <img
          src="src/assets/images/picture.png"
          class="h-24 rounded-2xl  mr-8 mt-1 shadow-lg"
        >
      </div>
    </div>
    <div class="">
      <!-- <div class="service">
        <div class="icon">
          <img
            src="src/assets/images/002.png"
            alt=""
          >
        </div>
        <h2>Devolopment</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
        repellendus, aut vitae numquam sit ullam temporibus. Ea, tempora
        perspiciatis?
      </div>
      <div class="service">
        <div class="icon">
          <img
            src="src/assets/images/003.png"
            alt=""
          >
        </div>
        <h2>SEO</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
        repellendus, aut vitae numquam sit ullam temporibus. Ea, tempora
        perspiciatis?
      </div>
      <div class="service">
        <div class="icon">
          <img
            src="src/assets/images/004.png"
            alt=""
          >
        </div>
        <h2>Marketing</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
        repellendus, aut vitae numquam sit ullam temporibus. Ea, tempora
        perspiciatis?
      </div>
      <div class="service">
        <div class="icon">
          <img
            src="src/assets/images/005.png"
            alt=""
          >
        </div>
        <h2>App Devolopment</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
        repellendus, aut vitae numquam sit ullam temporibus. Ea, tempora
        perspiciatis?
      </div>
      <div class="service">
        <div class="icon">
          <img
            src="src/assets/images/006.png"
            alt=""
          >
        </div>
        <h2>Error Fixing</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsum
        repellendus, aut vitae numquam sit ullam temporibus. Ea, tempora
        perspiciatis?
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const serviceList = ['Design', 'Devolopment', 'SEO', 'Marketing','App Devolopment', 'Error Fixing' ]
    return {serviceList};
  },
});
</script>

<style scoped>

.circle-top {
  background: radial-gradient(circle, transparent 40%, #6D5DD9 40%);
  border-radius: 100%;
}
.circle-bottom {
  background: radial-gradient(circle, transparent 40%, #2A4095 40%);
  border-radius: 100%;
}

.circeClip {
  clip-path: circle(50% at 26% 9%);
}
</style>
