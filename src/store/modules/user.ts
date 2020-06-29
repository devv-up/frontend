import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { signinWith, signupWith } from "@/utils/api/user";
import { SignedInUser } from "@/store/models/user";

@Module
export default class UserModule extends VuexModule {
  private signedInUser = new SignedInUser();

  private successData = {};

  @Mutation
  storeDataOf(user: SignedInUser) {
    this.signedInUser = user;
  }

  @Action({ commit: "storeDataOf", rawError: true })
  async signinWith(userData: Record<string, string>): Promise<SignedInUser> {
    try {
      return (await signinWith(userData)).data;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  @Mutation
  storeSuccessData(data: object) {
    this.successData = data;
  }

  @Action({ rawError: true })
  async signupWith(userData: Record<string, string>): Promise<object> {
    try {
      return (await signupWith(userData)).data;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  get success() {
    return this.successData;
  }

  get currentUser(): SignedInUser {
    return this.signedInUser;
  }
}
