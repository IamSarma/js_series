let saying = "Home sweet home ";

let msg = "<h2>String</h2><p>" + saying + "</p>";
msg += "<h2>Length</h2><p>" + saying.length + "</p>";
msg += "<h2>Uppercase</h2><p>" + saying.toUpperCase() + "</p>";
msg += "<h2>Lowercase</h2><p>" + saying.toLowerCase() + "</p>";
msg += "<h2>Character at index: 12</h2><p>" + saying.charAt(12) + "</p>";
msg += "<h2>First 'ee'</h2><p>" + saying.indexOf("ee") + "</p>";
msg += "<h2>Last 'e'</h2><p>" + saying.lastIndexOf("e") + "</p>";
msg +=
  "<h2>Character at index: 8-14</h2><p>" + saying.substring(8, 14) + "</p>";
msg += "<h2>Replace : me-w</h2><p>" + saying.replace("me", "w") + "</p>";

let elInfo = document.getElementById("info");
elInfo.innerHTML = msg;
