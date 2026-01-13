import { useState } from "react";

const Btns = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  return (
    <>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </button>
    </>
  );
};

const Statistics = ({ text, value }) => {
  let percent = "";

  if (text === "positive") {
    percent = "%";
  }
  return (
    <>
      <tr>
        <td style={{ padding: "0 15px 0 0" }}>{text}</td>
        <td>
          {value}
          {percent}
        </td>
      </tr>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeed = good + neutral + bad;
  const average = allFeed === 0 ? 0 : (good - bad) / allFeed;
  const positive = allFeed === 0 ? 0 : (good / allFeed) * 100;

  return (
    <>
      <h1>give feedback</h1>
      <Btns
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
        allFeed={allFeed}
      />
      <div style={allFeed ? { display: "block" } : { display: "none" }}>
        <table>
          <tbody>
            <Statistics text={"good"} value={good} />
            <Statistics text={"neutral"} value={neutral} />
            <Statistics text={"bad"} value={bad} />
            <Statistics text={"all"} value={allFeed} />
            <Statistics text={"average"} value={average} />
            <Statistics text={"positive"} value={positive} />
          </tbody>
        </table>
      </div>

      <p style={!allFeed ? { display: "block" } : { display: "none" }}>
        No feedback given
      </p>
    </>
  );
};

export default App;
