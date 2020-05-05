<template>
  <div>
    <v-card-title class="font-weight-CONDENSED headline ma-2"
      >댓글개수</v-card-title
    >
    <span v-for="(comment, x) in comment" :key="x">
      <v-card-title>
        {{ comment }}
        <v-spacer></v-spacer>
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-card-title>
      <v-card-text name="comment">
        {{ comment }}
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
      ></v-textarea>
      <v-btn class="white--text" color="#8d13d0">댓글등록</v-btn>
    </v-card-text>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import main from "@/store/modules/main";
import { Comments } from "@/store/models/main";

@Component
export default class WriteReply extends Vue {
  comment: Comments[] = [];

  
}
</script>

<style></style>
