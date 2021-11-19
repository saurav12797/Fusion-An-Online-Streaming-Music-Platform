import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./Sidebar.css";
import playlistContainer from "../../../store/container/playlistContainer";

function SidebarPlaylist(props: any) {
  const { itemList, setItemList } = props;
  const [currobj, setobj] = useState<string>();

  function handleClick(e: any, key: string) {
    console.log("right click");
    e.preventDefault();
    setobj(key);
  }

  const deleteItem = () => {
    console.log("detelete");
    const newList = itemList.filter((itemObj: any) => {
      return (
        itemObj !== currobj
      ); /* return all elements except the key match element */
    });
    setItemList(newList);
  };
  const menu = (
    <Menu className="menumain">
      <Menu.Item className="mymenu" key="1">
        Rename
      </Menu.Item>
      <Menu.Item className="mymenu" key="2" onClick={deleteItem}>
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div>
        <br />

        {itemList?.map((itemObj: any) => {
          return (
            <>
              <Dropdown
                className="dropdown"
                key={itemObj.key}
                overlay={menu}
                trigger={["contextMenu"]}
              >
                <div>
                  <Link
                    className="newplaylist "
                    onContextMenu={(e) => handleClick(e, itemObj.key)}
                    to={`/PlaylistDetails/${itemObj.key}`}
                  >
                    {itemObj.item}
                  </Link>

                  <br />
                </div>
              </Dropdown>
            </>
          );
        })}
      </div>
    </>
  );
}

export default playlistContainer(SidebarPlaylist);
