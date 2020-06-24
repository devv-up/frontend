import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { PostId } from "@/store/models/detail";
import { getPostId } from "@/utils/api/post";

@Module
export default class DetailModule extends VuexModule {
  //State
  public detailState: PostId = {
    id: 0,
    title: "",
    content: "",
    location: "",
    capacity: 0,
    date: "",
    timeOfDay: 0,
    createdDate: "",
    author: {
      id: 0,
      password: "",
      lastLogin: "",
      isSuperuser: false,
      email: "",
      name: "",
      isActive: false,
      isStaff: false,
      createDate: "",
      verification: false,
      verificationKey: "",
      groups: 0,
      userPermissions: 0
    },
    category: {
      id: 0,
      title: "",
      isActive: false
    },
    tags: {
      id: 0,
      title: ""
    },
    comments: {
      id: 0,
      content: "",
      createdDate: "",
      parentComment: 0,
      author: {
        id: 0,
        password: "",
        lastLogin: "",
        isSuperuser: false,
        email: "",
        name: "",
        isActive: false,
        isStaff: false,
        createDate: "",
        verification: false,
        verificationKey: "",
        groups: 0,
        userPermissions: 0
      },
      isActive: false
    }
  };

  //Mutation
  @Mutation
  DetailMuta(postid: PostId) {
    this.detailState = postid;
    return this.detailState;
  }

  //Action
  @Action({ commit: "DetailMuta" })
  async DetailAction(): Promise<PostId> {
    return await (await getPostId({})).data;
  }

  get DetailData(): PostId {
    return this.detailState;
  }


}
