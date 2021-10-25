<template>
	<section class="flex">
		<h2 text="uppercase">02 Meet your cew</h2>
		<div>Image</div>
		<nav class="flex gap-3">
			<router-link
				v-for="crew in crewLinks"
				:key="crew.name"
				:to="crew.name.split(' ').join('-').toLowerCase()"
				>{{ crew.name }}</router-link
			>
		</nav>
		<router-view />
	</section>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { crew } from '../data.json';
const crewLinks = computed(() => crew.map((link) => link));
</script>
