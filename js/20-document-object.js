let msg = "<p><b>Page Title: </b>" + document.title + "<br />";
msg += "<b>Page Address: </b>" + document.URL + "<br />";
msg += "<b>Last Modified: </b>" + document.lastModified + "</p>";

let elFooter = document.getElementById("footer");
elFooter.innerHTML = msg;
