export class PostId {
  id = 0;
  title = "";
  content = "";
  location = "";
  capacity = 0;
  date = "";
  timeOfDay = 0;
  createdDate = "";
  author!: Author;
  category!: Category;
  tags!: Tag;
  comments!: Comments;
}

export class Category {
  id = 0;
  isActive = false;
  title = "";
}

export class Tag {
  id = 0;
  title = "";
}

export class Comments {
  id = 0;
  content = "";
  createdDate = "";
  parentComment = 0;
  author!: Author;
  isActive = false;
}

export class Author {
  id = 0;
  password = "";
  lastLogin = "";
  isSuperuser = false;
  email = "";
  name = "";
  isActive = false;
  isStaff = false;
  createDate = "";
  verification = false;
  verificationKey = "";
  groups = 0;
  userPermissions = 0;
}
