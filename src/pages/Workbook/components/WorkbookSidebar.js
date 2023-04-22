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

const menu = [
  {
    name: 'EBS',
    children: [
      {
        name: '수능특강',
        id: '수능특강',
      },
      {
        name: '수능완성',
        id: '수능완성',
      },
      {
        name: '기출문제 모음',
        id: '기출문제 모음',
      },
    ],
  },
  {
    name: '모의고사',
    children: [
      {
        name: '6월 모의고사',
        id: '6월 모의고사',
      },
      {
        name: '9월 모의고사',
        id: '9월 모의고사',
      },
      {
        name: '수능기출',
        id: '수능기출',
      },
    ],
  },
];
export default function WorkbookSidebar() {
  const [open, setOpen] = useState([true, true]);

  const handleClick = (_idx) => {
    if (_idx === undefined || null) return;
    const newOpenArray = open.map((o, idx) => (idx === _idx ? !o : o));
    setOpen(newOpenArray);
  };
  return (
    <SidebarList component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick} className="sidebar-menu">
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="전체" />
      </ListItemButton>

      {menu.map((m, mIdx) => {
        return (
          <>
            <ListItemButton
              key={mIdx}
              onClick={() => handleClick(mIdx)}
              className="sidebar-menu"
            >
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={m.name} />
              {open[mIdx] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[mIdx]} timeout="auto" unmountOnExit key={mIdx}>
              {m.children.map((c, _cIdx) => {
                return (
                  <List component="div" disablePadding key={_cIdx}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <AutoStoriesIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={c.name}
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
