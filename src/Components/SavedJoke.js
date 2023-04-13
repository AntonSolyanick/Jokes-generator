import Button from "./UI/Button";
import "../App.css";
import styles from "./SavedJoke.module.css";
import { MdOutlineHighlight } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

function SavedJoke({
  deleteJokeHandler,
  jokeText,
  date,
  id,
  isHighlighted,
  highlightJokeHandler,
}) {
  return (
    <li
      className={` ${styles.container} ${
        isHighlighted ? styles.highlighted : undefined
      } `}
    >
      <time className={styles.date}>{date}</time>
      <p className="text">{jokeText}</p>
      <div>
        <Button
          title="Highlight joke"
          onClick={() => highlightJokeHandler(id)}
          className={styles.button}
        >
          <MdOutlineHighlight
            className={`${styles.icon} ${
              isHighlighted ? styles.highlightedGreen : undefined
            }`}
          />
        </Button>

        <Button
          title="Delete joke"
          onClick={() => deleteJokeHandler(id)}
          className={styles.button}
        >
          <RiDeleteBin2Line
            className={`${styles.icon} ${
              isHighlighted ? styles.highlighted : undefined
            }`}
          />
        </Button>
      </div>
    </li>
  );
}

export default SavedJoke;
