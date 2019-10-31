import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "../css/Palette.css";
import Navbar from './Navbar'
export default ({ Paltette }) => {
  const [level, setLevel] = useState(500);
  const [format,setFormat] = useState('hex')
  const colorBoxes = Paltette.colors[level].map(color => {
    return (
      <ColorBox background={color[format]} key={color.name} name={color.name} />
    );
  });
  const changeLevel = newLevel => {
    setLevel(newLevel);
  };
  const changeFormat=(e)=>{
    setFormat(e.target.value)
  }
  return (
    <div className="Palette">
      <Navbar level={level} 
      changeLevel={changeLevel} handleChange={changeFormat}/>
      {/* NavBar */}
      <div className="Palette-colors">
        {/* ColorBox */}
        {colorBoxes}
      </div>
      {/* Footer */}
    </div>
  );
};
