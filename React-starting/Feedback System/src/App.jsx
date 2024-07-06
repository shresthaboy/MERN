import React, { useState } from "react";
import Button from "./Button";
const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleFeedback = (type) => {
    if (type === "Good") {
      setGood(good + 1);
    } else if (type === "Bad") {
      setBad(bad + 1);
    } else if (type === "Neutral") {
      setNeutral(neutral + 1);
    }
  };

  const totalfeedback = good + bad + neutral;
  const goodPercent = totalfeedback > 0 ? (good / totalfeedback) * 100 : 0;
  const badPercent = totalfeedback > 0 ? (bad / totalfeedback) * 100 : 0;
  const neutralPercent =
    totalfeedback > 0 ? (neutral / totalfeedback) * 100 : 0;

  return (
    <div>
      <h1>Feedback System</h1>
      <Button label="Good" onClick={() => handleFeedback("Good")} />
      <Button label="Bad" onClick={() => handleFeedback("Bad")} />
      <Button label="Neutral" onClick={() => handleFeedback("Neutral")} />
      <h2>Statistics</h2>

      <div style={{ marginTop: "20px" }}>
        <p>
          Good: {good} ({goodPercent}%)
        </p>
        <p>
          Bad: {bad} ({badPercent}%)
        </p>
        <p>
          Neutral: {neutral} ({neutralPercent}%)
        </p>
      </div>
    </div>
  );
};

export default App;
