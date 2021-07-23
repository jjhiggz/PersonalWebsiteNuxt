<template>
  <div :class="classList.join(' ')">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GrowAndFade',
  props: {
    color: {
      type: String as () => String,
      default: () => 'white',
    },
  },
  computed: {
    tailWindCode(): String {
      return `text-${this.$props.color}`
    },
    classList() {
      return [
        'p-0',
        'transition',
        'ease-in-out',
        'duration-300',
        'hover:opacity-90',
        'transform',
        'hover:scale-110',
        `hover:${this.tailWindCode}`,
      ]
    },
  },
})
</script>
