import { useEffect, useRef, useState } from "react";
import "../../App.css";
import styles from "./Projects.module.css";

import ProjectGrid from "../ProjectGrid";

export default function Projects() {
  const slides = [
    {
      setName: "Slide 1",
      set: [
        {
          title: "Full Stack Mission Simulator",
          image: "./missionsimpic.jpg",
          link: "https://github.com/and-cuau/MissionSimulator",
          demo_link: "",
        },
        {
          title: "Full Stack X Clone",
          image: "./xclone.jpg",
          link: "https://github.com/and-cuau/TwitterClone",
          demo_link: "",
        },
        {
          title: "Full Stack Finance Tracker",
          image: "./fintrackpic.jpg",
          link: "https://github.com/and-cuau/FinanceTracker",
          demo_link: "",
        },
        {
          title: "Web Page Recreation #1",
          image: "./webpagerec.jpg",
          link: "https://github.com/and-cuau/Web-Page-Recreation-1",
          demo_link: "https://and-cuau.github.io/Web-Page-Recreation-1/",
        },
        {
          title: "LAN Multiplayer Tanks",
          image: "./tankspic2.jpg",
          link: "https://github.com/and-cuau/TankGame",
          demo_link: "",
        },
        {
          title: "Personal Website",
          image: "./personalwebsite.jpg",
          link: "https://github.com/and-cuau/PersonalWebsite",
          demo_link: "",
        },
      ],
    },
    {
      setName: "Slide 2",
      set: [
        {
          title: "AI + LAN Multiplayer TTT",
          image: "./tttpiczoom.png",
          link: "https://github.com/and-cuau/AI-Tic-Tac-Toe",
          demo_link: "",
        },
        {
          title: "Web Page Recreation #2",
          image: "./webpagerec2.jpg",
          link: "https://github.com/and-cuau/SurfTwins-Web-Page-Recreation",
          demo_link: "",
        },
        { title: "", image: "./placeholder.jpg", link: "", demo_link: ""},
        { title: "", image: "./placeholder.jpg", link: "", demo_link: "" },
        { title: "", image: "./placeholder.jpg", link: "", demo_link: "" },
        { title: "", image: "./placeholder.jpg", link: "", demo_link: "" },
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
      <div className={styles.container}>
        <button onClick={prevSlide} className={`${styles.arrow} ${styles.left}`}>
          &#8592;
        </button>
        <button onClick={nextSlide} className={`${styles.arrow} ${styles.right}`}>
          &#8594;
        </button>

        <ProjectGrid set={slides[currentIndex].set} />
      </div>
    </div>
  );
}

