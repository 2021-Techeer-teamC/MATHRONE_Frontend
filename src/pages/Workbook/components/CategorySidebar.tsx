import React, { useEffect, useState } from 'react';
import {
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import {
  MenuBook,
  AutoStories,
  // ExpandLess,
  // ExpandMore,
} from '@mui/icons-material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { SidebarList } from '../style';
import { workbookSidebarItem } from '../../../types/workbookItem';

interface SidebarProps {
  onMenuClick: (publisher: string, category: string) => void;
  workbookListSummary: workbookSidebarItem[];
}

export default function CategorySidebar({
  onMenuClick,
  workbookListSummary,
}: SidebarProps) {
  const [open, setOpen] = useState<boolean[]>([]);

  useEffect(() => {
    setOpen(new Array(workbookListSummary?.length).fill(true));
  }, [workbookListSummary]);

  const handlePublisherClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    _idx: number,
    publisher: string,
  ) => {
    // const newOpenArray = open.map((o, idx) => (idx === _idx ? !o : o));
    // setOpen(newOpenArray);
    onMenuClick(publisher, 'all');
  };

  const handleCategoryClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    publisher: string,
    category: string,
  ) => {
    onMenuClick(publisher, category);
  };

  return (
    <SidebarList aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={(e) => handlePublisherClick(e, -1, 'all')}>
        <ListItemIcon>
          <MenuBook />
        </ListItemIcon>
        <ListItemText primary="전체" className="parent-category" />
      </ListItemButton>
      <Divider />
      {workbookListSummary?.map((group) => {
        return (
          <>
            <ListItemButton
              key={group.id}
              onClick={(e) =>
                handlePublisherClick(e, group.id, group.publisher)
              }
            >
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText
                primary={group.publisher}
                className="parent-category"
              />
              {/* {open[group.id] ? <ExpandLess /> : <ExpandMore />} */}
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
