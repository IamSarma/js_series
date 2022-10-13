let originalNumber = 10.23456;

let msg = "<h2>Original Number</h2><p>" + originalNumber + "</p>";
msg += "<h2>3 Decimal Places</h2><p>" + originalNumber.toFixed(3) + "</p>";
msg += "<h2>3 Digits</h2><p>" + originalNumber.toPrecision(3) + "</p>";

let elInfo = document.getElementById("info");
elInfo.innerHTML = msg;
