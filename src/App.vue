<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => { console.log('mounted') })
  },
}
</script>
