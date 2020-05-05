declare module "board" {
  export interface Category {
    id: number;
    title: string;
  }

  export interface Tag {
    id: number;
    title: string;
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
    isLike: boolean;
  }
}
