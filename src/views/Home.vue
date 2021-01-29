<template>
	<div
		class="h-screen w-full flex flex-col justify-center items-center mt-10 mb-40"
	>
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
