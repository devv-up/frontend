declare module "board" {
  export interface Category {
    id: number;
    name: string;
  }

  export interface Tag {
    id: number;
    name: string;
  }

  export interface Post {
    id: number;
    title: string;
    content: string;
    location: string;
    capacity: number;
    date: string;
    timeOfDay: number;
    author: string;
    categories: Category[];
    tags: Tag[];
    images: Array<string>;
  }

  export interface PostsState {
    posts: Post[];
  }

  export interface CategoryTagState {
    categories: Category[];
    tags: Tag[];
  }
}
