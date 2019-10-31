import React from "react";
import ReactDOM from "react-dom";
import Paltette from "./components/Palette";
import seedColor from "./components/seedColor";
import { generatePalette } from "./components/colorHelper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList";
const App = () => {
  const findPaltette = id => {
    return seedColor.find(paltette => {
      return paltette.id === id;
    });
  };
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColor}/>} />
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
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
