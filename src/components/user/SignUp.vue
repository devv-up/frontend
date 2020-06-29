<template>
  <v-container>
    <div class="d-flex flex-column">
      <v-btn class="my-2" outlined color="#DB4437" large>
        <v-icon>mdi-google</v-icon>
        구글 계정으로 회원가입
      </v-btn>
      <v-btn class="my-2" outlined color="#211F1F" large>
        <v-icon>mdi-github</v-icon>
        깃허브 계정으로 회원가입
      </v-btn>
      <v-divider />
      <p>이메일로 가입하기</p>
      <v-text-field
        type="email"
        hide-details
        outlined
        v-model="email"
        label="이메일 주소"
        required
      />
      <v-text-field
        hide-details
        outlined
        v-model="name"
        label="이름"
        required
      />
      <v-text-field
        type="password"
        hide-details
        outlined
        v-model="password1"
        label="비밀번호"
        required
      />
      <v-text-field
        type="password"
        hide-details
        outlined
        v-model="password2"
        label="비밀번호 확인"
        required
      />
      <v-btn color="primary" class="mt-2" large @click="signup">가입하기</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

import Swal from "sweetalert2";

import { ResponseMessage } from "@/utils/response-message";

@Component
export default class SignUp extends Vue {
  private email = "";
  private name = "";
  private password1 = "";
  private password2 = "";

  @Action signupWith!: Function;

  async signup() {
    if (this.password1 !== this.password2) {
      Swal.fire({
        icon: "error",
        text: "비밀번호를 다시 한 번 확인해주세요."
      });
      return;
    }
    try {
      await this.signupWith({
        email: this.email,
        username: this.name,
        password1: this.password1,
        password2: this.password2
      });
      Swal.fire({
        icon: "success",
        text: "가입인증 메일을 확인해주세요."
      }).then(() => {
        location.reload();
      });
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Error",
        html: `${ResponseMessage.getErrorFrom(e.response.data)}`
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
