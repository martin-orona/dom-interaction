function modifyButton(selector) {
  var button = document.querySelector(selector);
  var initial = button.innerHTML;
  button.innerHTML += " modified";
  var final = button.innerHTML;
  console.log("modified element content from [" + initial + "] to [" + final + "]");
}

modifyButton("#gatewayButtonDiv > a");
setTimeout(function() { modifyButton("#gatewayButtonDiv > a"); }, 1000);
