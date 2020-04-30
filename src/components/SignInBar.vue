<template>
  <div class="sign-in-bar">
    <v-btn v-if="isLogged" icon large>
      <v-avatar size="32px" item>
        <v-img :src="userAvatarImage" :alt="userName"></v-img>
      </v-avatar>
    </v-btn>
    <div v-else>
      <v-btn text color="white">Sign in</v-btn>
      <v-btn outlined color="white">Sign up</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
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
export default class SignInBar extends Vue {}
</script>
