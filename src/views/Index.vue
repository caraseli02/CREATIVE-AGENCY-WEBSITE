<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <article class="content-container mt-6 block lg:flex lg:items-center">
    <transition
      appear
      name="slide-right"
    >
      <section
        class="sm:text-center sm:mt-16 lg:text-left w-screen p-3 h-1/2 lg:w-1/2 lg:px-16"
      >
        <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span class="inline">Turn your Dreams into </span>
          {{ " " }}
          <span class="text-indigo-600 inline">Reality</span>
        </h1>
        <p
          class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <router-link
              to="/services"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Discover More
            </router-link>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <router-link
              to="/work"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Live demos
            </router-link>
          </div>
        </div>
      </section>
    </transition>
    <section
      class="relative w-full max-w-lg mt-20 gap-4 px-4 flex flex-wrap mx-auto"
    >
      <div
        class="absolute top-0 -left-0 w-56 sm:w-72 h-56 sm:h-72 bg-purple-300 rounded-full transform skew-y-12 filter blur-xl mix-blend-multiply animate-blob"
      />
      <div
        class="absolute top-0 -right-0 w-64 sm:w-72 h-56 sm:h-72 bg-yellow-300 rounded-full transform -skew-y-12 filter blur-xl mix-blend-multiply animate-blob animation-delay-4"
      />
      <div
        class="glass flex justify-around items-center w-72 h-48 mx-auto border-8 border-black rounded-lg font-medium"
      >
        <h3 class="w-48 glass p-2 ml-2 sm:ml-0 rounded-lg sm:text-2xl">
          Professional<br>
          Web Solutions
        </h3>
        <transition
          appear
          name="slide-left"
        >
          <img
            src="src/assets/images/landingIcon1.svg"
            class="w-36 h-48 mr-4 -mt-48 sm:absolute sm:-left-32 icon1"
          >
        </transition>
      </div>
      <transition
        appear
        name="slide-right"
      >
        <div
          class="glass absolute w-10 bottom-0 h-16 mx-auto border-2 border-gray-800 rounded-lg self-center"
        >
          <span class="block w-6 mx-auto rounded-b-2xl h-0.5 bg-gray-800" />
          <span class="block mt-1 w-6 mx-auto h-2 rounded-full bg-gray-800" />
          <span class="block mt-2 w-6 mx-auto rounded-b-2xl h-0.5 bg-gray-800" />
          <span
            class="block mt-1 w-6 mx-auto rounded-b-2xl h-0.5 bg-indigo-600"
          />
          <span class="block mt-2 w-6 mx-auto rounded-sm h-3 bg-indigo-500" />
        </div>
      </transition>
      <transition
        appear
        name="slide-left"
      >
        <div
          class="glass absolute mr-4 mt-8 bottom-0 right-0 w-36 h-24 mx-auto border-4 border-gray-900 rounded-lg grid grid-cols-2 font-medium bg-white sm:w-48 sm:h-36 sm:-top-32"
        >
          <h4 class="text-sm rounded-lg p-2 w-32 ml-1 sm:text-lg">
            Creative & Unique
          </h4>
          <img
            src="src/assets/images/landingIcon2.svg"
            class="absolute top-0 sm:top-8 -right-0 w-56 h-48"
          >
        </div>
      </transition>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {
      heroImg: "src/assets/images/home-img.jpg",
    };
  },
});
</script>

<style scoped></style>
