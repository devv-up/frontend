<template>
  <v-container>
    <div class="d-flex flex-column">
      <v-btn class="my-2" outlined color="#4285F4" large>
        <v-icon>mdi-google</v-icon>
        구글 계정으로 회원가입
      </v-btn>
      <v-btn class="my-2" outlined large>
        <v-icon>mdi-github</v-icon>
        깃허브 계정으로 회원가입
      </v-btn>
      <v-divider />
      <p>이메일로 가입하기</p>
      <v-text-field hide-details outlined label="이메일 주소" required />
      <v-text-field hide-details outlined label="이름" required />
      <v-text-field hide-details outlined label="비밀번호" required />
      <v-btn color="primary" class="mt-2" large>가입하기</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class SignUp extends Vue {}
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
