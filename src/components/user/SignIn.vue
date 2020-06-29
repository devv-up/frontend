<template>
  <v-container>
    <div class="d-flex flex-column">
      <v-btn class="my-2" outlined color="#DB4437" large>
        <v-icon>mdi-google</v-icon>
        구글 계정으로 로그인
      </v-btn>
      <v-btn class="my-2" outlined color="#211F1F" large>
        <v-icon>mdi-github</v-icon>
        깃허브 계정으로 로그인
      </v-btn>
      <v-divider />
      <v-text-field
        hide-details
        outlined
        label="이메일을 입력하세요"
        required
        v-model="email"
        @keyup.enter="signin"
      />
      <v-text-field
        type="password"
        hide-details
        outlined
        label="비밀번호를 입력하세요"
        required
        v-model="password"
        @keyup.enter="signin"
      />
      <v-btn text small color="grey darken-2" class="align-self-end">
        비밀번호를 잊으셨나요?
      </v-btn>
      <v-btn color="primary" class="mt-2" large @click="signin">로그인</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";

import Swal from "sweetalert2";

import { SignedInUser } from "@/store/models/user";
import { ResponseMessage } from "@/utils/response-message";

@Component
export default class SignIn extends Vue {
  private email = "";
  private password = "";

  @Getter currentUser!: SignedInUser;
  @Action signinWith!: Function;

  async signin() {
    try {
      await this.signinWith({
        email: this.email,
        password: this.password
      });
      sessionStorage.setItem("signedInUser", JSON.stringify(this.currentUser));
      location.reload();
    } catch (e) {
      Swal.fire({
        icon: "error",
        html: ResponseMessage.getErrorFrom(e.response.data)
      });
    }
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
}
</style>
