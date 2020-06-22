import Vue from "vue";
import Vuex from "vuex";
import { SearchState } from "search";
import { UserState } from "user";
import PostModule from "./modules/post";
import CategoryModule from "./modules/category";
import TagModule from "./modules/tag";

Vue.use(Vuex);

export interface RootState {
  Search: SearchState;
  user: UserState;
}

export default new Vuex.Store<RootState>({
  modules: {
    PostModule,
    CategoryModule,
    TagModule
  }
});
