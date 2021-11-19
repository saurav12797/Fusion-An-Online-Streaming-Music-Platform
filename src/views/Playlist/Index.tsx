import React from "react";
import "./playlist.css";
import Mycard from "../Body/Mycard";
import SidebarPlaylist from "../../shared/components/sidebar/SidebarPlaylist";
import playlistContainer from "../../store/container/playlistContainer";
import { Link } from "react-router-dom";

function Index(props: any) {
  const { itemList } = props;
  return (
    <>
      <div className="myplaylist">
        <div className="liked_song">
          <h1>Liked Songs</h1>
          <h3>0 Liked Songs</h3>
        </div>
        <div className="libraryPlaylist">
          {itemList?.map((myItem: any) => (
            <Link to={`/PlaylistDetails/${myItem.key}`}>
              <Mycard
                p={myItem.item}
                img={`https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png`}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default playlistContainer(Index);
