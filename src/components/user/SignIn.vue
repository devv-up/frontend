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
      />
      <v-text-field
        type="password"
        hide-details
        outlined
        label="비밀번호를 입력하세요"
        required
        v-model="password"
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

@Component
export default class SignIn extends Vue {
  private email = "";
  private password = "";

  @Getter currentUser!: Function;
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
        text: this.getErrorMessage(e.response.data)
      });
    }
  }

  getErrorMessage(responseData: Record<string, (string | null)[]>): string {
    const key = `${Object.keys(responseData)[0]}: ${
      responseData[Object.keys(responseData)[0]][0]
    }`;

    const errorMessageList: Record<string, string> = {
      "password: This field may not be blank.":
        "이메일과 비밀번호를 입력해주세요.",
      'non_field_errors: Must include "email" and "password".':
        "이메일과 비밀번호를 입력해주세요.",
      "email: Enter a valid email address.": "이메일 형식이 잘못되었습니다.",
      "non_field_errors: Unable to log in with provided credentials.":
        "이메일과 비밀번호를 다시 확인해주세요."
    };

    return errorMessageList[key];
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
