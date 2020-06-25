import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { fetchCategories } from "@/utils/api/post";
import { Category } from "@/store/models/category";

@Module
export default class CategoryModule extends VuexModule {
  private categoryData: Category[] = [];

  @Mutation
  refreshCategories(categoryData: Category[]) {
    this.categoryData = categoryData;
  }

  @Action({ commit: "refreshCategories" })
  async fetchCategories(): Promise<Category[]> {
    return await (await fetchCategories()).data;
  }

  get categories(): Category[] {
    return this.categoryData;
  }
}
