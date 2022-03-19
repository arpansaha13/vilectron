<template>
  <main class="py-16 lg:py-20 mx-auto max-w-7xl">
    <div class="mx-auto max-w-lg grid grid-cols-3 gap-8">
      <img v-for="img in imgs" :key="img.src" :src="img.src" :alt="img.alt" />
    </div>
    <HelloWorld class="mt-4" msg="Hello Electron + Vue 3 + Vite" />
  </main>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const imgs = [
      { src: './electron.png', alt: 'Electron logo', },
      { src: './vue.png', alt: 'Vue logo', },
      { src: './vite.svg', alt: 'Vite logo', },
    ]

    return { imgs }
  },
})
</script>
