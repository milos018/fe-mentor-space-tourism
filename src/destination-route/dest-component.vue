<template>
	<section v-if="computedRoute">
		<h1>{{ computedRoute.name }}</h1>
		<h1>{{ computedRoute.description }}</h1>
		<h1>{{ computedRoute.distance }}</h1>
	</section>
	<p v-else>
		<span font="bold"> {{ props.dest }}? Really? </span>
		Not sure if it does not exist, maybe you found another planet?
	</p>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { destinations } from '../data.json';

const props = defineProps(['dest']);

const computedRoute = computed(() =>
	destinations.find((dest) => dest.name.toLowerCase() === props.dest),
);
</script>
