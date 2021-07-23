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
    <LargeHeader class="hidden lg:flex" />
    <MediumHeader class="hidden md:flex lg:hidden" />
    <SmallHeader class="md:hidden" />

    <!-- mobile navbar -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LargeHeader from './LargeHeader.vue'
import MediumHeader from './MediumHeader.vue'
import SmallHeader from './SmallHeader.vue'

export default defineComponent({
  components: {
    LargeHeader,
    MediumHeader,
    SmallHeader,
  },
})
</script>
