export interface workbookItem {
  workbookId: string;
  title: string;
  profileImg: string;
  publisher: string;
  level: string;
  star: number;
}

export interface workbookListItem {
  publisher: string;
  category: string;
  sortType: string;
  pageNum: number;
}

export interface workbookSidebarItem {
  publisher: string;
  categories: string[];
  id: number;
}
