<template>
	<section class="flex">
		<h2 text="uppercase">03 Space Launch 101</h2>
		<div>Image</div>
		<nav class="flex gap-3">
			<router-link
				v-for="tech in techLinks"
				:key="tech.name"
				:to="tech.name.split(' ').join('-').toLowerCase()"
				>{{ tech.name }}</router-link
			>
		</nav>
		<router-view />
	</section>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { technology } from '../data.json';
const techLinks = computed(() => technology.map((link) => link));
</script>
