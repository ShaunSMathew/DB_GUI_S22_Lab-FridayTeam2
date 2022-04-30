import axios from "axios";

export class ApiMain {
  url = "http://localhost:8000";
  signup(user) {
    return axios.post(`${this.url}/newaccount`, user);
  }

  checkUser(token) {
    return axios.get(`${this.url}/login`);
  }
  login(user) {
    return axios.post(`${this.url}/login`, user);
  }
  getProfile(username) {
    return axios.get(`${this.url}/profile/${username}`);
  }
  getProducts(username) {
    return axios.get(`${this.url}/profile/${username}/products`);
  }
}
