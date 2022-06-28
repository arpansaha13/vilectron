<template>
  <router-view />
</template>

<script lang="ts">
import { toggle } from '~/composables/useDark'

export default defineComponent({
  setup() {
    // Use system theme preference
    const prefersDark = usePreferredDark()

    watch(prefersDark, () => {
      toggle(prefersDark.value)
    })
  },
})
</script>
