<template>
  <div>
    <p class="font-weight-CONDENSED headline ma-2">댓글개수</p>
    <span v-for="(postidData, x) in postidData.comments" :key="x">
      <v-row v-if="postidData.id">
        <h3>
          <span class="ml-3">작성자: {{ postidData.author.name }}</span>
        </h3>
        <v-spacer />
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-row>
      <p name="content" v-if="postidData.id">{{ postidData.comments[x].content }}</p>
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
import { PostId } from "detail";
import { VuexModule, Module } from "vuex-module-decorators";
import { Getter, Action } from "vuex-class";
import { Prop } from "vue-property-decorator";

@Component
export default class WriteReply extends Vue {
  private vmodel = "";

  @Prop() private propsdatas: any;
  //v-model 값 & postid값 받아오기
  public postid = this.propsdatas.id;
  private bool = false;

  @Getter private obj!: AddComment[];
  @Getter private postidData!: PostId[];

  @Action private apiload!: Function;
  @Action private PostIdAct!: Function;

  //버튼 클릭시 이 함수 실행
  async created() {
    await this.PostIdAct();
  }

  addcomment() {
    console.log("datas " + this.propsdatas);
    this.apiload({ content: this.vmodel, post: this.propsdatas.id }).then(
      () => {
        console.log(JSON.stringify(this.postidData));

        console.log("list " + this.propsdatas.comments.push(this.obj));
        this.PostIdAct();
      }
    );
  }
}
</script>

<style></style>
