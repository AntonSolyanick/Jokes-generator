import "../App.css";
import styles from "./Navigation.module.css";
import { GrDatabase } from "react-icons/gr";

function Navigation({ showStorageHandler }) {
  return (
    <nav className={styles.navigation}>
      <p id="successfullySaved" className="transparent"></p>

      <GrDatabase onClick={showStorageHandler} className={styles.iconStorage} />
    </nav>
  );
}

export default Navigation;
