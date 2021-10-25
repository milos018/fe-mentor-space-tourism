<template>
	<section v-if="computedRoute">
		<h1>{{ computedRoute.name }}</h1>
		<h1>{{ computedRoute.role }}</h1>
		<h1>{{ computedRoute.bio }}</h1>
	</section>
	<p v-else font="bold">This Crew member is not found.</p>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { crew } from '../data.json';

const props = defineProps(['crew']);

const computedRoute = computed(() =>
	crew.find(
		(crew) => crew.name.split(' ').join('-').toLowerCase() === props.crew,
	),
);
</script>
