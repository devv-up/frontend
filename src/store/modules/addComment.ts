import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { AddComments, AddComment } from "addComment";
import store from "@/store";
import { setAddComment } from "@/api/addComment";

@Module({ dynamic: true, store, name: "addComment", namespaced: true })
class Addcomment extends VuexModule implements AddComments {
  //State
  //action타고 mutation에서 vue에서 받아온 데이터를 현재 state에 넣었고
  public addcomments: AddComment[] = [];

  //Mutation
  @Mutation
  AddcommentsMuta(addcomments: AddComment[]) {
    this.addcomments = addcomments;
  }

  //컴포넌트에서 실행한 Action 실행. commit을 통해 mutation과 연결
  @Action({ commit: "AddcommentsMuta" })
  //컴포넌트에서 보낸 파라미터 addcomment로 받기
  async AddCommentss(addcomment: AddComment[]) {
    //api 호출하는 함수 불러와서 파라미터에 컴포넌트에서 받은 addcomment 파라미터 넣기
    return setAddComment([{ addcomment }]).then(() => {
      addcomment;
    });
  }
}
//현재 Addcomment 클래스를 AddCommentModule로 빼기
export const AddCommentModule = getModule(Addcomment);
