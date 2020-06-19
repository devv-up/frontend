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
  public vmodel = "";
  public postid = 0;

  //Mutation
  @Mutation
  setVmodel(param1: any) {
    this.vmodel = param1.vmodel;
    this.postid = param1.post;
  }

  //컴포넌트에서 실행한 Action 실행. commit을 통해 mutation과 연결
  @Action
  async apiload(param1: string, param2: number) {
    const addCommentload = await apiAddComment(param1, param2);
    this.context.commit("setVmodel", addCommentload);
  }

  //getters
  get loadMuta() {
    
    return 0
  }
}
//현재 Addcomment 클래스를 AddCommentModule로 빼기
export const AddCommentModule = getModule(InterAddComment);
