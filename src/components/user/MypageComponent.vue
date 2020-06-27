<template>
  <v-container>
    <v-row>
      <v-col class="text-center mt-3">
        <v-avatar size="160px">
          <v-img :src="userAvatarImage" :alt="currentUser.name" />
        </v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <h1 class="">
          <v-icon>mdi-account</v-icon>
          {{ currentUser.user.name }}
        </h1>
        <p class="mb-0">
          <v-icon>mdi-email</v-icon>
          {{ currentUser.user.email }}
        </p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col class="text-center">
        <v-icon>mdi-pencil</v-icon>
        <h3>
          10
        </h3>
      </v-col>
      <v-col class="text-center">
        <v-icon>mdi-heart</v-icon>
        <h3 class="text-center">
          20
        </h3>
      </v-col>
    </v-row>
    <v-divider />
    <v-row>
      <v-col>
        <div class="d-flex flex-row align-center mb-2">
          <v-icon class="mr-2">mdi-lock</v-icon>
          <v-text-field
            type="password"
            class="mb-0"
            label="비밀번호"
            outlined
            hide-details
          />
        </div>
        <div class="d-flex flex-row align-center mb-3">
          <v-icon class="mr-2">mdi-lock</v-icon>
          <v-text-field
            type="password"
            class="mb-0"
            label="비밀번호 확인"
            outlined
            hide-details
          />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary" class="mb-3" large block>비밀번호 변경</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="primary" large block @click.stop="signout"
          >로그아웃</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter } from "vuex-class";

import { SignedInUser } from "@/store/models/user";

@Component
export default class MypageComponent extends Vue {
  private userAvatarImage = require(`@/assets/images/avatar-url-default.png`);

  @Getter currentUser!: SignedInUser;

  signout() {
    sessionStorage.clear();
    location.reload();
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;

  .v-divider {
    margin: 20px 0;
  }
  .v-text-field {
    margin-bottom: 10px;
  }
  .col {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
