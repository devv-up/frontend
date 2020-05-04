<template>
  <div class="sign-in-bar">
    <v-btn v-if="isLogged" icon large>
      <v-avatar size="32px" item>
        <v-img :src="userAvatarImage" :alt="userName"></v-img>
      </v-avatar>
    </v-btn>
    <div v-else>
      <v-btn text color="white" @click.stop="modalOpen(true)">
        Sign in
      </v-btn>
      <v-btn outlined color="white" @click.stop="modalOpen(false)">
        Sign up
      </v-btn>
    </div>
    <v-modal maxWidth="500">
      <template v-slot:content>
        <SignIn v-if="isSignIn" />
        <SignUp v-else />
      </template>
    </v-modal>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SignIn from "@/components/user/SignIn.vue";
import SignUp from "@/components/user/SignUp.vue";

@Component({
  components: {
    SignIn,
    SignUp
  },
  props: {
    isLogged: {
      type: Boolean,
      default: false
    },
    userName: {
      type: String,
      default: ""
    },
    userAvatarImage: {
      type: String,
      default: "@/assets/images/avatar-url-default.png"
    }
  }
})
export default class SignInBar extends Vue {
  isSignIn = true;
  modalOpen(isSignIn: boolean) {
    this.isSignIn = isSignIn;
    this.$store.commit("SET_DIALOG", true);
  }
}
</script>
