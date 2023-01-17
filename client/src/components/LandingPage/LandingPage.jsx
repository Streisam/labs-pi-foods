import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";


export default function LandingPage() {
    return (
    <div className="landing">
      <div className="container" id="filt">
        <div>
          <h1>Recipes</h1>
          <div>
            <Link to="/home">
              <button className="btnHome">Go Home!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}