<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>

    <p class="mt-4">
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://www.electronjs.org/docs/latest" target="_blank">
        Electron Documentation
      </a>
      |
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <Button @click="count.count++"> Count is: {{ count.count }} </Button>
    <p>
      Edit
      <code class="text-sm">components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script lang="ts">
import { useCount } from '~/stores/count'

export default defineComponent({
  props: {
    msg: {
      type: String,
    },
  },
  setup() {
    const count = useCount()

    return { count }
  },
})
</script>

<style scoped>
a {
  @apply text-emerald-600 dark:text-emerald-500;
}
</style>
