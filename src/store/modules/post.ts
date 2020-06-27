import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { fetchPosts } from "@/utils/api/post";
import { Post } from "@/store/models/post";

@Module
export default class PostModule extends VuexModule {
  private postData: Post[] = [];

  private currentPage = 1;
  private prevData: Post[] = [];
  private fetchedData: Post[] = [];

  get posts(): Post[] {
    return this.postData;
  }

  get fetchedPosts() {
    return this.fetchedData;
  }

  get timeOfDay(): Record<string, string | number>[] {
    return [
      { id: 0, title: "06:00 ~ 12:00" },
      { id: 1, title: "12:00 ~ 18:00" },
      { id: 2, title: "18:00 ~ 24:00" }
    ];
  }

  @Mutation
  resetPage() {
    this.currentPage = 1;
    this.postData = [];
    this.prevData = [];
    this.fetchedData = [];
  }

  @Mutation
  updatePostsWith(postData: Post[]) {
    this.postData.push(...postData);
    this.fetchedData = [];
  }

  @Mutation
  refreshData(fetchedData: Post[]) {
    this.currentPage += 1;
    if (this.prevData[0] && this.prevData[0].id === fetchedData[0].id)
      this.fetchedData = [];
    else this.prevData = this.fetchedData = fetchedData;
  }

  @Action({ commit: "refreshData" })
  async fetchPosts(params?: Record<string, string | number>): Promise<Post[]> {
    return (await fetchPosts({ ...params, page: this.currentPage })).data;
  }
}
