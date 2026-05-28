import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Service from '../views/service.vue'
import Destination from '../views/destination.vue'
import Gallery from '../views/gallery.vue'
import Photos from '../views/photos.vue'
import Video from '../views/video.vue'

/* Destination Pages */
import Northern from '../views/northern.vue'
import Southern from '../views/southern.vue'
import Eastern from '../views/eastern.vue'
import Western from '../views/western.vue'
import Kigali from '../views/kigali.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: About,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

  {
    path: '/service',
    name: 'Service',
    component: Service,
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
  },

  /* Destinations Routes */

  {
    path: '/northern',
    name: 'Northern',
    component: Northern,
  },

  {
    path: '/southern',
    name: 'Southern',
    component: Southern,
  },

  {
    path: '/eastern',
    name: 'Eastern',
    component: Eastern,
  },

  {
    path: '/western',
    name: 'Western',
    component: Western,
  },

  {
    path: '/kigali',
    name: 'Kigali',
    component: Kigali,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router