import Vue from "vue";
import Vuex from "vuex";
import { NavigationMenuState } from "navigation";
import { UserState } from "user";

Vue.use(Vuex);

export interface RootState {
  navigationMenu: NavigationMenuState;
  user: UserState;
}

export default new Vuex.Store<RootState>({});
