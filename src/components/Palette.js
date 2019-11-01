import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "../css/Palette.css";
import Navbar from "./Navbar";
export default ({ Paltette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = Paltette.colors[level].map(color => {
    return (
      <ColorBox background={color[format]} key={color.name} name={color.name} 
      showLink={true}
     moreUrl={`/palette/${Paltette.id}/${color.id}`}/>
    );
  });
  const changeLevel = newLevel => {
    setLevel(newLevel);
  };
  const changeFormat = e => {
    setFormat(e.target.value);
  };
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {Paltette.paletteName}
        <span className="emoji">{Paltette.emoji}</span>
      </footer>
    </div>
  );
};
