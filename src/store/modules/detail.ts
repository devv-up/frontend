import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { PostId } from "detail";
import store from "@/store";
import { getPostId } from "@/utils/api/post";

@Module({ dynamic: true, store, name: "detail", namespaced: true })
class Detail extends VuexModule {
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
