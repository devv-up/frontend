declare module "addComment" {
  export interface AddComment {
    content: string;
    post: number;
    parentComment: number;
    author: number;
  }
}
