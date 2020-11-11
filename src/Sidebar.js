import React, { useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDataLayerValue } from "./DataLayer";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Link } from "@material-ui/core";

function Sidebar() {
  const [{ playlists, discover_weekly, id }, dispatch] = useDataLayerValue();

  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>discover", discover_weekly);
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>playlists", playlists);

  useEffect(() => {
    dispatch({
      type: "SET_ID",
      id: id,
    });
  }, [discover_weekly]);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <SidebarOption title="Create Playlist" Icon={AddBoxIcon} />
      <SidebarOption title="Liked Songs" Icon={FavoriteIcon} />

      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} img={playlist.images[0].url} />
      ))}

      <Link className="download__bar">
        <ArrowDownwardIcon />
        <p>Install App</p>
      </Link>
    </div>
  );
}

export default Sidebar;
