import React from "react";
import { withStyles } from "@material-ui/styles";
import style from "../styles/miniPalette.style";
import DeleteIcon from "@material-ui/icons/Delete";
export default withStyles(style)(
  ({ classes, paletteName, emoji, colors, handleClick, id, openDialog }) => {
    const handledeletePalette = e => {
      e.stopPropagation();      
      openDialog(id)
    };

    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={e => handledeletePalette(e)}
        />
        <div className={classes.colors}>
          {colors.map(color => (
            <div
              className={classes.miniColor}
              style={{ backgroundColor: color.color }}
              key={color.name}
            />
          ))}
        </div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
);
