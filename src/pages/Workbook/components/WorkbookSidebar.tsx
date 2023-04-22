import React, { useEffect, useRef, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SidebarList } from '../style';
import { workbookSidebarItem } from '../../../types/workbookItem';

interface SidebarProps {
  onMenuClick: (publisher: string, category: string) => void;
  workbookListSummary: workbookSidebarItem[];
}

export default function WorkbookSidebar({
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
    const newOpenArray = open.map((o, idx) => (idx === _idx ? !o : o));
    setOpen(newOpenArray);
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
      <ListItemButton
        onClick={(e) => handlePublisherClick(e, -1, 'all')}
        className="sidebar-menu"
      >
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="전체" />
      </ListItemButton>

      {workbookListSummary?.map((group) => {
        return (
          <>
            <ListItemButton
              key={group.id}
              onClick={(e) =>
                handlePublisherClick(e, group.id, group.publisher)
              }
              className="sidebar-menu"
            >
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={group.publisher} />
              {open[group.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
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
                      sx={{ pl: 4 }}
                      onClick={(e) =>
                        handleCategoryClick(e, group.publisher, category)
                      }
                    >
                      <ListItemIcon>
                        <AutoStoriesIcon fontSize="small" />
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
