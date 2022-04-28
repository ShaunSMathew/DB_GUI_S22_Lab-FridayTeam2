export class User {
  constructor(username, password, user_type = "farmer") {
    this.username = username;
    this.password = password;
    this.user_type = user_type;
  }
}
