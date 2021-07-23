<!-- full nav bar -->
<template>
  <nav class="w-full flex flex-col items-end">
    <div class="flex flex-col w-1/2 items-end">
      <div class="flex justify-evenly items-center my-4 w-1/2">
        <grow-andfade color="red-400">
          <font-awesome-icon :icon="['fab', 'youtube']" class="w-11" />
        </grow-andfade>
        <grow-andfade color="green-400">
          <font-awesome-icon :icon="['fab', 'spotify']" class="w-9" />
        </grow-andfade>
        <grow-andfade color="blue-300">
          <font-awesome-icon :icon="['fab', 'github']" class="w-9" />
        </grow-andfade>
      </div>
      <div id="routes" class="flex justify-evenly w-3/4">
        <NavItem path="/" label="Home" />
        <NavItem path="/about" label="About" />
        <NavItem path="/" label="Dative" />
        <NavItem path="/" label="Projects" />
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import NavItem from '../../ui/NavItem.vue'
import GrowAndfade from '../../animations/slots/grow-and-fade.vue'

export default defineComponent({
  name: 'LargeHeader',
  components: { NavItem, GrowAndfade },
})
</script>
