<template>
  <v-container>
    <div class="d-flex flex-column">
      <v-btn class="my-2" outlined color="#4285F4" large>
        <v-icon>mdi-google</v-icon>
        구글 계정으로 로그인
      </v-btn>
      <v-btn class="my-2" outlined large>
        <v-icon>mdi-github</v-icon>
        깃허브 계정으로 로그인
      </v-btn>
      <v-divider></v-divider>
      <v-text-field
        hide-details
        outlined
        label="이메일을 입력하세요"
        required
      ></v-text-field>
      <v-text-field
        hide-details
        outlined
        label="비밀번호를 입력하세요"
        required
      ></v-text-field>
      <v-btn text small color="grey darken-2" class="align-self-end">
        비밀번호를 잊으셨나요?
      </v-btn>
      <v-btn color="primary" class="mt-2" large>로그인</v-btn>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SignIn extends Vue {}
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
