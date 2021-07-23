<template>
  <nav class="lg:hidden">
    <grow-and-fade>
      <div
        class="
          bg-white
          py-2
          px-2
          rounded-md
          w-12
          h-12
          flex
          justify-center
          items-center
        "
      >
        <font-awesome-icon
          :icon="['fa', 'bars']"
          class="w-7 hover"
          color="gray"
        />
      </div>
    </grow-and-fade>
  </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import GrowAndFade from '../animations/slots/grow-and-fade.vue'

export default defineComponent({
  name: 'Hamburger',
  components: { GrowAndFade },
})
</script>
