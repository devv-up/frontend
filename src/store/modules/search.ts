import {
  Module,
  VuexModule,
  getModule,
  Mutation
} from "vuex-module-decorators";
import { SearchState } from "search";
import store from "@/store";

@Module({ dynamic: true, store, name: "search" })
class Search extends VuexModule implements SearchState {
  public searchText: string = "";

  @Mutation
  private SET_SEARCHTEXT(searchText: string) {
    this.searchText = searchText;
  }
 
}
export const SearchModule = getModule(Search);