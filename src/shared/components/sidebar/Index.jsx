import React from "react";
import "./Sidebar.css";
import SidebarOption from "../sideBarOption/Index";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../views/DataLayer/Index";
import { Link } from "react-router-dom";

import { useState } from "react";

import SidebarPlaylist from "./SidebarPlaylist";

import playlistContainer from "../../../store/container/playlistContainer";

function Sidebar(props) {
  const { setItemList } = props;
  return (
    <div className="sidebar">
      <img
        className="sidelogo"
        src="https://i.ibb.co/Cm33pKb/fusion-logo.png"
        alt=""
      />

      <Link to="/">
        <SidebarOption className="mysidebar" Icon={HomeIcon} title="Home" />
      </Link>

      <Link to="/search">
        <SidebarOption className="mysidebar" Icon={SearchIcon} title="Search" />
      </Link>

      <Link to="/library">
        <SidebarOption
          className="mysidebar"
          Icon={LibraryMusicIcon}
          title=" Your Library"
        />
      </Link>

      <br />

      <button className="addlistBtn" onClick={setItemList}>
        Create Playlist
      </button>

      <hr />
      <strong className="sidebar_title">PLAYLISTS</strong>

      <SidebarPlaylist />
      {/* itemList={itemList} updateItemList={UpdateItemList}  */}

      <SidebarOption title="Hip Hop" />
      <SidebarOption title="Jazz" />
      <SidebarOption title="Romantic" />
      <SidebarOption title="Bollywood" />
    </div>
  );
}

export default playlistContainer(Sidebar);
