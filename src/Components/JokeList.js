import SavedJoke from "./SavedJoke";
import styles from "./JokeList.module.css";
import "../App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function JokeList({
  savedJokes,
  deleteJokeHandler,
  highlightJokeHandler,
  showStorage,
}) {
  return (
    <TransitionGroup
      component="ul"
      className={`${styles.jokeListContainer} ${
        showStorage ? styles.list : styles.hideJokeList
      }`}
    >
      <CSSTransition classNames="item" timeout={300}>
        <>
          <p className="headerText"> Saved Jokes</p>
          {savedJokes.length < 1 ? (
            <p className={styles.regularText}>
              You don't have any saved jokes yet
            </p>
          ) : (
            savedJokes.map((joke) => (
              <SavedJoke
                key={joke.id}
                id={joke.id}
                jokeText={joke.text}
                date={joke.date}
                isHighlighted={joke.isHighlighted}
                deleteJokeHandler={deleteJokeHandler}
                highlightJokeHandler={highlightJokeHandler}
              ></SavedJoke>
            ))
          )}
        </>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default JokeList;
