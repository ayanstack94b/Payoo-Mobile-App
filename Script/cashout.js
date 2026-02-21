document.getElementById("cashOut-btn").addEventListener("click", function () {
  const cashOutNumInput = document.getElementById("cashOut-num");
  const cashOutNum = cashOutNumInput.value;
  if (cashOutNum.length !== 11) {
    alert("invalid agent mu,ber");
    return;
  }

  const cashOutAmountInput = document.getElementById("cashOut-amount");
  const cashOutAmount = cashOutAmountInput.value;

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  const newBalance = Number(balance) - Number(cashOutAmount);
  console.log("New Balance", newBalance);
  if (newBalance < 0) {
    alert("Out of balance");
    return;
  }
  const cashOutPinInput = document.getElementById("cashOut-pin");
  const pin = cashOutPinInput.value;
  if (pin === "1234") {
    // alert("cashOut sucess");
    balanceElement.innerText = newBalance;
  } else {
    alert("invalid team");
  }
});
