<template>
  <div
    id="hamburger-wrapper"
    :class="{ open: menuState }"
    @click="menuState = !menuState"
  >
    <p class="burger" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menuState } from ".";

export default defineComponent({
  setup() {
    return {
      menuState,
    };
  },
});
</script>

<style scoped>
#hamburger-wrapper {
  background-color: white;
  display: flex;
  align-items: center;
  width: 40px;
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 20;
}

.burger {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  color: red;
}

.burger,
.burger:before,
.burger:after {
  padding: 0;
  background-color: black;
  width: 80%;
  height: 4px;
  border-radius: 15px;
  transition: margin 0.1s 0.2s, transform 0.2s;
  border-color: red;
}

.burger:before {
  margin: 0;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
}

.burger:after {
  margin: 0;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
}

.burger:before {
  margin-top: -12px;
}

.burger:after {
  margin-top: 12px;
}

/* STYLES FOR OUR BURGER WHEN THE MENU OPENS */
.open .burger {
  transform: rotate(45deg);
}

.open .burger,
.open .burger:before,
.open .burger:after {
  transition: margin 0.2s, transform 0.1s 0.2s;
  width: 100%;
}

.open .burger:before,
.open .burger:after {
  margin-top: 0;
}

.open .burger:after {
  transform: rotate(-90deg);
}
</style>
