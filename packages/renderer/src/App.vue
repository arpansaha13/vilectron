<template>
  <div class="w-screen min-h-screen dark:text-gray-50 dark:bg-gray-800">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
  },
  setup() {
    onMounted(() => { console.log('mounted') })
  },
})
</script>
