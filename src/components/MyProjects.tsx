import React from 'react';
import styles from './MyProjects.module.css';
import { Project } from './Project';

export const MyProjects = React.memo(() => {
  return (
    <section className={styles.section}>
      <a id="experience"></a>
      <h2>
        <span className={styles.span1}>My projects</span>{' '}
        <span className={styles.span2}>()</span>
      </h2>
      <div className={styles.projects_wrapper}>
        <div className={styles.small_projects_wrapper}>
        <Project type='small' projectName='Memessenger' backgroundUrl='/memessenger.PNG' siteSrc='https://memessenger.ru'/>
          {/* <div className={styles.small + ' ' + styles.project}>
            <div className={styles.top_border}></div>
            <div className={styles.bottom_border}></div>
          </div>
          <div className={styles.small + ' ' + styles.project}>
            <div className={styles.top_border}></div>
            <div className={styles.bottom_border}></div>
          </div>
          <div className={styles.small + ' ' + styles.project}>
            <div className={styles.top_border}></div>
            <div className={styles.bottom_border}></div>
          </div> */}
        </div>
        <Project type='big' projectName='Memessenger' backgroundUrl='/memessenger.PNG' siteSrc='https://memessenger.ru'/>
      </div>
    </section>
  );
});
