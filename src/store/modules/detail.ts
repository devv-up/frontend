import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { PostId } from "@/store/models/detail";
import { getPostId } from "@/utils/api/post";

@Module
export default class DetailModule extends VuexModule {
  //State
  private detailState = new PostId();

  //Mutation
  @Mutation
  detailMuta(postid: PostId) {
    this.detailState = postid;
    return this.detailState;
  }

  //Action
  @Action({ commit: "detailMuta" })
  async detailAction(): Promise<PostId> {
    return await (await getPostId({})).data;
  }

  get detailData(): PostId {
    return this.detailState;
  }
}
