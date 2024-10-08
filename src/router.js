import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUs },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router