import Button from "./UI/Button";
import styles from "./JokeGeneratorContainer.module.css";
import { BiSkipNextCircle } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";

function JokeGeneratorContainer({
  jokeText,
  setNextJokeHandler,
  saveJokeHandler,
  showStorage,
}) {
  return (
    <form
      className={`${styles.generatorBlock} ${
        showStorage
          ? styles.displayModeGenerator
          : styles.displayGeneratorAndStorage
      }`}
    >
      <h1 className="headerText"> Jokes generator</h1>
      <div className={styles.container}>
        <p className="text">{jokeText}</p>
      </div>
      <div>
        <Button
          title="Show next joke"
          className={styles.button}
          onClick={(e) => setNextJokeHandler(e)}
        >
          <BiSkipNextCircle className={styles.icon}> </BiSkipNextCircle>
        </Button>

        <Button
          title="Save joke"
          className={styles.button}
          onClick={(e) => saveJokeHandler(jokeText, e)}
        >
          <FaRegSave className={styles.icon}></FaRegSave>
        </Button>
      </div>
    </form>
  );
}

export default JokeGeneratorContainer;
