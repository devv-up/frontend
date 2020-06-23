<template>
  <div>
    <p class="font-weight-CONDENSED headline ma-2">댓글개수</p>
    <span v-for="(propsdata, x) in propsdatas" :key="x">
      <v-row v-if="propsdata.id">
        <span class="ml-3">{{ propsdatas[x].author.name }}</span>
        <v-spacer></v-spacer>
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-row>
      <p name="content" v-if="propsdata.id">{{ propsdatas[x].content }}</p>
    </span>

    <p class="font-weight-CONDENSED headline ma-2">댓글쓰기</p>
    <span align="center">
      <v-textarea name="input-7-1" filled label="댓글입력" auto-grow class="mt-8" v-model="vmodel"></v-textarea>
      <v-btn class="white--text" color="#8d13d0" @click="addcomment">댓글등록</v-btn>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AddComment } from "addComment";
import { VuexModule, Module } from "vuex-module-decorators";
import { Getter, Action } from "vuex-class";

const Props = Vue.extend({
  props: {
    propsdatas: {
      type: Array
    },
    propsdataid: {
      type: Number
    }
  }
});
@Component
export default class WriteReply extends Props {
  private vmodel = "";

  //v-model 값 & postid값 받아오기
  public postid = this.propsdataid;
  private bool = false;

  @Getter private obj!: AddComment[];

  @Action private apiload!: Function;

  //버튼 클릭시 이 함수 실행
  addcomment() {
    this.apiload({ content: this.vmodel, post: this.propsdataid });

    this.propsdatas.push(this.obj);
  }
}
</script>

<style></style>
