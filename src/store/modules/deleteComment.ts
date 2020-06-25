import { Module, Action, VuexModule } from "vuex-module-decorators";
import { apiDeleteComment } from "@/utils/api/deleteComment";

@Module
export default class DeleteCommentModule extends VuexModule {
  @Action
  async commentDeleteAction(actioncommentid: Record<number, number | string>) {
    return await apiDeleteComment(actioncommentid);
  }
}
