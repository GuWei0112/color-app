import React, { useState } from "react";
import ReactDOM from "react-dom";
import Paltette from "./components/Palette";
import seedColor from "./components/seedColor";
import { generatePalette } from "./components/colorHelper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './index.css'
const App = () => {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColor);

  const findPaltette = id => {
    return palettes.find(paltette => {
      return paltette.id === id;
    });
  };

  const savePalette = newPalette => {
    let paletteNew = [...palettes, newPalette];
    setPalettes(paletteNew);
    window.localStorage.setItem("palettes", JSON.stringify(paletteNew));
  };

  const deletePalette = id => {
    let paletteFinal = palettes.filter(palette => palette.id !== id);
    setPalettes(paletteFinal);
    window.localStorage.setItem("palettes", JSON.stringify(paletteFinal));
  };

  return (
    <div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={5000} key={location.key}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                    <div className="page">
                      <NewPaletteForm
                        savePalette={newPalette => savePalette(newPalette)}
                        palettes={palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <div className="page">
                      <PaletteList
                        palettes={palettes}
                        deletePalette={id => deletePalette(id)}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <div className="page">
                      <Paltette
                        Paltette={generatePalette(
                          findPaltette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        Paltette={generatePalette(
                          findPaltette(routeProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />
                <Route component={() => <div className="page">404 Not found </div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
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
