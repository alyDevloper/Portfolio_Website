import React from "react";

import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/emailIcon.png" alt="Email icon" />
          <a href="mailto:aly.haider.dev@gmail.com">aly.haider.dev@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/aly-haider/" target="_blank">
            linkedin.com/aly-haider
          </a>
        </li>
        <li className={styles.link}>
          <img src="githubIcon.png" alt="Github icon" />
          <a href="https://github.com/alyDevloper" target="_blank">
            github.com/alyDeveloper
          </a>
        </li>
      </ul>
    </footer>
  );
};
