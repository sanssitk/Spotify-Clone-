import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Header({ navBar}) {
  const [{ user, token }, dispatch] = useDataLayerValue();
  const [dropDown, setDropDown] = useState(false); 

  const AvatarHandler = () => {
    setDropDown(!dropDown);
  };

  const LogoutHandler = () => {
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
  };

  return (
    <div className={navBar ? "header active" : "header"}>
    {/* // <div className={"header"}> */}
      <div className="header__left">
        <ChevronLeftIcon />
        <ChevronRightIcon />
        <div className="header__searchBox">
          <SearchIcon fontSize="small" />
          <input
            type="text"
            placeholder="Search for Artists, Songs or Podcasts.."
          />
        </div>
      </div>
      <div className="header__right" onClick={AvatarHandler}>
        <Avatar
          className="avatar__profile"
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h5>{user?.display_name}</h5>
        {dropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>

      {dropDown ? (
        <div className="header__dropMenu">
          <ul>
            <li>Account</li>
            <li>Profile</li>
            <hr />
            <li onClick={LogoutHandler}>Log Out</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
