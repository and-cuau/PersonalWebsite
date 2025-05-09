import { useEffect, useRef, useState } from "react";
import "../App.css";

import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  const slides = [
    {
      setName: "Slide 1",
      set: [
        {
          title: "Full Stack X Clone",
          image: "./xclone.jpg",
          link: "https://github.com/and-cuau/TwitterClone",
        },
        {
          title: "Full Stack Finance Tracker",
          image: "./fintrackpic.jpg",
          link: "https://github.com/and-cuau/FinanceTracker",
        },
        { title: "Web Page Recreation #1", image: "./webpagerec.jpg", link: "https://github.com/and-cuau/trend-hunt" },
        {
          title: "Web Page Recreation #2",
          image: "./webpagerec2.jpg",
          link: "",
        },
        {
          title: "LAN Multiplayer Tanks",
          image: "./tankspic2.jpg",
          link: "https://github.com/and-cuau/TankGame",
        },
        { title: "Personal Website", image: "./personalwebsite.jpg", link: "https://github.com/and-cuau/PersonalWebsite" },
      ],
    },
    {
      setName: "Slide 2",
      set: [
        {
          title: "AI + LAN Multiplayer TTT",
          image: "./tttpiczoom.png",
          link: "https://github.com/and-cuau/AI-Tic-Tac-Toe",
        },
        { title: "", image: "./placeholder.jpg" },
        { title: "", image: "./placeholder.jpg" },
        { title: "", image: "./placeholder.jpg" },
        { title: "", image: "./placeholder.jpg" },
        { title: "", image: "./placeholder.jpg" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div>
      <h1 className="h1">Projects</h1>
      <div style={styles.container}>
        <button onClick={prevSlide} style={{ ...styles.arrow, left: 0 }}>
          &#8592;
        </button>
        <button onClick={nextSlide} style={{ ...styles.arrow, right: 0 }}>
          &#8594;
        </button>

        {/* <ProjectGrid set={slides[currentIndex].set}></ProjectGrid> */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "800px",
    height: "450px",
    margin: "auto",
    // overflow: "hidden",
    borderRadius: "10px",
    //     boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2rem",
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "0 10px 10px 10px",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    display: "block",
  },
};
