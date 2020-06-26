export class SignedInUser {
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
