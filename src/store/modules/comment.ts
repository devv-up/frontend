import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { apiAddComment } from '@/utils/api/comment';
import { apiDeleteComment } from '@/utils/api/comment';
import { apiUpdateComment } from '@/utils/api/comment';
import { Comment } from '@/store/models/Comment';

@Module
export default class CommentModule extends VuexModule {
  //State
  private commentData!: Record<string, string | number>;
  private commentUpdateData!: Record<string, string | number>;

  //Mutation
  //댓글등록 뮤테
  @Mutation
  private commentAddMuta(mutacomment: Record<string, string | number>) {
    console.log("Muta등록: " + mutacomment)
    this.commentData = mutacomment;
  }
  //댓글수정 뮤테
  @Mutation
  private commentUpdateMuta(mutacomment: Record<string, string | number>) {
    this.commentUpdateData = mutacomment;
  }

  //Action
  //댓글등록 액션
  @Action({ commit: 'commentAddMuta' })
  async commentAddAction(actioncomment: Record<string, string | number>) {
    console.log('action ' + JSON.stringify(actioncomment));
    return await apiAddComment(actioncomment);
  }
  //댓글수정 액션
  @Action({ commit: 'commentUpdateMuta' })
  async commentUpdateAction(actioncomment: Record<string, string | number>) {
    console.log('응');
    await apiUpdateComment(actioncomment);
  }
  //댓글삭제 액션
  @Action
  async commentDeleteAction(actioncommentid: Record<number, number | string>) {
    return await apiDeleteComment(actioncommentid);
  }

  //getters
  get gettercomment(): Record<string, string | number> {
    return this.commentData;
  }
  get getterupdatecomment(): Record<string, string | number> {
    return this.commentUpdateData;
  }
}
