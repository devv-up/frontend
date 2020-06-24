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
  public searchCategory = 0; // category.id
  public searchTag: object = {}; // tag.id

  public times = [
    { id: "morning", time: "06:00 ~ 12:00" },
    { id: "afternoon", time: "12:00 ~ 18:00" },
    { id: "evening", time: "18:00 ~ 24:00" }
  ];

  get timeText() {
    // times.time
    const t = this.times.find(t => t.id === this.searchTime);
    return t ? t.time : "시간";
  }

  @Mutation
  private SET_SEARCH_TEXT(searchText: string) {
    this.searchText = searchText;
  }

  @Mutation
  private SET_SEARCH_DATE(searchDate: string) {
    this.searchDate = searchDate;
  }

  @Mutation
  private SET_SEARCH_TIME(searchTime: string) {
    this.searchTime = searchTime;
  }

  @Mutation
  private SET_SEARCH_CATEGORY_ID(searchCategory: number) {
    this.searchCategory = searchCategory;
  }

  @Mutation
  private SET_SEARCH_TAG(searchTag: object) {
    this.searchTag = searchTag;
  }

  @Action
  public async submit() {
    router.push({
      path: "/",
      query: {
        searchtext: this.searchText,
        searchdate: this.searchDate,
        searchtime: this.searchTime,
        searchcategory: String(this.searchCategory),
        searchtag: this.searchTag.toString()
      }
    });
  }
}
export const SearchModule = getModule(Search);
