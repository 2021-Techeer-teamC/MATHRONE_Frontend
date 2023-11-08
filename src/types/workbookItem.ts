export interface workbookItem {
  workbookId: string;
  title: string;
  thumbnail: string;
  publisher: string;
  level: string;
  star: boolean;
}

export interface workbookDetail extends workbookItem {
  summary: string;
  category: string;
  content: string;
  type: string;
  year: number;
  month: number;
  chapterGroup: [
    {
      group: string;
      chapters: [
        {
          id: number;
          name: string;
        },
      ];
    },
  ];
  tags: [
    {
      id: number;
      name: string;
    },
  ];
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
