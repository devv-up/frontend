import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module
export default class ModalModule extends VuexModule {
	private modalName = "";
	private isOn = false;

	@Mutation
	private switchModal(payload: Record<string, string | boolean>) {
		this.modalName = payload.modalName as string;
		this.isOn = payload.isOn as boolean;
	}

	get modal() {
		return this.modalName;
	}

	get isModalOn() {
		return this.isOn;
	}
}
