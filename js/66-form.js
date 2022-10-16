// Declare variables and store elements
let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById("formSignup");
elSelectPackage = document.getElementById("package");
elPackageHint = document.getElementById("packageHint");
elTerms = document.getElementById("terms");
elTermsHint = document.getElementById("termsHint");

// packageHint function
function packageHint() {
  let package = this.options[this.selectedIndex].value;
  if (package == "monthly") {
    elPackageHint.innerHTML = "Save $10 if you pay for 1 year!";
  } else {
    elPackageHint.innerHTML = "Wise choice!";
  }
}

// checkTerms function
function checkTerms(event) {
  if (!elTerms.checked) {
    elTermsHint.innerHTML = "You must agree to the terms.";
    event.preventDefault();
  }
}

// Create event listeners
elForm.addEventListener("submit", checkTerms, false);
elSelectPackage.addEventListener("change", packageHint, false);
