import { useState } from "react";
import InvestmentTable from "./InvestmentTable";

// import TableHead from "./TableHead";
const InvestmentForm = (props) => {
 
  console.log();
  const [currSavings, setCurrSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");
  const [ifClicked, setIfClicked] = useState(false);
  const visiblityHandler = () => {
    setIfClicked(false);
  };
  const clickHandler = (event) => {
    event.preventDefault();
    console.log(props.data);
    setIfClicked(true);
    const userInput = {
      key:duration,
      currentSavings: Number(currSavings),
      yearlyContribution: Number(yearlySavings),
      expectedReturn: Number(interest),
      duration: Number(duration),
    };

    props.userInput(userInput);
  };

  const currSavingsHandler = (event) => {
    const currSaving = event.target.value;
    setCurrSavings(currSaving);
  };
  const yearlySavingsHandler = (event) => {
    const yearlySavings = event.target.value;
    setYearlySavings(yearlySavings);
  };
  const interestHandler = (event) => {
    const interest = event.target.value;
    setInterest(interest);
  };
  const durationHandler = (event) => {
    const duration = event.target.value;
    setDuration(duration);
  };
  return (
    <div>
      {/* //Form elements */}
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currSavingsHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlySavingsHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={interestHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={durationHandler} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={visiblityHandler}>
            Reset
          </button>
          <button type="click" className="button" onClick={clickHandler}>
            Calculate
          </button>
        </p>
      </form>

      <div />
      <div>
      {!ifClicked && <p style={{marginLeft:"525px"}}>There is no data entered</p>}
      {ifClicked &&
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((ele) => (
              <InvestmentTable key={ele} tableData={ele} />
            ))}
          </tbody>
        </table>}
      </div>
    </div>
  );
};

export default InvestmentForm;
