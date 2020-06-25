declare module "user" {
  export interface Profile {
    name: string;
    email: string;
    avatarImage: string;
  }
  export interface UserState {
    profile: Profile;
  }
}
