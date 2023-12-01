import React from 'react';
import styles from './Footer.module.css';
export const Footer = React.memo(() => {
  return (
    <section className={styles.footer_wrapper}>
      <span className={styles.span}>
        Ready to embark on your digital journey?
      </span>
      <div className={styles.border}></div>
      <span className={styles.span}>
        Let's create a stunning website that sets you apart from the
        competition.
      </span>
    </section>
  );
});
