import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { fetchTags } from "@/utils/api/post";
import { Tag } from "@/store/models/tag";

@Module
export default class TagModule extends VuexModule {
  private tagData: Tag[] = [];

  @Mutation
  refreshTags(tagData: Tag[]) {
    this.tagData = tagData;
  }

  @Action({ commit: "refreshTags" })
  async fetchTags(): Promise<Tag[]> {
    return await (await fetchTags()).data;
  }

  get tags(): Tag[] {
    return this.tagData;
  }
}
