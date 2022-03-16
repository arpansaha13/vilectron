<template>
  <main class="py-16 lg:py-20 mx-auto max-w-7xl">
    <div class="flex flex-col items-center space-y-6">
      Current theme: {{ isDark ? 'Dark' : 'Light' }}
      <Button @click="toggleDark">
        Toggle theme
      </Button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '~/components/Button.vue'
import { isDark, toggle } from '~/composables/useDark'

export default defineComponent({
  components: {
    Button,
  },
  setup() {
    function toggleDark() {
      toggle()
    }

    return {
      isDark,
      toggleDark,
    }
  },
})
</script>
