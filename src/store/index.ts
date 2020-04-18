import Vue from "vue";
import Vuex from "vuex";
import { SearchState } from "search";
import { UserState } from "user";
import { BoardState } from "board";

Vue.use(Vuex);

export interface RootState {
  Search: SearchState;
  user: UserState;
  board: BoardState;
}

export default new Vuex.Store<RootState>({});
