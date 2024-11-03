import styles from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
const { good, neutral, bad } = feedback;
const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

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
