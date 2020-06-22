declare module "detail" {
  export interface PostId {
    id: number;
    title: string;
    content: string;
    location: string;
    capacity: number;
    date: string;
    timeOfDay: number;
    createdDate: string;
    author: string;
    category: Category;
    tags: Tag;
    comments: Comments;
  }

  export interface Category {
    id: number;
    name: string;
  }

  export interface Tag {
    id: number;
    name: string;
  }

  export interface Comments {
    id: number;
    content: string;
    createdDate: string;
    parentComment: number;
    author: string;
    is_active: boolean;
  }
}
