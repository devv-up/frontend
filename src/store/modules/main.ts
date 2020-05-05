import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Comments, Detail } from "@/store/models/main";
import store from "@/store";
import * as api from "@/store/api/api";

@Module({
  dynamic: true,
  store,
  name: "main",
  namespaced: true
})
class Main extends VuexModule {
  
}
export default getModule(Main);
