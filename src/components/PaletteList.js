import React from "react";
import { Link } from "react-router-dom";
export default ({ palettes }) => {
  return (
    <div>
      <h1>React colors</h1>
      {palettes.map(palette => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};
