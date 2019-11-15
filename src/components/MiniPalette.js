import React from "react";
import { withStyles } from "@material-ui/styles";
import style from '../styles/miniPalette.style'

export default withStyles(style)(({ classes, paletteName, emoji, colors,handleClick,id }) => {
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        {colors.map(color => (
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          ></div>
        ))}
      </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
});
