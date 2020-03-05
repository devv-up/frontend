import {
  Module,
  VuexModule,
  getModule,
  Mutation
} from "vuex-module-decorators";
import { Menu, NavigationMenuState } from "navigation";
import store from "@/store";

@Module({ dynamic: true, store, name: "board" })
class Navigation extends VuexModule implements NavigationMenuState {
  public myPageMenu: Menu[] = [
    { title: "신청내역" },
    { title: "개설내역" },
    { title: "찜내역" },
    { title: "최근 본 모임" }
  ];
  public customerServiceMenu: Menu[] = [
    { title: "공지사항" },
    { title: "FAQ" }
  ];
  public drawer = false;

  @Mutation
  updateDrawer(value: boolean) {
    this.drawer = value;
  }
}
export const NavigationModule = getModule(Navigation);
