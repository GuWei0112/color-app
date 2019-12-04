import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import sizes from "../styles/sizes";

const drawerWidth = 400;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    width: "100%"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 10px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  navBtns: {
    marginRight: "1rem",
    "& a": { textDecoration: "none" },
    [sizes.down("xs")]: {
      marginRight: "0.5rem"
    }
  },
  navBtn: {
    margin: "0 0.5rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  buttons: {
    width: "100%"
  },
  button: {
    width: "50%"
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  colorInput: {
    width: "100%",
    height: "70px"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "1rem"
  }
}));

export default ({ savePalette, history, palettes }) => {
  const maxColors = 20;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("teal");
  const [colors, setColors] = useState([]);
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setnewPaletteName] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrnetColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const addNewColor = () => {
    let newColor = {
      color: currentColor,
      name: newColorName
    };
    setColors([...colors, newColor]);
  };

  const handleChange = e => {
    setNewColorName(e.target.value);
  };

  const handleSavePalette = emoji => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: emoji
    };
    savePalette(newPalette);
    history.push("/");
  };

  const removeColor = name => {
    setColors(colors.filter(color => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    let rand ;
    let randomColor;
    let IsDuplicate = true;
    while (IsDuplicate) {
      rand = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[rand];
      IsDuplicate = colors.some(color => color.name === randomColor.name);
    }
    setColors(prevColor => {
      return [...prevColor, randomColor];
    });
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        palettes={palettes}
        classes={classes}
        open={open}
        handleDrawerOpen={() => handleDrawerOpen()}
        handleSavePalette={emoji => handleSavePalette(emoji)}
        newPaletteName={newPaletteName}
        setnewPaletteName={setnewPaletteName}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={() => clearColors()}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => addRandomColor()}
              disabled={colors.length >= maxColors}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            currentColor={currentColor}
            newColorName={newColorName}
            maxColors={maxColors}
            colors={colors}
            updateCurrnetColor={updateCurrnetColor}
            addNewColor={addNewColor}
            handleChange={handleChange}
            palettes={palettes}
            classes={classes}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <ul>
          <DraggableColorList
            axis="xy"
            onSortEnd={onSortEnd}
            colors={colors}
            removeColor={name => removeColor(name)}
            distance={20}
          />
        </ul>
      </main>
    </div>
  );
};
