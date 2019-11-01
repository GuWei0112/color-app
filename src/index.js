import React from "react";
import ReactDOM from "react-dom";
import Paltette from "./components/Palette";
import seedColor from "./components/seedColor";
import { generatePalette } from "./components/colorHelper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
const App = () => {
  const findPaltette = id => {
    return seedColor.find(paltette => {
      return paltette.id === id;
    });
  };
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColor} {...routeProps} />
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
            colorId ={routeProps.match.params.colorId}
            Paltette={generatePalette(
              findPaltette(routeProps.match.params.paletteId)
            )} />
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
