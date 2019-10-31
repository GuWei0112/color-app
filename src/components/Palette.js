import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "../css/Palette.css";
import Slider from "rc-slider";

export default ({ Paltette }) => {
  const [level, setLevel] = useState(500);
  const colorBoxes = Paltette.colors[level].map(color => {
    return (
      <ColorBox background={color.hex} key={color.name} name={color.name} />
    );
  });
  const changeLevel = newLevel => {
    setLevel(newLevel);
  };
  return (
    <div className="Palette">
      <div className = 'Slider'>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={newLevel => changeLevel(newLevel)}
          step={100}
        />
      </div>
      {/* NavBar */}
      <div className="Palette-colors">
        {/* ColorBox */}
        {colorBoxes}
      </div>
      {/* Footer */}
    </div>
  );
};
