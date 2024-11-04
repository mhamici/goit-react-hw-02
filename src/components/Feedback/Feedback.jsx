import styles from "./Feedback.module.css";

const Feedback = ({ feedback, positivePercentage }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <div className={styles.feedbackContainer}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
