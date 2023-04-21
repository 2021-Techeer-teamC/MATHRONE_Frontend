// import ElementPopper from 'react-element-popper';
// // import 'react-element-popper/build/element_popper.css';

import React, { useEffect, useRef, useState } from 'react';

// export default function WorkbookSidebar(props) {
//   const [navItem, setNavItem] = useState('');
//   const navBarRef = useRef();

//   useEffect(() => {
//     function handleClickOutSide(e) {
//       if (
//         (navBarRef.current &&
//           !navBarRef.current.contains(e.target) &&
//           !e.target.classList.contains('navbar-item')) ||
//         e.target.classList.contains('navbar')
//       ) {
//         setNavItem('');
//       }
//     }

//     document.addEventListener('click', handleClickOutSide);

//     return () => document.removeEventListener('click', handleClickOutSide);
//   }, []);

//   return (
//     <div
//       className="item"
//       //style={{ textAlign: 'left' }}
//     >
//       <ElementPopper
//         //element={<NavItem name={name} />}
//         popper={<List items={props.lists} />}
//         containerStyle={{ margin: 'auto 0' }}
//         offsetY={12}
//         //position={index === 0 ? "bottom-left" : index === (itemNames.length - 1) ? "bottom-right" : "bottom-center"}
//         fixMainPosition
//       />
//     </div>
//   );

//   function List({ items }) {
//     const [subMenu, setSubMenu] = useState('');

//     return (
//       <div className="items">
//         <Item item={{ publisher: '전체' }} id="publisher" />
//         {items.map((item, i) => {
//           return item.categories ? (
//             <ElementPopper
//               key={i}
//               element={<Item item={item} id="publisher" />}
//               popper={
//                 subMenu === item.publisher && (
//                   <SubList
//                     items={item.categories}
//                     catePublisher={item.publisher}
//                   />
//                 )
//               }
//               containerStyle={{ width: '100%' }}
//               position="right-top"
//             />
//           ) : (
//             <Item key={i} item={item} id="publisher" />
//           );
//         })}
//       </div>
//     );

//     function Item({ item, id }) {
//       return (
//         <div
//           className="item"
//           onMouseOver={() => openSubMenu(item.publisher)}
//           onClick={() => props.onPublisherClick(item.publisher)}
//         >
//           {item.publisher}
//           {item.categories && <span>{'>'}</span>}
//         </div>
//       );
//     }

//     function openSubMenu(name) {
//       setSubMenu(name);
//     }
//   }

//   function SubList({ items, catePublisher }) {
//     return (
//       <div className="items">
//         {items.map((item, i) => {
//           return <SubItem key={i} item={item} catePublisher={catePublisher} />;
//         })}
//       </div>
//     );

//     function SubItem({ item, catePublisher }) {
//       return (
//         <div
//           className="item"
//           onClick={() => props.onCategoryClick(catePublisher, item)}
//         >
//           {item}
//         </div>
//       );
//     }
//   }
// }

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function WorkbookSidebar() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ marginRight: '16px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Workbook List
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="List 1" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="List 2" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="List 3" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
