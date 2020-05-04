import { Module, VuexModule, getModule, Mutation, Action } from "vuex-module-decorators";
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
    comments: Comments[] = [];
    detail: Detail[] = [];

    @Mutation
    setDetail(detail: Detail[]){
        this.detail = detail
    }
    
    @Action({ rawError: true })
    async createComments(){
        const comments = await api.addComment()
        return comments
    }
    
    @Action({ commit: 'setDetail'})
    async loadDetail(){
        const detail = await api.getMain()
        return detail
    }

}
export default getModule(Main);