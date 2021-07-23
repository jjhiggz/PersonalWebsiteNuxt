<template>
  <div class="w-1/2 bg-blue-50">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CenterContent',
})
</script>
