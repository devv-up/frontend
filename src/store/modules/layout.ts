import {
  Module,
  VuexModule,
  getModule,
  Mutation
} from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: "layout" })
class Layout extends VuexModule {
  public dialog = false;

  @Mutation
  private SET_DIALOG(dialog: boolean) {
    this.dialog = dialog;
  }
}
export const LayoutModule = getModule(Layout);
