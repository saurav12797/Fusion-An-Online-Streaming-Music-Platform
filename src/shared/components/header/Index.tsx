import React from "react";
import "./header.css";

import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <input placeholder="Search for Artists, Songs" />
      </div>
    </div>
  );
}

export default Header;
