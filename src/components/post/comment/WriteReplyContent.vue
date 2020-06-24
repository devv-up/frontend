<template>
  <section>
    <p class="font-weight-CONDENSED headline ma-2">댓글개수</p>
    <span v-for="(item,i) in DetailData.comments" :key="i">
      <v-row v-if="item.id">
        <h3>
          {{i+1}}.
          <span class="ml-3">작성자: {{ DetailData.author.name }}</span>
        </h3>
        <v-spacer />
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0" @click="deletecomment">삭제</v-btn>
      </v-row>
      <p name="content" v-if="item.id">{{ item.content }}</p>
    </span>

    <p class="font-weight-CONDENSED headline ma-2">댓글쓰기</p>
    <span align="center">
      <v-textarea name="input-7-1" filled label="댓글입력" auto-grow class="mt-8" v-model="comment"></v-textarea>
      <v-btn class="white--text" color="#8d13d0" @click="addcomment">댓글등록</v-btn>
    </span>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AddComment } from "@/store/models/addComment";
import { PostId } from "@/store/models/detail";
import { VuexModule, Module } from "vuex-module-decorators";
import { Getter, Action } from "vuex-class";
import { Prop } from "vue-property-decorator";

@Component
export default class WriteReply extends Vue {
  //v-model 값 받아오기
  private comment = "";

  @Getter private DetailData!: PostId;

  @Action private commentAction!: Function;
  @Action private DetailAction!: Function;

  async created() {
    await this.DetailAction();
  }

  //버튼 클릭시 댓글등록 함수 실행
  addcomment() {
    if (this.comment !== "") {
      this.commentAction({
        content: this.comment,
        post: this.DetailData.id
      }).then(() => {
        alert("댓글이 등록되었습니다.");
        location.reload();
      });
    } else if (this.comment === "") {
      alert("댓글을 입력해주세요.");
    }
  }

  //버튼 클릭시 댓글삭제 함수 실행
  deletecomment() {
    console.log("삭제");
  }
}
</script>

<style></style>
