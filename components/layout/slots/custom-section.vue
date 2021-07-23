<template>
  <section
    class="w-full h-screen flex justify-center items-center"
    :style="{ backgroundColor: backgroundColor }"
  >
    <center-content>
      <slot></slot>
    </center-content>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CenterContent from './center-content.vue'

export default Vue.extend({
  name: 'CustomSection',
  components: {
    CenterContent,
  },
  props: {
    backgroundColor: {
      type: String as () => String,
      default: () => 'black',
    },
  },
})
</script>
