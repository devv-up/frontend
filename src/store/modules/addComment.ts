import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { apiAddComment } from "@/utils/api/addComment";
import { Comment } from "@/store/models/comment";

@Module
export default class AddCommentModule extends VuexModule {
  //State
  private commentData: Comment[] = [];

  //Mutation
  @Mutation
  private commentMuta(commentmuta: Comment[]) {
    this.commentData = commentmuta;
  }

  //컴포넌트에서 실행한 Action 실행. commit을 통해 mutation과 연결
  @Action({ commit: "commentMuta" })
  async commentAction(commentaction: Record<string, string | number>) {
    return await apiAddComment(commentaction);
  }

  //getters
  get gettercomment(): Comment[] {
    return this.commentData;
  }
}
