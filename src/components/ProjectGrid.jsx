import { useEffect, useRef, useState } from "react";

// import "../App.css";
export default function ProjectGrid({ set }) {
  const handleClick = (link) => {
    window.open(link); // opens in a new tab
  };

  return (
    <>
      <div className="projectgrid">
        <div className="cell">
          <div
            className="imgcontainer xclone"
            style={{
              backgroundImage: `url(${set[0].image})`,
            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[0].title}</h3>
          </div>

          <div className="overlay">
            {set[0].link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].link)}
              >
                Github
              </button>
            ) : null}

            {set[0].demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].demo_link)}
              >
                Demo
              </button>
            ) : null}
          </div>
        </div>

        <div className="cell">
          <div
            className="imgcontainer fintracker"
            style={{
              backgroundImage: `url(${set[1].image})`,
            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[1].title}</h3>
          </div>

          <div className="overlay">
           {set[1].link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].link)}
              >
                Github
              </button>
            ) : null}

            {set[1].demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].demo_link)}
              >
                Demo
              </button>
            ) : null}
          </div>
        </div>

        <div className="cell">
          <div
            className="imgcontainer webpagerec"
            style={{
              backgroundImage: `url(${set[2].image})`,
            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[2].title}</h3>
          </div>

          <div className="overlay">
            {set[2].link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].link)}
              >
                Github
              </button>
            ) : null}

            {set[2].demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].demo_link)}
              >
                Demo
              </button>
            ) : null}

            
          </div>
        </div>

        <div className="cell">
          <div
            className="imgcontainer webpagerec2"
            style={{
              backgroundImage: `url(${set[3].image})`,
            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[3].title}</h3>
          </div>

          <div className="overlay">

            {set[3].link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].link)}
              >
                Github
              </button>
            ) : null}

            {set[3].demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[3].demo_link)}
              >
                Demo
              </button>
            ) : null}

          </div>
        </div>

        <div className="cell">
          <div
            className="imgcontainer tanks"
            style={{
              backgroundImage: `url(${set[4].image})`,
            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[4].title}</h3>
          </div>

          <div className="overlay">
           {set[4].link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[4].link)}
              >
                Github
              </button>
            ) : null}

            {set[4].demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[4].demo_link)}
              >
                Demo
              </button>
            ) : null}
          </div>
        </div>

        <div className="cell">
          <div
            className="imgcontainer ttt"
            style={{
              backgroundImage: `url(${set[5].image})`,
            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[5].title}</h3>
          </div>

          <div className="overlay">
            {set[5].link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[5].link)}
              >
                Github
              </button>
            ) : null}

            {set[5].demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[5].demo_link)}
              >
                Demo
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
