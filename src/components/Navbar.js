import React, { useState } from "react";
import Slider from "rc-slider";
import "../css/Navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {Link} from 'react-router-dom'
export default ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);
  const handleValueChange = e => {
    setOpen(true)
    setFormat(e.target.value);
    handleChange(e);
  };
  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="Slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={newLevel => changeLevel(newLevel)}
            step={100}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={e => handleValueChange(e)}>
          <MenuItem value="hex">Hex - #ffffff</MenuItem>
          <MenuItem value="rgb">Rgb - (255,255,255)</MenuItem>
          <MenuItem value="rgba">Rgba - (255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={() => setOpen(false)}
        action={[
          <IconButton
            color="inherit"
            key="close"
            aria-label="close"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
};
