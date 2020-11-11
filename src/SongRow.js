import React from "react";
import "./SongRow.css";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseIcon from "@material-ui/icons/Pause";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track }) {
  const [{ playing }, dispatch] = useDataLayerValue();

  return (
    <div className="songRow">
      {/* {!playing ? (
        <PlayArrowSharpIcon />
      ) : (
        <PauseIcon />
      )} */}
      <PlayArrowSharpIcon />

      <div className="songRow__info__title">
        <img
          className="songRow__coverImg"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="songRow__title__details">
          <h1>{track.name.split(" ").splice(0, 7).join(" ")}</h1>
          <p>{track.artists.map((artist) => artist.name)}</p>
        </div>
      </div>

      <div className="songRow__album">
        <p>{track.album.name}</p>
      </div>

      <div className="songRow__dateRelease">
        <p>{track.album.release_date}</p>
      </div>

      <div className="songRow__time">
        <FavoriteBorderOutlinedIcon />
        <p>
          {Math.floor(track.duration_ms / 60000)} :{" "}
          {((track.duration_ms % 60000) / 1000).toFixed(0)}
        </p>
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default SongRow;
