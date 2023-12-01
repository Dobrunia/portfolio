import React from 'react';
import styles from './Header.module.css';

export const Header = React.memo(() => {
  return (
    <header>
      <div className={styles.header_wrapper}>
        <img src="/logo.png" alt="DK" />
        <nav className={styles.nav}>
          <span className="brackets_hover">
            <span className="text_shadow">
              <a href="#about">About</a>
            </span>
          </span>
          <span className="brackets_hover">
            <span className="text_shadow">
              <a href="#experience">Experience</a>
            </span>
          </span>
          <span className="brackets_hover">
            <span className="text_shadow exit">
              Contact
            </span>
          </span>
        </nav>
      </div>
      <div className={styles.line}></div>
    </header>
  );
});
