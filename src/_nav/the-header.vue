<template>
	<header w="full" class="flex justify-between" bg=" gray-500">
		<div bg="white">
			<img src="/assets/shared/logo.svg" alt="Logo" />
		</div>
		<nav class="flex gap-3">
			<router-link to="/">00 Home</router-link>
			<router-link to="/destination">01 Destination</router-link>
			<router-link to="/crew">02 Crew</router-link>
			<router-link to="/technology">03 Technology</router-link>
		</nav>
	</header>
</template>
