<template>
  <v-app>
    <v-content class="primary">
      <v-container class="d-flex">
        <v-sheet
          class="mx-auto my-10 py-2 d-flex align-self-center justify-center"
          light
          :max-width="$vuetify.breakpoint.thresholds.xs"
          elevation="15"
          height="76vh"
          width="100%"
        >
          <div class="d-flex flex-column justify-center align-self-center">
            <Logo size="medium" classes="mx-auto" />
            <v-text-field
              class="mt-6 mb-1"
              :rules="[emailRules.required, emailRules.email]"
              filled
              rounded
              clearable
              v-model="email"
              prepend-inner-icon="mdi-email"
              placeholder="이메일을 입력하세요"
              required
            ></v-text-field>
            <v-btn color="secondary" large depressed>
              로그인 혹은 가입하기
            </v-btn>
            <v-divider light class="mt-5 mb-6"></v-divider>
            <SocialButton icon="mdi-google" color="#4285F4">
              구글 계정으로 로그인
            </SocialButton>
            <SocialButton icon="mdi-github">
              깃허브 계정으로 로그인
            </SocialButton>
          </div>
        </v-sheet>
      </v-container>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Logo from "@/components/Logo/index.vue";
import SocialButton from "@/components/SocialButton/index.vue";

@Component({
  components: {
    Logo,
    SocialButton
  }
})
export default class SignIn extends Vue {
  private email = "";
  private emailRules = {
    required: (value: string) => !!value || "이메일을 입력해주세요.",
    email: (value: string) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "정확한 이메일을 입력해주세요.";
    }
  };
}
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
