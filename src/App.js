import React from "react";
import Day from "./Day";
import "./styles.css";

/*

  . List of days with data (weather, image, temp, name of the day)
  . For each of them i need to create a card
  . Wrap them up in a component

*/

const days = [
  { day: "monday", min: 15, max: 20, image: "images/cloudy.png" },
  { day: "tuesday", min: 12, max: 32, image: "images/sun.png" },
  { day: "wednesday", min: 2, max: 55, image: "images/rainy.png" },
  { day: "thursday", min: 4, max: 28, image: "images/sun.png" },
  { day: "friday", min: 5, max: 15, image: "images/snowy.png" }
];

export default function App() {
  const dayComponents = days.map((element, index) => {
    return (
      <Day
        key={index}
        day={element.day}
        min={element.min}
        max={element.max}
        image={element.image}
      />
    );
  });

  return <div className="App">{dayComponents}</div>;
}
