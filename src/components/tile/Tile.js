import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.value).map((value, i) => {
        if (i === 0) {
          return (
            <p className="tile-title" key={i}>
              {value}
            </p>
          );
        }
        return (
          <p className="tile" key={i}>
            {value}
          </p>
        );
      })}
    </div>
  );
};
