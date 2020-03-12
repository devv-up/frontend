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
  public searchTime = ""; // times.id
  
  public times = [
    { id: "morning", time: "06:00 ~ 12:00" },
    { id: "afternoon", time: "12:00 ~ 18:00" },
    { id: "evening", time: "18:00 ~ 24:00" }
  ];

  get timeText() { // times.time
    const t = this.times.find(t => t.id === this.searchTime);
    return t ? t.time : "시간";
  }

  @Mutation
  private SET_SEARCHTEXT(searchText: string) {
    this.searchText = searchText;
  }

  @Mutation
  private SET_SEARCHDATE(searchDate: string) {
    this.searchDate = searchDate;
  }

  @Mutation
  private SET_SEARCHTIME(searchTime: string) {
    this.searchTime = searchTime;
  }

  @Action
  public async searchSubmit() {
    router.push({
      path: "/",
      query: {
        searchtext: this.searchText,
        searchdate: this.searchDate,
        searchtime: this.searchTime
      }
    })
  }
 
}
export const SearchModule = getModule(Search);