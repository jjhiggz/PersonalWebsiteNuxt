<template>
  <div class="w-full flex justify-between">
    <div></div>
    <Hamburger />
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Hamburger from '../../ui/Hamburger.vue'

export default defineComponent({
  name: 'SmallHeader',
  components: {
    Hamburger,
  },
})
</script>
