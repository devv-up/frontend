<template>
	<div class="sign-in-bar">
		<div v-if="userIsSignedIn">
			<v-btn icon large @click.stop="open('Mypage')">
				<v-avatar size="32px">
					<v-img :src="userAvatarImage" :alt="userName" />
				</v-avatar>
			</v-btn>
			<span class="user-name mr-1"> {{ userName }} </span>
			<v-chip outlined color="white" @click.stop="signout">Sign Out</v-chip>
		</div>
		<div v-else>
			<v-btn text color="white" @click.stop="open('Sign In')">
				Sign In
			</v-btn>
			<v-btn outlined color="white" @click.stop="open('Sign Up')">
				Sign Up
			</v-btn>
		</div>

		<v-modal maxWidth="500">
			<template v-slot:content>
				<SignIn title="Sign In" v-if="modalName === 'Sign In'" />
				<SignUp title="Sign Up" v-else-if="modalName === 'Sign Up'" />
				<SignIn title="Mypage" v-else-if="modalName === 'Mypage'" />
			</template>
		</v-modal>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";

import SignIn from "@/components/user/SignIn.vue";
import SignUp from "@/components/user/SignUp.vue";

import { SignedInUser } from "@/store/models/user";

@Component({
	components: {
		SignIn,
		SignUp
	}
})
export default class SignInBar extends Vue {
	private userIsSignedIn = false;
	private userAvatarImage = require(`@/assets/images/avatar-url-default.png`);
	private userName = "";
	private modalName = "";

	@Getter currentUser!: Function;

	@Mutation storeDataOf!: Function;
	@Mutation switchModal!: Function;

	created() {
		if (sessionStorage.getItem("signedInUser")) {
			const user = JSON.parse(sessionStorage.getItem("signedInUser") as string)
				.user;

			this.userIsSignedIn = true;
			this.userName = user.name;

			this.storeDataOf(new SignedInUser(user));
		}
	}

	signout() {
		sessionStorage.clear();
		location.reload();
	}

	open(modal: string) {
		this.modalName = modal;
		this.switchModal({ modalName: modal, isOn: true });
	}
}
</script>

<style scoped>
.user-name {
	color: white;
}
</style>
