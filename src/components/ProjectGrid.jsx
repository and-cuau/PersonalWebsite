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
            <button className="overlay-text" onClick = {() => handleClick(set[0].link)}>Github</button>
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
            <button className="overlay-text" onClick = {() => handleClick(set[1].link)}>Github</button>
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
            <button className="overlay-text" onClick = {() => handleClick(set[2].link)}> Github</button>
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
            <button className="overlay-text" onClick = {() => handleClick(set[3].link)}>Github</button>
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
            <h3 className="projecttitle" >{set[4].title}</h3>
          </div>
          
          <div className="overlay">
            <button className="overlay-text" onClick = {() => handleClick(set[4].link)}>Github</button>
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
            <button className="overlay-text" onClick = {() => handleClick(set[5].link)}>Github</button>
          </div>
        </div>
      </div>
    </>
  );
}
