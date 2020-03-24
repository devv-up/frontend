import { Module, VuexModule, getModule } from "vuex-module-decorators";
import { Category, Tag, CategoryTagState } from "board";
import store from "@/store";

@Module({ dynamic: true, store, name: "board" })
class Board extends VuexModule implements CategoryTagState {
  public categories: Category[] = [
    { id: 0, name: "전체" },
    { id: 1, name: "알고리즘" },
    { id: 2, name: "프로젝트" },
    { id: 3, name: "밋업" },
    { id: 4, name: "알고리즘" },
    { id: 5, name: "프로젝트" }
  ];

  public tags: Tag[] = [
    { id: 0, name: "전체" },
    { id: 1, name: "파이썬" },
    { id: 2, name: "자바스크립트" },
    { id: 3, name: "자바" },
    { id: 4, name: "뷰" },
    { id: 5, name: "프론트" },
    { id: 6, name: "리액트" },
    { id: 7, name: "장고" },
    { id: 8, name: "백엔드" }
  ];
}
export const BoardModule = getModule(Board);
