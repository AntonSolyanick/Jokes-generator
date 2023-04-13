import styles from "./Button.module.css";

function Button(props) {
  function buttonClick(e) {
    const clickedButton = e.target.closest("button");
    clickedButton.classList.add(`${styles.clicked}`);
    setTimeout(() => clickedButton.classList.remove(`${styles.clicked}`), 200);
  }

  return (
    <>
      <button
        title={props.title}
        className={styles.button}
        onClick={(e) => {
          props.onClick(e);
          buttonClick(e);
        }}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
