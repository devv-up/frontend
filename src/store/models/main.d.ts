export interface Title {
    id: Number;
    title: String;
}

export interface Content {
    id: Number;
    content: String;
}

export interface Author {
    id: Number;
    password: String;
    email: String;
    name: String;
    verification_key: String;
}

export interface StartDate {
    id: Number;
    date: String;
}

export interface EndDate {
    id: Number;
    date: String;
}

export interface TimeOfDay {
    id: Number;
    time: String;
}

export interface Location {
    id: Number;
    name: String;
}

export interface Category {
    id: Number;
    title: String;
}

export interface Tag {
    id: Number;
    title: String;
}

export interface Comments {
    id: Number;
    content: String;
    createdDate: String;
}

export interface Detail {
    id: Number;
    title: String;
    content: String;
    location: String;
    capacity: Number;
    date: String;
    timeOfDay: Number;
    createdDate: String;
    author: Author[];
    category: Category[];
    tags: Tag[];
    comments: Comments[];
}
  
  