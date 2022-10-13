let today = new Date();
let currentYear = today.getFullYear();

let elFooter = document.getElementById("footer");
elFooter.innerHTML = "<p>Copyright &copy;" + currentYear + "</p>";
