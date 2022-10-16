function checkUsername() {
  let username = elUsername.value;
  if (username.length < 5) {
    elFeedback.className = "warning";
    elFeedback.textContent = "Not long enough, yet...";
  } else {
    elFeedback.textContent = "";
  }
}

function tipUsername() {
  elFeedback.className = "tip";
  elFeedback.textContent = "Username must be atleat 5 characters";
}

let elUsername = document.getElementById("username");
let elFeedback = document.getElementById("feedback");

// When the username input gains/loses focus
elUsername.addEventListener("focus", tipUsername, false);
elUsername.addEventListener("blur", checkUsername, false);
