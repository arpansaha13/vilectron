import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // extra large screens
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
