import {
  Module,
  VuexModule,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import { Category, Tag, BoardState, Post } from "board";
import { getPosts } from "@/api/board";
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

  @Action
  public async getPosts(page = 1) {
    const data = await getPosts({ page });
    if (data) this.context.commit("SET_POSTS", data);
  }
}
export const BoardModule = getModule(Board);
