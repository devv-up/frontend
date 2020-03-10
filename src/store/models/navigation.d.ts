declare module "navigation" {
  export interface Menu {
    title: string;
  }
  export interface NavigationMenuState {
    myPageMenu: Menu[];
    customerServiceMenu: Menu[];
    drawer: boolean;
  }
}
