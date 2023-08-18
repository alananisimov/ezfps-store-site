import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    scrollBehavior(to, from, savedPosition) {
        // Check if the destination route has a hash fragment
        if (to.hash) {
          // Scroll to the element with the corresponding ID
          return { selector: to.hash };
        }
  
        // If no hash fragment, scroll to the top
        return { x: 0, y: 0 };
      },
}
