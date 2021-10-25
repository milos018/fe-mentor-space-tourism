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
		{
			path: '/destination',
			name: 'Destination',
			redirect: '/destination/moon',
			component: () => import('./destination-route/_router.vue'),
			children: [
				{
					path: ':dest',
					props: true,
					component: () => import('./destination-route/dest-component.vue'),
				},
			],
		},
		{
			path: '/crew',
			name: 'Crew',
			redirect: '/crew/douglas-hurley',
			component: () => import('./crew-route/_router.vue'),
			children: [
				{
					path: ':crew',
					props: true,
					component: () => import('./crew-route/crew-component.vue'),
				},
			],
		},
		{
			path: '/technology',
			name: 'Technology',
			redirect: '/technology/launch-vehicle',
			component: () => import('./technology-route/_router.vue'),
			children: [
				{
					path: ':tech',
					props: true,
					component: () => import('./technology-route/tech-component.vue'),
				},
			],
		},
		{
			path: '/:path(.*)',
			name: '404NotFound',
			component: () => import('./_nav/404-not-found.vue'),
		},
	],
});
