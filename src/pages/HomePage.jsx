import React from 'react'
import { Link } from "react-router-dom";
import Experiences from "../components/Experiences"
import Knowledge from '../components/Knowledge';

import heroImage from "../assets/maxtest.png"

const HomePage = () => {
  return (
    <>
        <div className="herocontainer">
          <img className="heroimg" src={heroImage} alt="Max Samuelsson bild" />
        </div>
      <main>
        <div className="main">
          <div className="info">
            <h2>Om mig</h2>
            <p>
              Intresse för webbutveckling och design, noggrann och gillar utmaningar.
              <br />
              Studerar som .NET Fullstack-utvecklare på Chas Academy.
              <br />
              <Knowledge />
            </p>
            <a className="linkBtn" href="/projects">
              Portfolio
            </a>
            <a className="linkBtn" href="https://github.com/xammax1337" target="_blank">
              GitHub
            </a>
          </div>
          <div className="info">
            <Experiences />
          </div>
        </div>   
      </main>
    </>
  )
}

export default HomePage