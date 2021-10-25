<template>
	<section class="flex">
		<h2 text="uppercase">01 Pick your destination</h2>
		<div>Image</div>
		<nav class="flex gap-3">
			<router-link
				v-for="linkName in navLinks"
				:key="linkName"
				:to="linkName.toLowerCase()"
				>{{ linkName }}</router-link
			>
		</nav>
		<router-view />
	</section>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { destinations } from '../data.json';
const navLinks = computed(() => destinations.map((link) => link.name));
</script>
