import { Module, VuexModule, getModule } from "vuex-module-decorators";
import { Category, Tag, CategoryTagState, PostsState, Post } from "board";
import store from "@/store";

@Module({ dynamic: true, store, name: "board" })
class Board extends VuexModule implements CategoryTagState, PostsState {
  public posts: Post[] = [
    {
      id: 1,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 2,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 3,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 4,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 5,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 6,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 7,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 8,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    },
    {
      id: 9,
      title: "aaa",
      content: "ccccc",
      location: "location",
      capacity: 1,
      date: "4.10",
      timeOfDay: 1,
      author: "dddd",
      categories: [],
      tags: [],
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ]
    }
  ];

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
