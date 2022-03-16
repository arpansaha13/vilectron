import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggle = useToggle(isDark)

export { isDark, toggle }
