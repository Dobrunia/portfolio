import React from 'react';
import styles from './Hello.module.css';
export const Hello = React.memo(() => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.social_media}>
        <a href="https://github.com/Dobrunia" target="_blank">
          <img src="/Page.svg" alt="" />
        </a>
        <a href="" target="_blank">
          <img src="/linkedin_svg_logo.svg" alt="" />
        </a>
        <a href="" target="_blank">
          <img src="/instagram_svg_logo.svg" alt="" />
        </a>
      </div>
      <div className={styles.window}>
        <div className={styles.top_border}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
        <img className={styles.monster} src="/alien_monster_svg.svg" alt="" />
        <span className={styles.bracket1 + ' ' + styles.pos1}>
          <span className={styles.text}>Hello, world!</span>
        </span>
        <span className={styles.pos3 + ' ' + styles.surname}>
          KO<span>S</span>TRIGIN
        </span>
        <span className={styles.pos4 + ' ' + styles.name}>DOBRUNIA</span>
        <span className={styles.bracket2 + ' ' + styles.pos2}>
          <span className={styles.text}>front-end developer, creator</span>
        </span>
        <div className={styles.bottom_border}></div>
      </div>
    </section>
  );
});
