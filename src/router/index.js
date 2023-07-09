import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/wlokasi.vue';
import Cuaca from '../components/wcuaca.vue';
import Stopwatch from '../components/wstopwatch.vue';
import Game from '../components/wgame.vue';

const routes = [
  { path: '/', component: Game},
  { path: '/wcuaca', component: Cuaca },
  { path: '/wlokasi', component: Lokasi },
  { path: '/wstopwatch', component: Stopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;