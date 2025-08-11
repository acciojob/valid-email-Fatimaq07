function validEmail(str) {
  if (!str) return false;

  var regex = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6})?$/;
  return regex.test(str);
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
