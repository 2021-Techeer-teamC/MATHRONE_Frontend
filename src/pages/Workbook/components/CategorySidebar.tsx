import React, { useEffect, useState } from 'react';
import {
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { MenuBook, AutoStories } from '@mui/icons-material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { SidebarList } from '../style';
import { workbookCategoryItem } from '../../../types/workbookItem';

interface SidebarProps {
  onCategoryClick: (publisher: string, category: string) => void;
  categories: workbookCategoryItem[];
}

export default function CategorySidebar({
  onCategoryClick,
  categories,
}: SidebarProps) {
  const [open, setOpen] = useState<boolean[]>([]);

  useEffect(() => {
    setOpen(new Array(categories?.length).fill(true));
  }, [categories]);

  const handlePublisherClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    publisher: string,
  ) => {
    onCategoryClick(publisher, 'all');
  };

  const handleCategoryClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    publisher: string,
    category: string,
  ) => {
    onCategoryClick(publisher, category);
  };

  return (
    <SidebarList aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={(e) => handlePublisherClick(e, 'all')}>
        <ListItemIcon>
          <MenuBook />
        </ListItemIcon>
        <ListItemText primary="전체" className="parent-category" />
      </ListItemButton>
      <Divider />
      {categories?.map((group) => {
        return (
          <>
            <ListItemButton
              key={group.id}
              onClick={(e) => handlePublisherClick(e, group.publisher)}
            >
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText
                primary={group.publisher}
                className="parent-category"
              />
            </ListItemButton>
            <Divider />
            <Collapse
              in={open[group.id]}
              timeout="auto"
              unmountOnExit
              key={group.publisher}
            >
              {group.categories.map((category, categoryIdx) => {
                return (
                  <List component="div" disablePadding key={categoryIdx}>
                    <ListItemButton
                      className="subWorkbook-button"
                      onClick={(e) =>
                        handleCategoryClick(e, group.publisher, category)
                      }
                    >
                      <ListItemIcon>
                        <AutoStories fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={category}
                        className="subWorkbook-title"
                      />
                    </ListItemButton>
                  </List>
                );
              })}
            </Collapse>
          </>
        );
      })}
    </SidebarList>
  );
}
