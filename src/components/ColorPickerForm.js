import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default ({
  currentColor,
  newColorName,
  maxColors,
  colors,
  updateCurrnetColor,
  addNewColor,
  handleChange,
  classes,
  palettes
}) => {
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      colors.every(({ color }) => color !== currentColor);
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return true;
      // palettes.every(
      //   ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      // );
    });
  }, [colors, currentColor, palettes]);
  return (
    <div className={classes.picker}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={newColor => updateCurrnetColor(newColor)}
      />
      <ValidatorForm onSubmit={() => addNewColor()}>
        <TextValidator
          value={newColorName}
          placeholder="Color Name"
          onChange={e => handleChange(e)}
          variant="filled"
          margin="normal"
          className={classes.colorInput}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "ColorName must be valid",
            "Color already used"
          ]}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.addColor}
          disabled={colors.length >= maxColors}
          style={{
            backgroundColor: colors.length >= maxColors ? "grey" : currentColor
          }}
          onClick={() => addNewColor()}
        >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  );
};
