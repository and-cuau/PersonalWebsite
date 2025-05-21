import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgandtextcontainer}>
        <div className={styles.textcontainer}>
          <div className={styles.spacer}></div>

          <div>
            <h2 className={styles.skills}>Skills</h2>

            <h2 className={styles.skills}></h2>

            <p>
              Hi! I'm Andre and I’m a recent grad who loves building things that
              are both useful and well-crafted. I enjoy working across the
              stack—from designing clean, modern frontends in React or Svelte to
              developing robust backend systems with Node.js, SQL, and
              WebSockets.
            </p>

            <p>
               I care about
              writing code that’s maintainable, efficient, and actually fun to
              work with.
            </p>

           

            <p>Thanks for stopping by!</p>
          </div>
        </div>
        <div className={styles.imgcontainer}>
          <div className={styles.titlecard}>
            <div className={styles.namecontainer}>
              <h1 className={styles.firstname}>ANDRE</h1>
              <h1 className={styles.lastname}>CUAUTLE</h1>
            </div>
            <h2 className={styles.subtitle}>Full Stack SWE Portfolio</h2>
          </div>
          <img src="./IMG_2203.jpg" alt="My Pic" style={{ width: "506px" }} />
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useRef, useState } from "react";
// import styles from "./Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.textcontainer}></div>
//       <div className={styles.imgcontainer}>
//         <div className={styles.titlecard}>
//           <div className={styles.namecontainer}>
//             <h1 className={styles.firstname}>ANDRE</h1>
//             <h1 className={styles.lastname}>CUAUTLE</h1>
//           </div>
//           <h2 className={styles.subtitle}>Full Stack SWE Portfolio</h2>
//         </div>
//         <img src="./IMG_2203.jpg" alt="My Pic" style={{ width: "506px" }} />
//       </div>
//     </div>
//   );
// }
