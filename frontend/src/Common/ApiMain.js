import axios from "axios";

export class ApiMain {
  url = "http://localhost:8000";
  signup(user) {
    return axios.post(`${this.url}/farmers`, user);
  }
}
