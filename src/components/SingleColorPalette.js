import React, { useState } from "react";
import ColorBox from "./ColorBox";
export default ({ Paltette, colorId }) => {
  const gatherShades = (palette, colorToFilter) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilter)
      );
    }
    return shades.slice(1);
  };

  const [shade, setShade] = useState(gatherShades(Paltette, colorId));

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">
        {shade.map(color => (
          <ColorBox
            background={color.hex}
            key={color.name}
            name={color.name}
            moreUrl={"/"}
            showLink ={false}
          />
        ))}
      </div>
    </div>
  );
};
