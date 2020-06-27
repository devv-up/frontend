import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { signinWith } from "@/utils/api/user";
import { SignedInUser } from "@/store/models/user";

@Module
export default class UserModule extends VuexModule {
	private signedInUser = new SignedInUser();

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

	get currentUser(): SignedInUser {
		return this.signedInUser;
	}
}
