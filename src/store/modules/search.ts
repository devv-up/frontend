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

  @Mutation
  private SET_SEARCHTEXT(searchText: string) {
    this.searchText = searchText;
  }

  @Action
  public async searchSubmit() {
    // api call
    router.push({
      path: "/",
      query: {
        searchtext: this.searchText
      }
    })
  }
 
}
export const SearchModule = getModule(Search);