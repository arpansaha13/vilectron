<template>
  <header class="py-8 lg:py-16">
    <TabGroup>
      <TabList class="mx-auto w-max flex space-x-6">
        <Tab as="template" v-for="tab in tabs" :key="tab.name" v-slot="{ selected }">
          <router-link
            :to="tab.to"
            :class="[
              'flex items-center transition-colors',
              selected ? 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-600' : 'text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100',
            ]"
          >
            <component
              :is="tab.icon"
              :class="[
                'mr-2 w-6 h-6 flex-shrink-0',
              ]"
            />
            <span class="inline-block">{{ tab.name }}</span>
          </router-link>
        </Tab>
      </TabList>
    </TabGroup>
  </header>
</template>

<script lang="ts">
// https://headlessui.dev/vue/tabs
import { TabGroup, TabList, Tab } from '@headlessui/vue'

// https://heroicons.com/
import { HomeIcon, ColorSwatchIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    TabGroup,
    TabList,
    Tab,
    HomeIcon,
    ColorSwatchIcon,
  },
  setup() {
    const tabs = [
      {
        to: '/',
        icon: HomeIcon,
        name: 'Home',
      },
      {
        to: '/theme',
        icon: ColorSwatchIcon,
        name: 'Theme',
      },
    ]

    return { tabs }
  },
})
</script>