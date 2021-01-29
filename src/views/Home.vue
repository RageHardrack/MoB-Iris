<template>
	<div class="w-full flex flex-col justify-center items-center mt-10 mb-40">
		<div
			class="max-w-lg bg-gray-100 shadow-lg rounded-xl overflow-hidden mx-auto py-4 px-8 mt-10"
		>
			<h2>Bienvenidos a Iris</h2>
		</div>
	</div>
</template>

<script>
import UserService from "../services/user.service";

export default {
	name: "Home",
	data() {
		return {
			content: "",
		};
	},
	mounted() {
		UserService.getPublicContent().then(
			(response) => {
				this.content = response.data;
			},
			(error) => {
				this.content =
					(error.response && error.response.data) ||
					error.message ||
					error.toString();
			}
		);
	},
};
</script>

<style lang="scss">
body {
	background: linear-gradient(
		116.82deg,
		#052b8d 0%,
		rgba(39, 117, 169, 0.869792) 50%,
		rgba(70, 185, 195, 0.75) 100%
	);
}
</style>
