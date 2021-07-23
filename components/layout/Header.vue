<template>
  <header
    class="
      bg-gray-800
      py-4
      px-4
      flex
      justify-between
      fixed
      w-full
      bg-opacity-20
      text-white
    "
  >
    <!-- full nav bar -->
    <nav v-if="isLarge" class="w-1/3 flex flex-col justify-between">
      <div
        id="external-links"
        class="flex justify-evenly justify-self-end mb-2"
      >
        <div class="w-1/3"></div>
        <font-awesome-icon :icon="['fab', 'youtube']" class="w-7" />
        <font-awesome-icon :icon="['fab', 'linkedIn']" class="w-7" />
        <font-awesome-icon :icon="['fab', 'spotify']" class="w-7" />
        <font-awesome-icon :icon="['fab', 'github']" class="w-7" />
      </div>
      <div id="routes" class="flex justify-evenly">
        <NavItem path="/" label="Home" />
        <NavItem path="/" :label="JSON.stringify(width)" />
        <NavItem path="/about" label="About" />
        <NavItem path="/" label="Dative" />
        <NavItem path="/" label="Projects" />
      </div>
    </nav>

    <nav
      v-if="isMedium"
      id="external-links"
      class="flex w-1/3 justify-evenly bg-red-600"
    >
      <font-awesome-icon :icon="['fab', 'youtube']" class="w-10" />
      <font-awesome-icon :icon="['fab', 'spotify']" class="w-10" />
      <font-awesome-icon :icon="['fab', 'github']" class="w-10" />
    </nav>

    <!-- mobile navbar -->
    <nav class="lg:hidden">
      <div class="bg-white py-2 px-2 rounded-md">
        <font-awesome-icon :icon="['fa', 'bars']" class="w-7" color="gray" />
        <!-- <font-awesome-icon :icon="faBars" class="w-7" /> -->
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import useWindowResize from '@/hooks/useWindowHeight'
import NavItem from '~/components/ui/NavItem.vue'

export default defineComponent({
  components: {
    NavItem,
  },
  setup() {
    const { height, width } = useWindowResize()
    const isLarge = computed(() => width.value > 1025)
    const isMedium = computed(() => width.value <= 1025 && width.value > 768)
    const isSmall = computed(() => width.value < 768)
    return {
      isLarge,
      isMedium,
      isSmall,
      height,
      width,
    }
  },
})
</script>
