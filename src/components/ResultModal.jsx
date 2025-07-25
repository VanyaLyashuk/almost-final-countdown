import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultDialog = forwardRef(function ResultDialog(props, ref) {
  const { targetTime, timeRemaining, onReset } = props;

  const dialogRef = useRef(null);

  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>,
    document.querySelector("#modal")
  );
});

export default ResultDialog;
