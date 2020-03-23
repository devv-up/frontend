import Vue from "vue";
import Vuex from "vuex";
import { SearchState } from "search";
import { UserState } from "user";
import { CategoryTagState, PostsState } from "board";

Vue.use(Vuex);

export interface RootState {
  Search: SearchState;
  user: UserState;
  categorytag: CategoryTagState;
  posts: PostsState;
}

export default new Vuex.Store<RootState>({});
