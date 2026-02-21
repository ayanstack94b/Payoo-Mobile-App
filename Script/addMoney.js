document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1 bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select a Bank") {
    alert("select a bank");
    return;
  }
  //   get bank account
  const accno = getValueFromInput("add-money-num");
  if (accno.length != 11) {
    alert("Invalid A/C number");
    return;
  }
  //   3 get ammount
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert("Money added");
    setBalance(newBalance);
  } else {
    alert("invalid pin");

    return;
  }
});
