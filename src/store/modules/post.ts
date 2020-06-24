import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { fetchPosts } from "@/utils/api/post";
import { Post } from "@/store/models/post";

@Module
export default class PostModule extends VuexModule {
  private postData: Post[] = [];

  @Mutation
  refreshPosts(postData: Post[]) {
    this.postData = postData;
  }

  @Action({ commit: "refreshPosts" })
  async fetchPosts(params?: Record<string, string | number>): Promise<Post[]> {
    return (await fetchPosts(params)).data;
  }

  get posts(): Post[] {
    return this.postData;
  }

  get timeOfDay(): Record<string, string | number>[] {
    return [
      { id: 0, title: "06:00 ~ 12:00" },
      { id: 1, title: "12:00 ~ 18:00" },
      { id: 2, title: "18:00 ~ 24:00" }
    ];
  }
}
