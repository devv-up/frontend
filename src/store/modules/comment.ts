import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { apiAddComment } from "@/utils/api/comment";
import { apiDeleteComment } from "@/utils/api/comment";
import { apiUpdateComment } from "@/utils/api/comment";
import { Comment } from "@/store/models/comment";

@Module
export default class CommentModule extends VuexModule {
  //State
  private commentData!: Comment;
  private commentUpdateData!: Comment;

  //Mutation
  //댓글등록 뮤테
  @Mutation
  private commentAddMuta(mutacomment: Comment) {
    this.commentData = mutacomment;
  }
  //댓글수정 뮤테
  @Mutation
  private commentUpdateMuta(mutacomment: Comment) {
    this.commentUpdateData = mutacomment;
  }

  //Action
  //댓글등록 액션
  @Action({ commit: "commentAddMuta" })
  async commentAddAction(actioncomment: Record<string, string | number>) {
    console.log("addaction " + actioncomment);
    return await apiAddComment(actioncomment);
  }
  //댓글수정 액션
  @Action({ commit: "commentUpdateMuta" })
  async commentUpdateAction(actioncomment: Record<string, string | number>) {
    console.log("actioncontent" + actioncomment.content);
    console.log("actioncommentid" + actioncomment.commentid);
    await apiUpdateComment(actioncomment);
  }
  //댓글삭제 액션
  @Action
  async commentDeleteAction(actioncommentid: Record<number, number | string>) {
    return await apiDeleteComment(actioncommentid);
  }

  //getters
  get gettercomment(): Comment {
    return this.commentData;
  }
  get getterupdatecomment(): Comment {
    return this.commentUpdateData;
  }
}
