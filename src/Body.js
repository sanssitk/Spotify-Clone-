import React, { useState } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseIcon from "@material-ui/icons/Pause";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import QueryBuilderSharpIcon from "@material-ui/icons/QueryBuilderSharp";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, user, playing }, dispatch] = useDataLayerValue();

  const [navBar, setNavBar] = useState(false);

  const playIconHandler = () => {
    dispatch({
      type: "SET_PLAYING",
      playing: !playing,
    });
  };

  const onScrollHandler = () => {
    let lastScrollY = window.scrollY;
    
    document.querySelector(".body").addEventListener("scroll", () => {
      if (lastScrollY > 0) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });       
    console.log(lastScrollY);
    // console.log(navBar);
  };

  return (
    <div className="body" onScroll={onScrollHandler}>
      <div className="body__top">
        <div>
          <Header spotify={spotify} navBar={navBar}/>
          <div className="body__info">
            <div className="album__cover">
              <img src={discover_weekly?.images[0].url} alt="" />
              <div className="middle">
                <EditOutlinedIcon className="edit__icon" />
                <div className="text">Choose Photo</div>
              </div>
            </div>
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>{discover_weekly?.name}</h2>
              <p>{discover_weekly?.description}</p>
              <p>
                <strong>{user?.display_name} -</strong>
                {discover_weekly?.tracks?.items?.length} songs,{" "}
                {discover_weekly?.tracks?.limit} min 50sec
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          {!playing ? (
            <PlayArrowSharpIcon
              className="body__shuffle"
              onClick={playIconHandler}
            />
          ) : (
            <PauseIcon className="body__shuffle" onClick={playIconHandler} />
          )}

          <FavoriteIcon fontSize="small" />
          <MoreHorizIcon fontSize="small" />
        </div>
        <div className="songs__Title">
          <div className="sNo">#</div>
          <div className="title">TITLE</div>
          <div className="album">ALBUM</div>
          <div className="date_added">DATE ADDED</div>
          <div className="duration">
            <QueryBuilderSharpIcon className="clock" />
          </div>
        </div>
        <hr />

        {/* List of Songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
