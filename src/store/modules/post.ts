import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { fetchPosts } from "@/utils/api/post";
import { Post } from "board";
import { Dictionary } from "vue-router/types/router";

@Module
export default class PostModule extends VuexModule {
  private postData: Post[] = [];

  @Mutation
  refreshPosts(postData: Post[]) {
    this.postData = postData;
  }

  @Action({ commit: "refreshPosts" })
  async fetchPosts(): Promise<Post[]> {
    return await (await fetchPosts()).data;
  }

  get posts(): Post[] {
    return this.postData;
  }

  get timeOfDay(): Dictionary<string | number>[] {
    return [
      { id: 0, title: "06:00 ~ 12:00" },
      { id: 1, title: "12:00 ~ 18:00" },
      { id: 2, title: "18:00 ~ 24:00" }
    ];
  }
}
