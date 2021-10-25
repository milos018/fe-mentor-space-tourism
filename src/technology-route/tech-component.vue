<template>
	<section v-if="computedRoute">
		<h1>{{ computedRoute.name }}</h1>
		<h1>{{ computedRoute.description }}</h1>
	</section>
	<p v-else font="bold">This tech is not found</p>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { technology } from '../data.json';

const props = defineProps(['tech']);

const computedRoute = computed(() =>
	technology.find(
		(tech) => tech.name.split(' ').join('-').toLowerCase() === props.tech,
	),
);
</script>
