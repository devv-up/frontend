<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    flat
    color="primary"
  >
    <v-toolbar-title class="ml-0 pl-3 text-no-wrap">
      <span class="font-weight-bold white--text text-no-wrap">Dev Up!</span>
    </v-toolbar-title>
    <v-btn
      icon
      left
      class="hidden-md-and-up drawer-btn"
      :ripple="false"
      @click.stop="drawer = !drawer"
    >
      <v-icon left class="text-no-overflow">mdi-chevron-down</v-icon>
    </v-btn>
    <v-text-field
      class="ml-3"
      flat
      solo
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
      <v-btn v-else text color="white">가입 혹은 로그인</v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Profile, Nav } from "@/components/layout/mixin";
import Component, { mixins } from "vue-class-component";

@Component
export default class Header extends mixins(Profile, Nav) {}
</script>
