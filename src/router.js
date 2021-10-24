import { createRouter, createWebHistory } from 'vue-router';
import Home from './home-route/index-route.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
	],
});
