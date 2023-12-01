import React from 'react';
import styles from './Slogans.module.css';

export const Slogans = React.memo(() => {
  return (
    <section className={styles.section}>
      <a id="about"></a>
      <h2>Exceptional Code for Exceptional Websites</h2>
      <div className={styles.slogans_wrapper}>
        <div className={styles.slogan}>
          <span>
            Fast and Reliable <br /> Performance:
          </span>
          <p>
            In today's fast-paced digital world, a slow-loading website can
            deter potential customers. By leveraging the latest web technologies
            and optimizing performance, I ensure that your website loads quickly
            and functions smoothly, providing your visitors with an exceptional
            browsing experience.
          </p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.slogan}>
          <span>Ongoing Support and Maintenance:</span>
          <p>
            Building a website is just the beginning. With my ongoing support
            and maintenance services, I'm here to ensure that your website
            remains up-to-date, secure, and optimized. You can focus on growing
            your business while I take care of thetechnical aspects.
          </p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.slogan}>
          <span>Affordable and Transparent Pricing:</span>
          <p>
            I believe in delivering value without breaking the bank. My pricing
            is transparent, ensuring that you know exactly what you're investing
            in from the start. No hidden costs or surprises along the way, just
            high-quality web development services at a competitive price.
          </p>
        </div>
      </div>
    </section>
  );
});
