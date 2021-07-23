<template>
  <div class="w-full flex justify-between">
    <nav>
      <hamburger />
    </nav>
    <nav id="external-links" class="flex w-1/3 justify-between items-center">
      <grow-and-fade color="red-400">
        <font-awesome-icon :icon="['fab', 'youtube']" class="w-10" />
      </grow-and-fade>

      <grow-and-fade color="green-400">
        <font-awesome-icon :icon="['fab', 'spotify']" class="w-10" />
      </grow-and-fade>
      <grow-and-fade color="blue-300">
        <font-awesome-icon :icon="['fab', 'github']" class="w-10" />
      </grow-and-fade>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Hamburger from '../../ui/Hamburger.vue'
import GrowAndFade from '../../animations/slots/grow-and-fade.vue'

export default defineComponent({
  name: 'MediumHeader',
  components: { Hamburger, GrowAndFade },
})
</script>
