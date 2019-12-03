import React, { useState } from "react";
import ReactDOM from "react-dom";
import Paltette from "./components/Palette";
import seedColor from "./components/seedColor";
import { generatePalette } from "./components/colorHelper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
const App = () => {
  const [palettes, setPalettes] = useState(seedColor);

  const findPaltette = id => {
    return palettes.find(paltette => {
      return paltette.id === id;
    });
  };

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              savePalette={newPalette => savePalette(newPalette)}
              palettes={palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Paltette
              Paltette={generatePalette(
                findPaltette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              Paltette={generatePalette(
                findPaltette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route component={() => <div>404 Not found </div>} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/*github needs to add the baseName*/}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
