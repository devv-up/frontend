declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'layout' {
  export interface Links {
    name: string;
    link: string;
  }
}
