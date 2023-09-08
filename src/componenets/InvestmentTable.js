
const InvestmentTable = (props) => {
  return (
    <tr>
      <td>{props.tableData.year}</td>
      <td>{props.tableData.savingsEndOfYear}</td>
      <td>{props.tableData.intrest}</td>
      <td>{props.tableData.yearlyInterest}</td>
      <td>{props.tableData.yearlyContribution}</td>
    </tr>
  );
};

export default InvestmentTable;
