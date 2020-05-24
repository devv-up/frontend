<template>
  <div>
    <p class="font-weight-CONDENSED headline ma-2">
      댓글개수
    </p>
    <span v-for="(propsdata, x) in props.propsdatas" :key="x">
      <v-row>
        <span class="ml-3">{{ propsdata.id }}</span>
        <v-spacer></v-spacer>
        <v-btn class="ma-1" color="white">수정</v-btn>
        <v-btn class="ma-1 white--text" color="#8d13d0">삭제</v-btn>
      </v-row>
      <p name="comment">
        {{ propsdata.post }}
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
      <v-btn
        class="white--text"
        color="#8d13d0"
        v-model="commentvalue"
        @click="addcomment"
        >댓글등록</v-btn
      >
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { setAddComment } from "@/api/addComment";
import { AddComments, AddComment } from "addComment";
import { AddCommentModule } from "../../store/modules/addComment";

@Component
export default class WriteReply extends Vue {
  props: any = {
    propsdata: { type: Array, default: [""] }
  };

  //v-model 값 & postid값 받아오기
  public commentvalue: any = "";
  public postid: any = this.props.propsdata.id;

  //받은값들 객체형태로 선언
  public sendData: AddComment[] = [
    {
      content: this.commentvalue,
      post: this.postid,
      parentComment: 0,
      author: 0
    }
  ];

  //버튼 클릭시 이 함수 실행
  addcomment() {
    //액션 AddCommentss 호출하고 파라미터로 위에서 선언한 객체형태 값 넣기 
    AddCommentModule.AddCommentss(this.sendData);
  }
}
</script>

<style></style>
