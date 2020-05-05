<template>
  <div>
    <p class="font-weight-CONDENSED headline ma-2">
      댓글개수
    </p>
    <span v-for="(comment, x) in comment" :key="x">
      <v-row>
        {{comment.id}}
        <v-spacer></v-spacer>
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-row>
      <p name="comment">
        {{comment.content}}
      </p>
    </span>

    <p class="font-weight-CONDENSED ma-2">
      댓글쓰기
    </p>
    <span align="center">
      <v-textarea
        name="input-7-1"
        filled
        label="댓글입력"
        auto-grow
        value=""
        class="mt-8"
      ></v-textarea>
      <v-btn class="white--text" color="#8d13d0">댓글등록</v-btn>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class WriteReply extends Vue {
comment = [
  {
    id:"good",
    content:"good!!"
  },
  {
    id:"call",
    content:"call!!"
  }
]
  
}
</script>

<style></style>
