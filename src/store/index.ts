import Vue from "vue";
import Vuex from "vuex";
import { SearchState } from "search";
import { UserState } from "user";
import { CategoryTagState } from "board";
import { StartDate, EndDate, TimeOfDay, Location, Category, Tag } from "@/store/models/main";

Vue.use(Vuex);

export interface RootState {
  Search: SearchState;
  user: UserState;
  categorytag: CategoryTagState;
  startDate: StartDate;
  endDate: EndDate;
  timeOfDay: TimeOfDay;
  location: Location;
  categories: Category;
  tags: Tag;
}

export default new Vuex.Store<RootState>({});
