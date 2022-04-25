import axios from "axios";

export class ApiMain {
  url = "http://localhost:8000";
  signup(user) {
    if (user.userType == "farmer") {
      return axios.post(`${this.url}/farmer`, user);
    } else {
      return axios.post(`${this.url}/owner`, user);
    }
  }
}
