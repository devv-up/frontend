export class Post {
  id: number = 0;
  title: string = "";
  content: string = "";
  location: string = "";
  capacity: number = 0;
  date: string = "";
  timeOfDay: number = 0;
  author: string = "";
  categories: Category[] = [];
  tags: Tag[] = [];
  images: Array<string> = [];
  isLike: boolean = false;
}

export class Category {
  id: number = 0;
  name: string = "";
}

export class Tag {
  id: number = 0;
  name: string = "";
}
