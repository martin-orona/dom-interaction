function modifyButton(selector) {
  var button = document.querySelector(selector);
  button.innerHTML += " modified";
}

modifyButton("#gatewayButtonDiv > a");
