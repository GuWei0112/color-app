import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
export default ({
  handleSavePalette,
  newPaletteName,
  setnewPaletteName,
  handleClose
}) => {
  const [stage, setStage] = useState("form");
  const showEmojiPick = () => {
    setStage("emoji");
  };
  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={handleClose}>
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
      Choose a title Emoji
    </DialogTitle>
        <Picker
          onSelect={emoji => handleSavePalette(emoji.native)}
          title="Pick a title emoji"
        />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Choose a palette name
        </DialogTitle>
        <ValidatorForm onSubmit={() => showEmojiPick()}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>

            <TextValidator
              value={newPaletteName}
              label="Palette Name"
              name="newPaletteName"
              onChange={e => setnewPaletteName(e.target.value)}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter PaletteName", "Name already used"]}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};
