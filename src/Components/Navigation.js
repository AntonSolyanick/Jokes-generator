import "../App.css";
import styles from "./Navigation.module.css";
import { GrDatabase } from "react-icons/gr";

function Navigation({ showStorageHandler }) {
  function toggleStorageIcon(e) {
    e.target.classList.toggle(`${styles.activeStorageIcon}`);
  }
  return (
    <nav className={styles.navigation}>
      <p id="successfullySaved" className="transparent"></p>

      <GrDatabase
        title="Show saved jokes"
        onClick={(e) => {
          showStorageHandler();
          toggleStorageIcon(e);
        }}
        className={styles.iconStorage}
      />
    </nav>
  );
}

export default Navigation;
