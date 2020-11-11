import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseIcon from "@material-ui/icons/Pause";

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BrandingWatermarkOutlinedIcon from "@material-ui/icons/BrandingWatermarkOutlined";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import { useDataLayerValue } from "./DataLayer";

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PrettoSlider = withStyles({
  thumb: {
    color: "gray",
    height: 10,
    width: 10,
    backgroundColor: "#fff",
    border: "1 solid gray",
    marginTop: -4,
    marginLeft: -6,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  track: {
    color: "gray",
    height: 3,
    borderRadius: 3,
  },
  rail: {
    color: "gray",
    height: 3,
    borderRadius: 3,
  },
})(Slider);

function Footer() {
  const [{ discover_weekly, playing }, dispatch] = useDataLayerValue();

  const playIconHandler = () => {
    dispatch({
      type: "SET_PLAYING",
      playing: !playing,
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="footer__songInfo">
          <h4>{discover_weekly?.tracks?.items[0]?.track?.name}</h4>
          <p>{discover_weekly?.tracks?.items[0]?.track?.artists[1].name}</p>
        </div>
        <FavoriteBorderIcon fontSize="small" className="footer__left__icons" />
        <BrandingWatermarkOutlinedIcon
          fontSize="small"
          className="footer__left__icons"
        />
      </div>

      <div className="footer__center">
        <div className="footer__center__Top">
          <ShuffleIcon className="footer__icon" />
          <SkipPreviousIcon className="footer__icon" />

          {!playing ? (
            <PlayArrowSharpIcon
              onClick={playIconHandler}
              className="playIcon"
            />
          ) : (
            <PauseIcon onClick={playIconHandler} className="playIcon" />
          )}

          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__icon" />
        </div>
        <div className="footer__videoProgress">
          <p>0:00</p>
          {/* <hr /> */}
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={0}
            className="footer__right__icon"
          />
          {/* <Slider /> */}
          <p>4:20</p>
        </div>
      </div>

      <div className="footer__right">
        <PlaylistPlayIcon className="footer__right__icon" />
        <LaptopChromebookIcon className="footer__right__icon" />
        <VolumeDownIcon className="footer__right__icon" />
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={15}
          className="footer__right__icon"
        />
      </div>
    </div>
  );
}

export default Footer;
