export default function TimerChallange(props) {
  const { title, targetTime } = props;

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challange</button>
      </p>
      <p>Time is Running... / Timer inactive</p>
    </section>
  );
}
