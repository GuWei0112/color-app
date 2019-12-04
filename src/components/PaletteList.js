import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import style from "../styles/paletteList.style";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avator from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

export default withStyles(style)(
  ({ palettes, classes, history, deletePalette }) => {
    const [deleteDialog, setDelete] = useState(false);
    const [deleteid, setDeleteid] = useState("");

    const openDialog = id => {
      setDeleteid(id);
      setDelete(true);
    };

    const closeDialog = () => {
      setDelete(false);
    };  

    const goToPalette = id => {
      history.push(`/palette/${id}`);
    };

    const deleteFinalPalette =id=>{
      closeDialog()
      deletePalette(id)
    }
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palette}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  handleClick={() => goToPalette(palette.id)}
                  openDialog={id => openDialog(id)}
                  key={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={deleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={() => closeDialog()}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={() => deleteFinalPalette(deleteid)}>
              <ListItemAvatar>
                <Avator
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avator>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={() => closeDialog()}>
              <ListItemAvatar>
                <Avator style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avator>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
);
