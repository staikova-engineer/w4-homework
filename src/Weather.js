import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form className="mb-4">
        <input
          type="search"
          className="search-input"
          placeholder="Type the name of the city"
        ></input>
        <input type="submit" className="search-submit" value="Search"></input>
      </form>
      <div className="row">
        <h2>Tallinn</h2>
        <p className="mb-0">Sunday 20:20</p>
        <p>Clouds</p>
      </div>
      <div className="row mb-4">
        <div className="col-sm-6 mb-2">
          <img
            className="weather-img float-left"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="google weather"
          />
          <span className="temp">20</span>
          <span className="degrees">ºC</span>
        </div>
        <div className="col-sm-6 mb-2">
          <ul>
            <li>Precipitation: 70 %</li>
            <li>Wind: 4 m/s</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-2 text-center">
          <div>Mon</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="the same"
          />
          <div>20º</div>
        </div>
        <div className="col-2 text-center">
          <div>Tue</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="the same"
          />
          <div>20º</div>
        </div>
        <div className="col-2 text-center">
          <div>Wed</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="the same"
          />
          <div>20º</div>
        </div>
        <div className="col-2 text-center">
          <div>Thu</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="the same"
          />
          <div>20º</div>
        </div>
        <div className="col-2 text-center">
          <div>Fri</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="the same"
          />
          <div>20º</div>
        </div>
        <div className="col-2 text-center">
          <div>Sat</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="the same"
          />
          <div>20º</div>
        </div>
      </div>
    </div>
  );
}
