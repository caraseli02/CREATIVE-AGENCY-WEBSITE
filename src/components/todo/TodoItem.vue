<template>
  <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4">
    <div class="flex items-center justify-between">
      <span class="text-sm font-light text-gray-600 dark:text-gray-400">{{ createdDate }}</span>
      <a
        v-if="tag.length > 0"
        class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
      >{{ tag }}</a>
    </div>

    <div class="mt-2">
      <a
        href="#"
        class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
      >{{ title }}</a>
      <p
        v-if="description.length > 0"
        class="mt-2 text-gray-600 dark:text-gray-300"
      >
        {{ description }}
      </p>
    </div>
        
    <div class="flex items-center justify-between mt-4">
      <span
        class="p-1 rounded text-gray-100"
        :class="completed ? 'text-green-500' : 'bg-red-500'"
      >{{ completed ? 'Completed' : 'In Process' }}</span>

      <div class="flex items-center" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '../../store'
import { MutationType } from '../../store/mutations'
export default defineComponent({
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  setup(props) {
    const store = useStore()
    const createdDate = computed(() => {
      return new Date(props.id).toLocaleDateString()
    })
    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        completed: !props.completed,
      })
    }
    return { toggleCompletion,createdDate }
  },
})
</script>