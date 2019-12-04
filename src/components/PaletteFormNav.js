import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import PaletteMetaForm from "./PaletteMetaForm";

export default ({
  classes,
  open,
  handleDrawerOpen,
  handleSavePalette,
  newPaletteName,
  setnewPaletteName
}) => {
  const [openDialog, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, { [classes.hide]: open })}
          >
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.navBtn}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            className={classes.navBtn}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {openDialog && (
        <PaletteMetaForm
          open={openDialog}
          handleSavePalette={handleSavePalette}
          newPaletteName={newPaletteName}
          setnewPaletteName={setnewPaletteName}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};
