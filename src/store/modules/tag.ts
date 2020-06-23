import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { fetchTags } from "@/utils/api/post";
import { Tag } from "board";

@Module
export default class TagModule extends VuexModule {
  private tagData: Tag[] = [];
  private tagFilters: string[] = [];

  @Mutation
  refreshTags(tagData: Tag[]) {
    this.tagData = tagData;
  }

  @Action({ commit: "refreshTags" })
  async fetchTags(): Promise<Tag[]> {
    return (await fetchTags()).data;
  }

  get tags(): Tag[] {
    return this.tagData;
  }

  @Mutation
  filterTagsWith(tagFilters: string[]): void {
    this.tagFilters = tagFilters;
  }

  get selectedTags(): string[] {
    return this.tagFilters;
  }
}
