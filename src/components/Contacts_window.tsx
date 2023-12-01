import React from 'react';
import styles from './Contacts_window.module.css';

type PropsType = {
  callback: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export const Contacts = React.memo((props: PropsType) => {
  return (
    <div className={styles.window_wrapper + ' none'} id="contacts_window">
      <div className={styles.window}>
        <div className={styles.top_border}>
          <span
            className={styles.block}
            onClick={(e) => props.callback(e)}
          ></span>
          <span
            className={styles.block}
            onClick={(e) => props.callback(e)}
          ></span>
          <span
            className={styles.block}
            onClick={(e) => props.callback(e)}
          ></span>
        </div>
        <div className={styles.bottom_border}></div>
        <div className={styles.wrapper}>
          <div className={styles.social_media}>
            <div>
              <a href="mailto:dobkos@hotmail.com" target="_blank">
                <img src="/mail_svg.svg" alt="" />
                <span>dobkos@hotmail.com</span>
              </a>
            </div>
            <div>
              <a href="https://t.me/SentryEz" target="_blank">
                <img src="/telegram_svg.svg" alt="" />
                <span>@SentryEz</span>
              </a>
            </div>
            <div>
              <a href="https://vk.com/id191615887" target="_blank">
                <img src="/vk_svg.svg" alt="" />
                <span>id191615887</span>
              </a>
            </div>
            <div>
              <a href="tel:+79219476004" target="_blank">
                <img src="/phone_svg.svg" alt="" />
                <span>+7 921 947 60 04</span>
              </a>
            </div>
          </div>
          <form
            action="mailto:dobkos@hotmail.com"
            method="get"
            encType="text/plain"
            className={styles.form}
          >
            <input type="text" name="subject" placeholder="Your Name" />
            <div className={styles.small_bottom_border}></div>
            <input type="email" name="email" placeholder="Your Email" />
            <div className={styles.small_bottom_border}></div>
            <textarea
              name="body"
              rows={5}
              cols={30}
              placeholder="Your Message"
            ></textarea>
            <div className={styles.small_bottom_border}></div>
            <div className={styles.button}>
              <input className={styles.send} type="submit" value="Send"></input>
            </div>
          </form>
        </div>
        <h2>Contact me today to get started!</h2>
      </div>
    </div>
  );
});
