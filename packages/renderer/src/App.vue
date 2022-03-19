<template>
  <div class="w-full min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-50 transition-colors">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
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
