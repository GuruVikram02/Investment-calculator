import logo from "./assets/investment-calculator-logo.png";
import InvestmentForm from "./componenets/InvestmentForm";
import { useState } from "react";

function App() {
  let [userData, setUserData] = useState("");
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // console.log(userInput['currentSavings']);
    // per-year results

    const yearlyData = [];

    let currentSavings = userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput["expectedReturn"] / 100;
    const duration = userInput["duration"];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        key: i + 1,
        year: Math.round(i + 1),
        yearlyInterest: Math.round(yearlyInterest),
        savingsEndOfYear: Math.round(currentSavings),
        yearlyContribution: yearlyContribution,
        intrest: expectedReturn * 100,
      });
      if (yearlyData) {
        setUserData(yearlyData);
      } else {
        setUserData("");
      }
    }
    // do something with yearlyData ...
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentForm
        iniState={initialUserInput}
        userInput={calculateHandler}
        data={userData}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
