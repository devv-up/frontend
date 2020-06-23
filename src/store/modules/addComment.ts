import {
  Module,
  VuexModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { apiAddComment } from "@/utils/api/addComment";
import { AddComment } from "addComment"
import { Dictionary } from 'vue-router/types/router';

@Module
export default class AddCommentModule extends VuexModule {
  //State
  //action타고 mutation에서 vue에서 받아온 데이터를 현재 state에 넣었고
  private commentData: AddComment[] = [];

  private content = "";
  private post = 0;



  //Mutation
  @Mutation
  private setVmodel(mutaobj: AddComment[]) {
    this.commentData = mutaobj;
  }

  //컴포넌트에서 실행한 Action 실행. commit을 통해 mutation과 연결
  @Action({ commit: "setVmodel" })
  async apiload(actionparam: Record<string, string | number>): Promise<AddComment[]> {
    return (await apiAddComment(actionparam)).data;
  }

  //getters
  get obj(): AddComment[] {
    return this.commentData;
  }
}
