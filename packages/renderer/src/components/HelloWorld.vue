<template>
  <h1>{{ msg }}</h1>

  <p class="mt-4">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    class="my-4 inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  @apply text-emerald-500;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
    },
  },
  setup() {
    const count = ref(0)

    return { count }
  },
})
</script>
