import {
  Module,
  VuexModule,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import { Category, Tag, BoardState, Post } from "board";
import { getPosts, getCategories, getTags } from "@/api/board";
import store from "@/store";

@Module({ dynamic: true, store, name: "board" })
class Board extends VuexModule implements BoardState {
  public posts: Post[] = [];
  public categories: Category[] = [];
  public tags: Tag[] = [];

  @Mutation
  private SET_POSTS({ posts }: { posts: Post[] }) {
    this.posts = posts;
  }

  @Mutation
  private SET_CATEGORIES({ categories }: { categories: Category[] }) {
    this.categories = categories;
  }

  @Mutation
  private SET_TAGS({ tags }: { tags: Tag[] }) {
    this.tags = tags;
  }

  @Action
  public async getPosts(page = 1) {
    const data = await getPosts({ page });
    if (data) this.context.commit("SET_POSTS", data);
  }

  @Action
  public async getCategories() {
    const data = await getCategories();
    if (data) this.context.commit("SET_CATEGORIES", data);
  }

  @Action
  public async getTags() {
    const data = await getTags();
    if (data) this.context.commit("SET_TAGS", data);
  }
}
export const BoardModule = getModule(Board);
