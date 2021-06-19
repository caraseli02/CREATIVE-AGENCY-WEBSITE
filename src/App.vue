<template>
  <div class="sizer">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition
        name="slide-right"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/Navigation/NavBar.vue";

export default defineComponent({
  components: { NavBar },
});
</script>

<style>
/* BASE STYLES*/

html,
body {
  font-family: "Poppins", sans-serif;
  color: #111;
}

@media screen and (min-width: 1600px) {
  body {
    background: rgb(102,166,255);
background: linear-gradient(90deg, rgba(102,166,255,1) 0%, rgba(250,250,250,1) 15%, rgba(250,250,250,1) 85%, rgba(102,166,255,1) 100%);
  }
}

a {
  text-decoration: none;
}

.sizer{
  max-width: 1366px;
  margin: 0 auto;
  
}

/*HOMEPAGE*/
.home-content {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 10px;
  position: relative;
  z-index: 10;
  max-width: 600px;
}

.home-img {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 110%;
}

.index__title {
  line-height: 40px;
}

.index__title > span {
  color: red;
}

/*SERVICES PAGE*/

.services {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.services .service {
  padding: 30px;
}

.services .service:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.services .service h2 {
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
  color: var(--secondary-color);
}

.services .service .icon img {
  max-width: 100px;
}

/*WORK PAGE */

.portfolio {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.portfolio .item {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 5px;
}

.portfolio .item img {
  width: 100%;
  height: 100%;
}

.portfolio .item .action {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
}

.portfolio .item:hover .action {
  opacity: 1;
}

.portfolio .item .action a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 15px;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-left-enter-active {
  transition: all 0.5s ease-out, 1.3s;
  animation-delay: 2.5s;
}

.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-right-enter-active {
  transition: all 0.5s ease-out;
}

.slide-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
