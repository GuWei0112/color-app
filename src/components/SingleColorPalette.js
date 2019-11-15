import React, { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import style from '../styles/palette.style'

export default withStyles(style)(({ Paltette, colorId, classes }) => {
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
  const [format, setFormat] = useState("hex");

  const changeFormat = e => {
    setFormat(e.target.value);
  };
  return (
    <div className={classes.Palette}>
      <NavBar showAllColor={false} handleChange={changeFormat} />
      <div className={classes.PaletteColors}>
        {shade.map(color => (
          <ColorBox
            background={color.hex}
            key={color.name}
            name={color[format]}
            moreUrl={"/"}
            showLink={false}
          />
        ))}
        <div className={classes.goBack}>
          <Link to={`/palette/${Paltette.id}`}>
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter Paltette={Paltette} />
    </div>
  );
});
