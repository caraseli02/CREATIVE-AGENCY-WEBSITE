<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl text-center p-2 font-bold">
      Help us to improve this website
    </h1>

    <div v-if="loading">
      <div class="p-6">
        <h2 class="bg-gray-400 animate-pulse h-4 w-1/4 mb-2" />
        <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500" />
        <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
        <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400" />
        <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400" />
        <div class="flex items-center flex-wrap ">
          <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0" />
          <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1" />
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center w-1/2 mx-auto rounded py-1 mt-2 text-gray-200 bg-purple-900">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import NewItem from '../components/todo/NewItem.vue'
import TodoList from '../components/todo/TodoList.vue'
import { useStore } from '../store'
import { ActionTypes } from '../store/actions'
export default defineComponent({
  components: { TodoList, NewItem },
  setup() {
    const store = useStore()
    const loading = computed(() => store.state.loading)
    onMounted(() => store.dispatch(ActionTypes.GetTodoItems))
    const completedCount = computed(() => store.getters.completedCount)
    const totalCount = computed(() => store.getters.totalCount)
    return { loading, completedCount, totalCount }
  },
})
</script>