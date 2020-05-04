import Vue from "vue";
import Vuex from "vuex";
import { SearchState } from "search";
import { UserState } from "user";


Vue.use(Vuex);

export interface RootState {
  Search: SearchState;
  user: UserState;


}

export default new Vuex.Store<RootState>({});
