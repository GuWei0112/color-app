import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "../css/Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
export default ({ Paltette }) => {
  const [level, setLevel] = useState(500);
  const colorBoxes = Paltette.colors[level].map(color => {
    return (
      <ColorBox background={color.hex} key={color.name} name={color.name} />
    );
  });
  const changeLevel =(newLevel)=>{
      setLevel(newLevel)
  }
  return (
    <div className="Palette">
      <Slider defaultValue={level} min={100} max={900} onAfterChange={(newLevel)=>changeLevel(newLevel)}
      step={100}
      />
      {/* NavBar */}
      <div className="Palette-colors">
        {/* ColorBox */}
        {colorBoxes}
      </div>
      {/* Footer */}
    </div>
  );
};
