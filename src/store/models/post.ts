export class Post {
  id = 0;
  title = "";
  content = "";
  location = "";
  capacity = 0;
  date = "";
  timeOfDay = 0;
  author = "";
  categories: Category[] = [];
  tags: Tag[] = [];
  images: Array<string> = [];
  isLike = false;
}

export class Category {
  id = 0;
  name = "";
}

export class Tag {
  id = 0;
  name = "";
}
