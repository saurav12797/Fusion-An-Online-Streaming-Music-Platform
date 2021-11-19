import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

function Index() {
  return (
    <div className="nav">
      <div className="innertext">
        <Link className="text-link" to="/library/playlist">
          {" "}
          Playlist
        </Link>

        <Link className="text-link" to="/library/artist">
          {" "}
          Artist{" "}
        </Link>

        <Link className="text-link" to="/library">
          {" "}
          Prodcast
        </Link>
        <Link className="text-link" to="/library">
          {" "}
          Albums
        </Link>

        {/*  <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
      </div>
    </div>
  );
}

export default Index;
