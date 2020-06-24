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
    isActive: boolean;
    title: string;
  }

  export interface Tag {
    id: number;
    title: string;
  }

  export interface Comments {
    id: number;
    content: string;
    createdDate: string;
    parentComment: number;
    author: Author;
    isActive: boolean;
  }

  export interface Author {
    id: number;
    password: string;
    lastLogin: string;
    isSuperuser: boolean;
    email: string;
    name: string;
    isActive: boolean;
    isStaff: boolean;
    createDate: string;
    verification: boolean;
    verificationKey: string;
    groups: number;
    userPermissions: number;
  }
}
