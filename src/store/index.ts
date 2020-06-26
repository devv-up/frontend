import Vue from "vue";
import Vuex from "vuex";

import { User, SignedInUser } from "@/store/models/user";
import { Post } from "@/store/models/post";
import { Category } from "@/store/models/category";
import { Tag } from "@/store/models/tag";

import PostModule from "./modules/post";
import CategoryModule from "./modules/category";
import TagModule from "./modules/tag";
import DetailModule from "./modules/detail";
import AddCommentModule from "./modules/addComment";
import DeleteCommentModule from "./modules/deleteComment";

Vue.use(Vuex);

export interface RootState {
  Post: Post;
  Category: Category;
  Tag: Tag;
  User: User;
  SignedInUser: SignedInUser;
}

export default new Vuex.Store<RootState>({
  modules: {
    PostModule,
    CategoryModule,
    TagModule,
    DetailModule,
    AddCommentModule,
    DeleteCommentModule
  }
});
