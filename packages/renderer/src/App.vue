<template>
  <img alt="Vue logo" src="/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => { console.log('mounted') })
  },
})
</script>
