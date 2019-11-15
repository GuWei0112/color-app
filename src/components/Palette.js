import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";

import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import style from "../styles/palette.style";

export default withStyles(style)(({ Paltette,classes }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = Paltette.colors[level].map(color => {
    return (
      <ColorBox
        background={color[format]}
        key={color.name}
        name={color.name}
        showLink={true}
        moreUrl={`/palette/${Paltette.id}/${color.id}`}
      />
    );
  });
  const changeLevel = newLevel => {
    setLevel(newLevel);
  };
  const changeFormat = e => {
    setFormat(e.target.value);
  };
  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showAllColor={true}
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      <PaletteFooter Paltette={Paltette} />
    </div>
  );
});
