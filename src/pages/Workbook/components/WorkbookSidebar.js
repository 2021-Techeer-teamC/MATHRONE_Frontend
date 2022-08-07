
import ElementPopper from "react-element-popper";
import "react-element-popper/build/element_popper.css";

import React, { useEffect, useRef, useState } from "react";

export default function NavBarTest(props) {
    const [navItem, setNavItem] = useState("")
    const navBarRef = useRef()

    useEffect(() => {
        function handleClickOutSide(e) {
            if (
                (
                    navBarRef.current &&
                    !navBarRef.current.contains(e.target) &&
                    !e.target.classList.contains("navbar-item")
                ) ||
                e.target.classList.contains("navbar")
            ) {
                setNavItem("")
            }
        }

        document.addEventListener("click", handleClickOutSide)

        return () => document.removeEventListener("click", handleClickOutSide)
    }, [])

    return (
        <div className="item" style={{ textAlign: 'left' }}>
            <ElementPopper
                //element={<NavItem name={name} />}
                popper={<List items={props.lists} />}
                containerStyle={{ margin: "auto 0" }}
                offsetY={12}
                //position={index === 0 ? "bottom-left" : index === (itemNames.length - 1) ? "bottom-right" : "bottom-center"}
                fixMainPosition
            />
        </div>
    )

    function List({ items }) {
        const [subMenu, setSubMenu] = useState("")

        return (
            <div className="items">
                <Item item={{publisher:'전체'}} id="publisher" />
                {items.map((item, i) => {
                    return (item.categories ?
                        <ElementPopper
                            key={i}
                            element={<Item item={item} id="publisher" />}
                            popper={subMenu === item.publisher && <SubList items={item.categories} catePublisher={item.publisher}/>}
                            containerStyle={{ width: "100%" }}
                            position="right-top"
                        /> :
                        <Item key={i} item={item} id="publisher" />
                    )
                })}
            </div>
        )

        function Item({ item, id }) {
            return (
                <div
                    className="item"
                    onMouseOver={() => openSubMenu(item.publisher)}
                    onClick={() => props.onPublisherClick(item.publisher)}
                >
                    {item.publisher}
                    {item.categories && <span>{">"}</span>}
                </div>
            )
        }

        function openSubMenu(name) {
            setSubMenu(name)
        }

        
    }

    function SubList({ items, catePublisher }) {

        return (
            <div className="items">
                {items.map((item, i) => {
                    return (
                    <SubItem key={i} item={item} catePublisher={catePublisher}/>
                    )
                })}
            </div>
        )

        function SubItem({ item, catePublisher }) {
            return (
                <div
                    className="item"
                    onClick={() => props.onCategoryClick(catePublisher, item)}
                >
                    {item}
                </div>
            )
        }
    }

}