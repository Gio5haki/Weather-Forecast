import React from "react";
import "./Day.css";

export default function Day({ day, min, max, image }) {
  return (
    <div className="day-wrapper">
      <span className="day-name">{day}</span>
      <img className="day-image" src={image} alt="sun" />
      <span className="day-temperature">
        {min}° {max}°
      </span>
    </div>
  );
}
