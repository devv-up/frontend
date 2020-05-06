import Vue from "vue";
import Vuex from "vuex";
import { SearchState } from "search";
import { UserState } from "user";
import { CategoryTagState } from "board";

Vue.use(Vuex);

export interface RootState {
  Search: SearchState;
  user: UserState;
  categorytag: CategoryTagState;
}

export default new Vuex.Store<RootState>({});
