import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { PostState, PostId } from "detail";
import store from "@/store";
import { getPostId } from "@/api/detail";

@Module({ dynamic: true, store, name: "detail", namespaced: true })
class Detail extends VuexModule implements PostState {
  //State
  public postid: PostId[] = [];

  //Mutation
  @Mutation
  PostIdMuta(postid: PostId[]) {
    this.postid = postid;
  }

  //Action
  @Action({ commit: "PostIdMuta" })
  async PostIdAct() {
    return getPostId({});
  }
}
export const DetailModule = getModule(Detail);
