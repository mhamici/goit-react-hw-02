import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const DEFAULT_FEEDBACK_DATA = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getLSFeedbackData = () => {
  const data = localStorage.getItem("feedback-data");
  return data ? JSON.parse(data) : DEFAULT_FEEDBACK_DATA;
};

const App = () => {
  const [feedback, setFeedback] = useState(getLSFeedbackData);

  useEffect(() => {
    localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(DEFAULT_FEEDBACK_DATA);
    localStorage.removeItem("feedback-data");
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options onLeaveFeedback={updateFeedback} onReset={resetFeedback} showReset={totalFeedback > 0} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} positivePercentage={positivePercentage} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
