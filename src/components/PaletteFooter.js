import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/palettefooter.style";
export default withStyles(styles)(({ Paltette, classes }) => {
  return (
    <footer className={classes.PaletteFooter}>
      {Paltette.paletteName}
      <span className={classes.emoji}>{Paltette.emoji}</span>
    </footer>
  );
});
