import styles from "./Standardbtn.module.css";

function StdrButton({ children, myOnClick }) {
    return (
      <button onClick={myOnClick} className={styles.btnContainer}>
        {children}
      </button>
    );
  }

export default StdrButton;