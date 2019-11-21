import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import style from "../styles/paletteList.style";

export default withStyles(style)(({ palettes, classes, history }) => {
  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palette}>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              handleClick={() => goToPalette(palette.id)}
              key={palette.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
