<template>
	<div id="app">
		<header>
			<Navigation />
		</header>

		<main class="cols-md-12 container mx-auto justify-center">
			<router-view />
		</main>
	</div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
	name: "App",
	components: { Navigation },
};
</script>

<style lang="scss">
// body {
// 	background: linear-gradient(
// 		116.82deg,
// 		#052b8d 0%,
// 		rgba(39, 117, 169, 0.869792) 50%,
// 		rgba(70, 185, 195, 0.75) 100%
// 	);
// }
</style>
