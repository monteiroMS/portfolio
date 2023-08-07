import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function LinkButton({ to, name }) {
  const { pathname } = useLocation();

  const shouldHighlight = useMemo(() => to === pathname, [pathname, to]);

  return (
    <Link
      to={to}
      className={[styles.link, shouldHighlight ? styles.here : ""].join(" ")}
    >
      {name}
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
};

export default LinkButton;
