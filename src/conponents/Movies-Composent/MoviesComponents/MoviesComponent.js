import React, { Component } from "react";
import "./MoviesComponent.css";
import { Link } from "react-router-dom";
const MoviesCoponent = ({ movie }) => {
  const linkTable = movie.PostUrl;
  return (
    <div>
      <div className="movies">
      <div><h1>PASSER UN BON MOMENT</h1></div>
        <div className="video">
          {linkTable.map((ele) => {
            return (
              <div>

                <div>
                  <h1>{ele.name}</h1>
                  <iframe
                    width="560"
                    height="315"
                    src={ele.postUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/">
        <button className="button-listcards">Retour</button>
      </Link>
    </div>
  );
};
export default MoviesCoponent;
