export class SignedInUser {
  access_token!: string;
  refresh_token!: string;
  user!: User;

  constructor(user?: User) {
    if (user) this.user = user;
  }
}

export class User {
  id = 0;
  email = "";
  name = "";
  password = "";
}
