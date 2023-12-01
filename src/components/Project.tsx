import React from 'react';
import styles from './MyProjects.module.css';

type PropsType = {
  type: 'big' | 'small';
  projectName: string;
  backgroundUrl: string;
  siteSrc: string;
};

export const Project = React.memo((props: PropsType) => {
  return (
    <a
      href={props.siteSrc}
      className={(props.type === 'big' ? styles.big : styles.small) + ' ' + styles.project}
      title={props.projectName}
      target="_blank"
    >
      <div className={styles.top_border}></div>
      <img className={styles.project_img} src={props.backgroundUrl} alt="" />
      <div className={styles.bottom_border}></div>
    </a>
  );
});
