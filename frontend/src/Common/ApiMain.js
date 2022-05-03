import axios from "axios";

export class ApiMain {
  url = "http://localhost:8000";
  signup(user) {
    return axios.post(`${this.url}/newaccount`, user);
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

  addProduct(username, product) {
    return axios.post(`${this.url}/profile/${username}/product`, product);
  }

  editProduct(username,id, product) {
    return axios.put(`${this.url}/profile/${username}/product/${id}`, product);
  }

  // searchByUsername(farmer_username) {
  //   return axios.get(`${this.url}/productByFarmer`, farmer_username);
  // }

  // searchByProduct(productName) {
  //   axios.get(`${this.url}/products`, productName );
  // }


}
