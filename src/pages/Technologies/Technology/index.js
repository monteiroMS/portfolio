import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Technology({ tech }) {
  return (
    <span key={tech.name} className={styles.tech}>
      <span className={styles.techLogoBox}>
        <img
          src={tech.image}
          alt={`${tech.name} logo`}
          className={styles.techLogo}
          loading="lazy"
        />
      </span>
      <p>{tech.name}</p>
    </span>
  );
}

Technology.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Technology;
