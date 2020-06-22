<template>
  <div>
    <p class="font-weight-CONDENSED headline ma-2">댓글개수</p>
    <span v-for="(posts, x) in props.postss" :key="x">
      <v-row>
        <span class="ml-3">{{ this.posts }}</span>
        <v-spacer></v-spacer>
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-row>
      <p name="comment">{{ this.posts.post }}</p>
    </span>

    <p class="font-weight-CONDENSED ma-2">댓글쓰기</p>
    <span align="center">
      <v-textarea name="input-7-1" filled label="댓글입력" auto-grow class="mt-8" v-model="vmodel"></v-textarea>
      <v-btn class="white--text" color="#8d13d0" @click="addcomment">댓글등록</v-btn>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { InterAddComment, AddComment } from "addComment";
import { AddCommentModule } from "@/store/modules/addComment";
import { VuexModule, Module } from "vuex-module-decorators";

const Props = Vue.extend({
  props: {
    propsdata: {
      type: Object,
      required: true
    }
  }
});
@Component
export default class WriteReply extends Props {
  public vmodel: any = "";

  //v-model 값 & postid값 받아오기
  private posts = this.propsdata;
  public postid = this.propsdata.id;
  public bool = false;

  public obj = {
    content: this.vmodel,
    post: this.postid
  };

  //버튼 클릭시 이 함수 실행
  addcomment() {
    AddCommentModule.apiload(this.obj);
  }
}
</script>

<style></style>
