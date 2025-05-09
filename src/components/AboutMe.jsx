import { useEffect, useRef, useState } from "react";

// import "../App.css";
export default function AboutMe() {
  return (
    <div className="container">
      <h1 className="h1">About Me</h1>
      <p>
        Hi! I'm Andre and I’m a recent grad who loves building things that are
        both useful and well-crafted. I enjoy working across the stack—from
        designing clean, modern frontends in React or Svelte to developing
        robust backend systems with Node.js, SQL, and WebSockets.
      </p>

      <p>
        I’ve built multiplayer games in C++ using Boost Asio, created dynamic
        websites with real-time communication, and set up Dockerized servers
        that keep things running smoothly. I care about writing code that’s
        maintainable, efficient, and actually fun to work with.
      </p>

      <p>
        {" "}
        Outside of tech, I’m into music—Nirvana, Beatles, and The Cure are some
        of my favorites. I also love going to the gym and playing video games. I'm
        always learning and looking for new challenges that push me to grow as a
        developer and collaborator.
      </p>

      <p>Thanks for stopping by!</p>
    </div>
  );
}
