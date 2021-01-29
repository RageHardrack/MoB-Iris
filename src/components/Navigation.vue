<template>
	<nav class="flex px-4 py-2 text-white items-center">
		<div>
			<router-link to="/">
				<img class="w-14" src="@/assets/MoB-logo.png" alt="Mail On Bike Logo" />
			</router-link>
		</div>

		<div class="ml-auto mr-4 content-center" v-if="!currentUser">
			<ul class="flex mr-4">
				<li class="mr-4">
					<router-link to="/login">Login</router-link>
				</li>
				<li class="mr-4">
					<router-link to="/register">Register</router-link>
				</li>
			</ul>
		</div>

		<div v-if="currentUser" class="ml-auto content-center">
			<ul class="flex mr-4">
				<li class="mr-4">
					<a href @click.prevent="logOut">LogOut</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	computed: {
		currentUser() {
			return this.$store.state.auth.user;
		},
	},
	methods: {
		logOut() {
			this.$store.dispatch("auth/logout");
			this.$router.push("/login");
		},
	},
};
</script>

<style lang="scss">
$azul1: #303868;
$azul2: #52678e;
$azul3: #6f8fc8;

nav {
	background-color: $azul2;
}
</style>
