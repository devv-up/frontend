import {
  Module,
  VuexModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { PostId } from "detail";
import { getPostId } from "@/utils/api/post";

@Module
export default class DetailModule extends VuexModule {
  //State
  private postid: PostId[] = [];

  //Mutation
  @Mutation
  PostIdMuta(postid: PostId[]) {
    this.postid = postid;
  }

  //Action
  @Action({ commit: "PostIdMuta" })
  async PostIdAct(): Promise<PostId[]> {
    return await (await getPostId({})).data;
  }

  get postidData(): PostId[] {
    return this.postid
  }
}
