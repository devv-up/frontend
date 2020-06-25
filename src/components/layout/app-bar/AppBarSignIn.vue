<template>
  <div class="sign-in-bar">
    <div v-if="isSignedIn">
      <v-btn icon large @click.stop="open('mypageModal')">
        <v-avatar size="32px">
          <v-img :src="userAvatarImage" :alt="userName" />
        </v-avatar>
      </v-btn>
      <span class="user-name mr-1"> {{ userName }} </span>
      <v-chip outlined color="white" @click.stop="signout">Sign Out</v-chip>
    </div>
    <div v-else>
      <v-btn text color="white" @click.stop="open('signinModal')">
        Sign In
      </v-btn>
      <v-btn outlined color="white" @click.stop="open('signupModal')">
        Sign Up
      </v-btn>
    </div>

    <v-modal maxWidth="500">
      <template v-slot:content>
        <SignIn title="Sign In" v-if="signInClicked" />
        <SignUp title="Sign Up" v-else-if="signUpClicked" />
        <SignIn title="Mypage" v-else-if="avatarClicked" />
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
  private isSignedIn = false;

  private userAvatarImage = require(`@/assets/images/avatar-url-default.png`);
  private userName = "";

  private signInClicked = false;
  private signUpClicked = false;
  private avatarClicked = false;

  @Mutation storeDataOf!: Function;
  @Getter currentUser!: Function;

  created() {
    if (sessionStorage.getItem("signedInUser")) {
      const user = JSON.parse(sessionStorage.getItem("signedInUser") as string)
        .user;

      this.isSignedIn = true;
      this.userName = user.name;

      this.storeDataOf(new SignedInUser(user));
    }
  }

  signout() {
    sessionStorage.clear();
    location.reload();
  }

  open(modal: string) {
    if (modal == "signinModal") this.signInClicked = true;
    else if (modal == "signupModal") this.signUpClicked = true;
    else if (modal == "mypageModal") this.avatarClicked = true;
    else throw new Error("잘못된 접근입니다.");

    this.$store.commit("SET_DIALOG", true);
  }
}
</script>

<style scoped>
.user-name {
  color: white;
}
</style>
