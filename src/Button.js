import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Botton({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Botton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Botton;
