<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center dark:text-gray-50 dark:bg-gray-800">
    <div class="mx-auto max-w-lg grid grid-cols-3 gap-8">
      <img v-for="img in imgs" :key="img.src" :src="img.src" :alt="img.alt" />
    </div>
    <HelloWorld class="mt-4" msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue' // Use ~/ alias to refer to the src directory

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => { console.log('mounted') })

    const imgs = [
      { src: '/electron.png', alt: 'Electron logo', },
      { src: '/vue.png', alt: 'Vue logo', },
      { src: '/vite.svg', alt: 'Vite logo', },
    ]

    return { imgs }
  },
})
</script>
