<template>
  <v-app-bar clipped-left app flat height="80">
    <router-link to="/">
      <v-img
        class="mx-2"
        :src="require('@/assets/images/logo.png')"
        max-width="32"
      ></v-img>
    </router-link>
    <v-icon
      left
      class="text-no-overflow drawer-btn ml-1"
      @click.stop="drawer = !drawer"
      >mdi-chevron-right
    </v-icon>
    <v-text-field
      class="ml-2"
      solo
      single-line
      clearable
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="검색..."
    ></v-text-field>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn v-if="userName" icon large>
        <v-avatar size="32px" item>
          <v-img :src="userAvatarImage" :alt="userName"></v-img>
        </v-avatar>
      </v-btn>
      <v-btn v-else outlined color="secondary">가입 혹은 로그인</v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Profile, Nav } from "@/components/layout/mixin";
import Component, { mixins } from "vue-class-component";

@Component
export default class Header extends mixins(Profile, Nav) {}
</script>
<style scoped>
.v-app-bar {
  border-bottom: 1px solid #ebebeb !important;
  background: #ffffff !important;
}
.v-text-field {
  max-width: 460px;
}
</style>
