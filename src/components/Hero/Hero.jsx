import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          <p className={styles.edit}>Hello, I'm </p>
          Ali Haider
        </h1>
        <p className={styles.description} style={{ textAlign: "justify" }}>
          I'm a full-stack developer keen on mastering React and Node.js.My
          passion for learning and drive to excel make me a valuable addition to
          any project. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:aly.haider.dev@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
