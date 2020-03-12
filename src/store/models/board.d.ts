declare module "board" {
  export interface Category {
    id: number;
    name: string;
  }

  export interface Tag {
    id: number;
    name: string;
  }
  
  export interface CategoryTagState {
    categories: Category[],
    tags: Tag[]
  }
}
