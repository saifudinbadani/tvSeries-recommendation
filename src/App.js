import { useState } from "react";
import "./styles.css";

const tvSeriesDB = {
  mostPopular: [
    { name: "Breaking Bad", rating: "5/5" },
    { name: "Game of Thrones S1-S6", rating: "4.5/5" },
    { name: "The Last Dance", rating: "4/5" }
  ],
  thriller: [
    { name: "Fargo Season-1", rating: "5/5" },
    { name: "Mind Hunter", rating: "4/5" },
    { name: "Black Mirror", rating: "4/5" }
  ],
  anime: [
    { name: "Death Note", rating: "4.5/5" },
    { name: "Attack on Titan", rating: "4.5/5" },
    { name: "Dragon Ball Z", rating: "5/5" }
  ]
};

var tvSeriesArray = Object.keys(tvSeriesDB);

export default function App() {
  var [selected, setSelected] = useState("anime");

  function categoriesClickHandler(categories) {
    setSelected(categories);
  }
  return (
    <div className="App">
      <h1> 🎬 tvSeries </h1>
      <p>
        {" "}
        here are some good tv series recommendations to watch by categories{" "}
      </p>
      <div>
        {tvSeriesArray.map(function (categories) {
          return (
            <button
              key={categories}
              onClick={() => categoriesClickHandler(categories)}
            >
              {" "}
              {categories}
            </button>
          );
        })}
      </div>
      <hr />

      <ul>
        {tvSeriesDB[selected].map(function (tvSeries) {
          return (
            <li key={tvSeries.name}>
              <div className="name"> {tvSeries.name}</div>
              <div className="rating"> {tvSeries.rating} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
