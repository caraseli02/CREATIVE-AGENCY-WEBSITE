<template>
  <form
    class="my-4"
    @submit.prevent="createTask"
  >
    <div class="mx-auto grid grid-cols-6 gap-6 bg-white p-2 rounded-md shadow-md">
      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
        <label
          for="city"
          class="block text-sm font-medium text-gray-700"
        >Title</label>
        <input
          id="city"
          v-model="title"
          required
          type="text"
          name="city"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
      </div>
      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
        <label
          for="state"
          class="block text-sm font-medium text-gray-700"
        >Description (optional)</label>
        <input
          id="state"
          v-model="description"
          type="text"
          name="state"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
      </div>
      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
        <label
          for="postal_code"
          class="block text-sm font-medium text-gray-700"
        >Tag (optional)</label>
        <input
          id="postal_code"
          v-model="tag"
          type="text"
          name="postal_code"
          autocomplete="postal-code"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '../../store'
import { TodoItem } from '../../store/state'
import { MutationType } from '../../store/mutations'
export default defineComponent({
  setup() {
    const title = ref('')
    const description = ref('')
    const tag = ref('')
    const store = useStore()
    const createTask = () => {
      if (title.value === '') return
      const item: TodoItem = {
        id: Date.now(),
        title: title.value,
        description: description.value,
        tag: tag.value,
        completed: false,
      }
      store.commit(MutationType.CreateItem, item)
      title.value = ''
      description.value = ''
      tag.value = ''
    }
    return { createTask, title, description, tag }
  },
})
</script>