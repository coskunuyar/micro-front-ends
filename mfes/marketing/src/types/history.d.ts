declare module "history" {
  export function createMemoryHistory({
    initialEntries,
  }: {
    initialEntries: string[];
  }): any;
  export function createBrowserHistory(): any;
  export function listen(callback: () => void): any;
}
