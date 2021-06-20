<template>
  <Popover v-slot="{ open }">
    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        class="relative flex items-center justify-between sm:h-10"
        aria-label="Global"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <router-link
                class="text-2xl font-bold text-indigo-500"
                to="/"
              >
                Caraseli  Agency
              </router-link>
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Open main menu</span>
                Menu
              </PopoverButton>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="{name : item.name}"
            class="font-medium text-gray-500 hover:text-gray-900"
          >
            {{ item.name }}
          </router-link>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-20"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <router-link
                class="text-2xl font-bold text-indigo-500"
                to="/"
              >
                Caraseli  Agency
              </router-link>
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                Close
              </PopoverButton>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="{name : item.name}"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              @click="open = !open"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const navigation = [
  { name: "Home" },
  { name: "Work" },
  { name: "Services" },
  { name: "Contact" },
  { name: "Feedback" },
];
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

<style scoped></style>
