export interface Title {
  id: number;
  title: string;
}

export interface Content {
  id: number;
  content: string;
}

export interface Author {
  id: number;
  password: string;
  email: string;
  name: string;
  verification_key: string;
}

export interface StartDate {
  id: number;
  date: string;
}

export interface EndDate {
  id: number;
  date: string;
}

export interface TimeOfDay {
  id: number;
  time: string;
}

export interface Location {
  id: number;
  name: string;
}

export interface Category {
  id: number;
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
}

export interface Detail {
  id: number;
  title: string;
  content: string;
  location: string;
  capacity: number;
  date: string;
  timeOfDay: number;
  createdDate: string;
  author: Author[];
  category: Category[];
  tags: Tag[];
  comments: Comments[];
}
