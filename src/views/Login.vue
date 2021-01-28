<template>
	<div class="grid grid-cols-12">
		<div class="card card-container">
			<img
				id="profile-img"
				src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
				alt=""
				class="profile-img-card"
			/>
			<form name="form" @submit.prevent="handleLogin">
				<div>
					<label for="username">Username</label>
					<input
						v-model="user.username"
						v-validate="'required'"
						type="text"
						name="username"
					/>
					<div v-if="errors.has('username')">
						Username is required!
					</div>
				</div>
				<div>
					<label for="password">Password</label>
					<input
						v-model="user.password"
						v-validate="'required'"
						type="password"
						name="password"
					/>
					<div v-if="errors.has('password')">
						Password is required!
					</div>
					<div>
						<button>
							<span>Login</span>
						</button>
					</div>
					<div>
						<div v-if="message">
							{{ message }}
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import User from "../models/user";

export default {
	name: "Login",
	data() {
		return {
			user: new User("", ""),
			message: "",
		};
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	created() {
		if (this.loggedIn) {
			this.$router.push("/profile");
		}
	},
	methods: {
		handleLogin() {
			this.loading = true;
			this.$validator.validateAll().then((isValid) => {
				if (!isValid) {
					this.loading = false;
					return;
				}
				if (this.user.username && this.user.password) {
					this.$store.dispatch("auth/login", this.user).then(
						() => {
							this.$router.push("/profile");
						},
						(error) => {
							this.loading = false;
							this.message =
								(error.response && error.response.data) ||
								error.messsage ||
								error.toString();
						}
					);
				}
			});
		},
	},
};
</script>

<style scoped>
label {
	display: block;
	margin-top: 10px;
}

.card-container.card {
	max-width: 350px !important;
	padding: 40px 40px;
}

.card {
	background-color: #f7f7f7;
	padding: 20px 25px 30px;
	margin: 0 auto 25px;
	margin-top: 50px;
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
	width: 96px;
	height: 96px;
	margin: 0 auto 10px;
	display: block;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
}
</style>
