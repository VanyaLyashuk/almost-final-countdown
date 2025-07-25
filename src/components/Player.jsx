import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  const inputRef = useRef(null);

  // function handleChange(e) {
  //   setSubmitted(false);
  //   setPlayerName(e.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    setPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
