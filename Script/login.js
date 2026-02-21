document.getElementById("login-btn").addEventListener("click", function () {
  const inputNum = document.getElementById("input-num");
  const contactNum = inputNum.value;

  const inputPin = document.getElementById("input-pin");
  const pinValue = inputPin.value;
  console.log(contactNum, "the pin is", pinValue);

  if (contactNum == "7980441957" && pinValue == "1234") {
    // alert("login success");
    window.location.assign("/home.html");
  } else {
    alert("wrong credentials");
  }
});
