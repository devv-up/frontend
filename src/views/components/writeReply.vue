<template>
  <div>
    <v-card-title class="font-weight-CONDENSED headline ma-2"
      >댓글개수</v-card-title
    >
    <span v-for="(userProfile, x) in userProfiles" :key="x">
      <v-card-title>
        {{ userProfile.id }}
        <v-spacer></v-spacer>
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-card-title>
      <v-card-text name="userProfile">
        {{ userProfile.comment }}
      </v-card-text>
    </span>

    <v-card-title class="font-weight-CONDENSED ma-2">
      댓글쓰기
    </v-card-title>
    <v-card-text align="center">
      <v-textarea
        name="input-7-1"
        filled
        label="댓글입력"
        auto-grow
        value=""
        class="mt-8"
        v-model="writecomment"
      ></v-textarea>
      <v-btn class="white--text" color="#8d13d0">댓글등록</v-btn>
    </v-card-text>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class WriteReply extends Vue {
  writecomment = "";

  userProfiles = [
    {
      id: "good",
      comment: "Hello"
    },
    {
      id: "call",
      comment: "calling"
    },
    {
      id: "hot",
      comment: "cool"
    }
  ];
}
</script>

<style></style>
