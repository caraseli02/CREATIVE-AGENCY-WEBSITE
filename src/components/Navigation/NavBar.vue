<template>
  <header>
    <h4 class="logo">
      Caraseli Agency
    </h4>
    <Burger />
    <nav
      :class="{ active: menuState }"
      class="navigation"
    >
      <ul>
        <li
          v-for="link in links"
          :key="link"
          
          @click="menuState = !menuState"
        >
          <router-link
            :class="$route.name === link ? 'activeLink' : ''"
            :to="{ name: link }"
          >
            {{ link }}
          </router-link>
        </li>
      </ul>
      <div class="social-bar">
        <ul>
          <li>
            <a href="https://facebook.com">
              <img
                src="images/facebook.png"
                target="_blank"
                alt=""
              >
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img
                src="images/twitter.png"
                target="_blank"
                alt=""
              >
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img
                src="images/instagram.png"
                target="_blank"
                alt=""
              >
            </a>
          </li>
        </ul>
        <a
          href="mailto:you@mail.com"
          class="email-icon"
        >
          <img
            src="images/email.png"
            alt=""
          >
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menuState } from ".";
import Burger from "./Burger.vue";

export default defineComponent({
  components: {
    Burger,
  },
  setup() {
    return {
      menuState,
    };
  },
  data() {
    return {
      links: ["Home", "Work", "Services", "Contact"],
    };
  },
});
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  margin-left: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  z-index: 20;
}
/*  TOOGLE */
.toggle {
  position: fixed;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: var(--primary-color) url(/images/menu.png);
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 20;
  cursor: pointer;
}

.toggle.active {
  background: var(--primary-color) url(/images/close.png);
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
}

/*NAVIGATION*/
.navigation {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 20%;
  background-color: #fff;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
}

.navigation.active {
  left: 0;
  opacity: 0.9;
  visibility: visible;
  height: 100%;
}

.navigation ul {
  position: relative;
}

.navigation ul li {
  position: relative;
  list-style: none;
  text-align: center;
  -webkit-animation: fadeInRight 0.5s ease forwards;
  animation: fadeInRight 0.5s ease forwards;
  -webkit-animation-delay: 0.35s;
  animation-delay: 0.35s;
}

.navigation .actualRoute {
  font-size: 2.2rem;
  color: #111;
  text-decoration: none;
  font-weight: 300;
  position: relative;
  font-weight: bold;
  color: red;
}

.navigation ul li a {
  font-size: 2.2rem;
  text-decoration: none;
  font-weight: 300;
}

.navigation ul li a:hover {
  color: var(--primary-color);
}

.navigation .social-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation .social-bar {
  display: inline-block;
  transform: scale(0.5);
}

.navigation .email-icon {
  position: absolute;
  bottom: 20px;
  transform: scale(0.5);
}

.activeLink {
  color: red;
}
</style>
