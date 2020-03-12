import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { SearchState } from "search";
import store from "@/store";
import router from "@/router";

@Module({ dynamic: true, store, name: "search" })
class Search extends VuexModule implements SearchState {
  public searchText = "";
  public searchDate = "";

  @Mutation
  private SET_SEARCHTEXT(searchText: string) {
    this.searchText = searchText;
  }

  @Mutation
  private SET_SEARCHDATE(searchDate: string) {
    this.searchDate = searchDate;
  }

  @Action
  public async searchSubmit() {
    // api call
    router.push({
      path: "/",
      query: {
        searchtext: this.searchText,
        searchdate: this.searchDate
      }
    })
  }
 
}
export const SearchModule = getModule(Search);