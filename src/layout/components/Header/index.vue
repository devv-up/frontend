<template>
  <v-app-bar clipped-left app flat height="80">
    <Logo size="small" classes="mx-2" />
    <v-spacer></v-spacer>
    <v-btn v-if="userName" icon large>
      <v-avatar size="32px" item>
        <v-img :src="userAvatarImage" :alt="userName"></v-img>
      </v-avatar>
    </v-btn>
    <router-link to="/signin" v-else>
      <v-btn outlined color="secondary">가입 혹은 로그인</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { UserModule } from "@/store/modules/user";
import Logo from "@/components/Logo/index.vue";

@Component({
  components: {
    Logo
  }
})
export default class Header extends Vue {
  get userName() {
    return UserModule.profile.name;
  }
  get userAvatarImage() {
    return UserModule.profile.avatarImage
      ? UserModule.profile.avatarImage
      : "@/assets/images/avatar-url-default.png";
  }
}
</script>
<style scoped>
.v-app-bar {
  border-bottom: 1px solid #ebebeb !important;
  background: #ffffff !important;
}
</style>
