
const ATMDeposit = ( {onChange, isDeposit} ) => {
  const choice = ["Deposit", "Whithdraw"]
  return (
    <label className="label huge">
      <h5>{choice[Number(!isDeposit)]}</h5>
      <input type="number" placeholder="Type the amount here" onChange={onChange}></input>
      <input type="submit"  value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0) // state of this transaction
  const [totalState, setTotalState] = React.useState(0)
  const [isDeposit, setIsDeposit] = React.useState(true)
  const [atmMode, setAtmMode] = React.useState("")

  let status = `Account Balance $ ${totalState}`;
  console.log('Account Rendered');
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setDeposit(Number(event.target.value));

  };
  const handleSubmit = event => {
    let newTotal = totalState

    if (isDeposit == true) {
      newTotal = totalState + deposit
    } else if ( isDeposit == false && deposit > totalState) {
      newTotal = totalState
      alert(`You have insufficient funds to complete this transaction, your balance is $${totalState}`)
    } else {
      newTotal = totalState - deposit
    }

    setTotalState(newTotal)
    event.preventDefault();
  };

  const handleModeSelect = event => {
    setAtmMode(event.target.value)
    if (event.target.value === 'Deposit') {
      setIsDeposit(true)
    } else {
      setIsDeposit(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <>
      <h2 id="total">{status}</h2>
      {/* <label>Select an action below to continue</label>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select> */}
      <div>
        <button id="button-deposit" onClick={()=> setIsDeposit(true)} >Deposit</button>
        <button id="button-withdraw" onClick={()=> setIsDeposit(false)} >Withdraw</button>
      </div>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit} > Deposit</ATMDeposit>
     {/*  {atmMode && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
          ></ATMDeposit>
      )} */}
        </>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));