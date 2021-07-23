<template>
  <div>
    <Header />
    <custom-section :background-color="colors[0]">
      <Slideshow />
    </custom-section>
    <custom-section :background-color="colors[1]">
      <Slideshow />
    </custom-section>
    <custom-section :background-color="colors[2]">
      <Slideshow />
    </custom-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useStore } from '@nuxtjs/composition-api'
import CustomSection from '../components/layout/slots/custom-section.vue'
import Slideshow from '../components/ui/Slideshow.vue'
import Header from '../components/layout/Header.vue'
import { RootState } from '../store'

export default defineComponent({
  components: {
    CustomSection,
    Slideshow,
    Header,
  },
  setup() {
    const store = useStore<RootState>()
    const { colors } = store.state

    return {
      colors,
    }
  },
})
</script>
