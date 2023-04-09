import Button from "./UI/Button";
import styles from "./JokeGeneratorContainer.module.css";
import { BiSkipNextCircle } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import { useEffect } from "react";

function JokeGeneratorContainer({
  setJokeText,
  nextJoke,
  jokeText,
  setNextJokeHandler,
  saveJokeHandler,
  showStorage,
}) {
  useEffect(() => getJoke, [nextJoke]);

  const getJoke = async () => {
    try {
      const res = await fetch(
        "https://geek-jokes.sameerkumar.website/api?format=json"
      );
      const jokeObj = await res.json();
      if (!jokeObj.joke) {
        throw new Error("Something went wrong, please try again later");
      }
      setJokeText(jokeObj.joke);

      console.log("useEff");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={showStorage ? styles.displayGenerator : ""}>
      <h1 className="headerText"> Jokes generator</h1>
      <div className={styles.container}>
        <p className="text">{jokeText}</p>
      </div>
      <div>
        <Button
          className={styles.button}
          onClick={(e) => setNextJokeHandler(e)}
        >
          <BiSkipNextCircle className={styles.icon}> </BiSkipNextCircle>
        </Button>

        <Button
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
