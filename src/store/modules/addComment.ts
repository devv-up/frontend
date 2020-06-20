import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { AddComment } from "addComment";
import store from "@/store";
import { apiAddComment } from "@/api/addComment";

@Module({ dynamic: true, store, name: "AddcommentStore", namespaced: true })
class InterAddComment extends VuexModule implements AddComment {
  //State
  //action타고 mutation에서 vue에서 받아온 데이터를 현재 state에 넣었고
  public content = "";
  public post = 0;

  public obj = {
    content: this.content,
    post: this.post
  }

  //Mutation
  @Mutation
  private setVmodel(param2: any) {
    this.obj.content = param2.vmodel;
    this.obj.post = param2.post;
  }

  //컴포넌트에서 실행한 Action 실행. commit을 통해 mutation과 연결
  @Action({ commit: "setVmodel" })
  public async apiload(param1: any) {
    await apiAddComment(param1)
  }

  //getters
  private get loadMuta() {
    const obj = {
      content: this.obj.content,
      post: this.obj.post
    }
    return obj
  }
}
//현재 Addcomment 클래스를 AddCommentModule로 빼기
export const AddCommentModule = getModule(InterAddComment);
