export interface workbookItem {
  workbookId: string;
  title: string;
  thumbnail: string;
  publisher: string;
  level: string;
  star: number;
}

export interface workbookSliderItem {
  workbook_id: string;
  title: string;
  img: string;
  publisher: string;
  level: number;
  star: boolean;
}

export interface workbookCountItem {
  publisher: string;
  category: string;
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
