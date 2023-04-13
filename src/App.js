import "./App.css";
import JokeGeneratorContainer from "./Components/JokeGeneratorContainer";
import JokeList from "./Components/JokeList";
import Navigation from "./Components/Navigation";
import { v4 as uuidv4 } from "uuid";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

function App() {
  const [jokeText, setJokeText] = useState("");
  const [nextJoke, setNextJoke] = useState(1);
  const [savedJokes, setSavedJokes] = useState([]);
  const [showStorage, setShowStorage] = useState(false);
  const transparentText = document.querySelector("#successfullySaved");
  useEffect(() => {
    const storage = localStorage.getItem("jokes");
    storage && setSavedJokes(JSON.parse(storage));
  }, []);

  useEffect(() => {
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((response) => response.json())
      .then((object) => {
        setJokeText(object.joke);
      });
  }, [nextJoke]);

  //-------------------------FUNCTIONS------------------------------
  function setNextJokeHandler(e) {
    e.preventDefault();
    setNextJoke((prev) => prev + 1);
  }

  function deleteJokeHandler(id) {
    const newSavedJokes = savedJokes.filter((joke) => joke.id !== id);
    setSavedJokes([...newSavedJokes]);
    localStorage.setItem("jokes", JSON.stringify(newSavedJokes));
  }

  function saveJokeHandler(text, e) {
    e.preventDefault();
    let checkAddedJoke = false;
    savedJokes.forEach((joke) => {
      joke.text === text && (checkAddedJoke = true);
    });
    const newJoke = {
      id: uuidv4(),
      text: text,
      date: new Date().toLocaleString("en-GB"),
      isHighlighted: false,
    };
    if (!checkAddedJoke) {
      setSavedJokes([newJoke, ...savedJokes]);
      localStorage.setItem("jokes", JSON.stringify([newJoke, ...savedJokes]));
      transparentText.textContent = `The joke is saved  --->`;
    }
    if (checkAddedJoke) {
      transparentText.textContent = "It's already there --->";
    }
    transparentText.classList.add(`visible`);
    setTimeout(() => transparentText.classList.remove(`visible`), 1000);
  }

  function highlightJokeHandler(id) {
    const savedJokesHighlighted = savedJokes.map((joke) =>
      joke.id === id
        ? { ...joke, isHighlighted: !joke.isHighlighted }
        : { ...joke }
    );
    setSavedJokes(savedJokesHighlighted);
    localStorage.setItem("jokes", JSON.stringify(savedJokesHighlighted));
  }

  function showStorageHandler() {
    setShowStorage(!showStorage);
  }

  //-------------------JSX CODE -------------------------------------
  return (
    <>
      <Navigation showStorageHandler={showStorageHandler} />
      <SwitchTransition>
        <CSSTransition key={showStorage} timeout={300} classNames="fade">
          <div className="displayBothComponents">
            <JokeGeneratorContainer
              jokeText={jokeText}
              nextJoke={nextJoke}
              setNextJokeHandler={setNextJokeHandler}
              saveJokeHandler={saveJokeHandler}
              showStorage={showStorage}
            />
            <JokeList
              savedJokes={savedJokes}
              deleteJokeHandler={deleteJokeHandler}
              highlightJokeHandler={highlightJokeHandler}
              showStorage={showStorage}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
