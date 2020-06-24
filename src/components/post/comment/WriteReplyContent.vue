<template>
  <section>
    <p v-if="bool">{{postidData2}}</p>
    <p class="font-weight-CONDENSED headline ma-2">댓글개수</p>
    <span v-for="(postData, x) in postidData2" :key="x">
      <v-row>
        <h3>
          <span class="ml-3">작성자: {{ postidData2.author.name }}</span>
        </h3>
        <v-spacer />
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-row>
      <p name="content">{{ postData.comments[x].content }}</p>
    </span>

    <p class="font-weight-CONDENSED headline ma-2">댓글쓰기</p>
    <span align="center">
      <v-textarea name="input-7-1" filled label="댓글입력" auto-grow class="mt-8" v-model="vmodel"></v-textarea>
      <v-btn class="white--text" color="#8d13d0" @click="addcomment">댓글등록</v-btn>
    </span>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AddComment } from "addComment";
import { PostId } from "detail";
import { VuexModule, Module } from "vuex-module-decorators";
import { Getter, Action } from "vuex-class";
import { Prop } from "vue-property-decorator";

@Component
export default class WriteReply extends Vue {
  //v-model 값 받아오기
  private vmodel = "";
  private bool = false;

  @Getter private obj!: AddComment[];
  @Getter private postidData2!: PostId;

  @Action private apiload!: Function;
  @Action private PostIdAct!: Function;

  async created() {
    await this.PostIdAct();
    console.log("댓글 " + JSON.stringify(this.postidData2));
  }

  async mounted() {
    await this.PostIdAct();
    this.bool = true;
    console.log("beforemount " + this.bool);
  }

  //버튼 클릭시 이 함수 실행
  addcomment() {
    console.log("datas " + this.postidData2);
    this.apiload({ content: this.vmodel, post: this.postidData2.id }).then(
      () => {
        console.log("write " + JSON.stringify(this.postidData2));
        this.PostIdAct();
      }
    );
  }
}
</script>

<style></style>
