import styles from "./styles.module.css";
import github from "../../images/github.png";
import whatsapp from "../../images/whatsapp.png";
import linkedin from "../../images/linkedin.webp";
import PropTypes from "prop-types";

function Social({ className }) {
  return (
    <nav className={[className, styles.social].join(" ")}>
      <a
        href="https://github.com/monteiroMS"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <img src={github} alt="github logo" loading="lazy" />
      </a>
      <a
        href="https://contate.me/monteiro.ms"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <img src={whatsapp} alt="whatsapp logo" loading="lazy" />
      </a>
      <a
        href="https://www.linkedin.com/in/monteiroms/"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <img src={linkedin} alt="linkedin logo" loading="lazy" />
      </a>
    </nav>
  );
}

Social.propTypes = {
  className: PropTypes.string,
};

export default Social;
