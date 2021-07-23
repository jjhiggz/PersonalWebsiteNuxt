<template>
  <div class="max-w-max text-xl font-bold">
    <NuxtLink :to="path">{{ label }}</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    path: { type: String as () => String, default: () => '' },
    label: { type: String, default: () => '' },
  },
})
</script>
