export interface workbookItem {
  workbookId: string;
  title: string;
  profileImg: string;
  publisher: string;
  level: number;
  like: number;
}

export interface workbookSidebarItem {
  publisher: string;
  categories: string[];
  id: number;
}
