import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'

export default function useWindowResize() {
  const height = ref(1)
  const width = ref(1)

  function resize() {
    height.value = window.innerHeight
    width.value = window.innerWidth
  }

  onMounted(() => {
    resize()
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  return { height, width }
}
