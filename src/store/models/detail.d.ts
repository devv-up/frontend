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
    author: Author;
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

  export interface Author {
    id: number;
    password: string;
    last_login: string;
    is_superuser: number;
    email: string;
    name: string;
    is_active: boolean;
    is_staff: boolean;
    create_date: string;
    verification: boolean;
    verification_key: string;
    groups: number;
    user_permissions: number;
  }
}
