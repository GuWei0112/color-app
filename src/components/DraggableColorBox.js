import chroma from "chroma-js";
import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import sizes from "../styles/sizes";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transition: "scale(1.5)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    color: props =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.6)"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

export default SortableElement(
  withStyles(styles)(({ color, classes, name, handleClick }) => {
    return (
      <div className={classes.root}>
        <div className={classes.boxContent} style={{ backgroundColor: color }}>
          <span >{name}</span>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={() => {
              handleClick(name);
            }}
          />
        </div>
      </div>
    );
  })
);
