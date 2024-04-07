import React from "react";
import styles from "./About.module.css"; // Assuming you have a separate CSS module for this component

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="../assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <br />
              <p style={{ textAlign: "justify" }}>
                I have experience in building responsive and optimized sites
                using React JS and Tailwind CSS. I am skilled in creating
                websites that look good and work well.I make sure your website
                is easy to use and looks great.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <br />
              <p style={{ textAlign: "justify" }}>
                I have experience developing fast and optimized back-end systems
                and APIs. I am skilled in building strong server-side
                applications with Node.js and Express.js. From creating RESTful
                APIs and server side logic to efficiently managing databases.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
