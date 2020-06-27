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
  last_login!: Date;
  is_superuser = false;
  is_active = false;
  is_staff = false;
  create_date!: Date;
  verification = false;
  verification_key = "";
  groups = [];
  user_permissions = [];
}
