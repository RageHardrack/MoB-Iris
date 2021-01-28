import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
	login(user) {
		return axios
			.post(API_URL + "signin", {
				username: user.username,
				password: user.password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				return response.data;
			});
	}
	logout() {
		localStorage.removeItem("user");
	}
	register(user) {
		return axios.post(API_URL + "signup", {
			nombre: user.nombre,
			username: user.username,
			email: user.email,
			empresa: user.empresa,
			password: user.password,
			roles: user.roles,
		});
	}
}

export default new AuthService();
