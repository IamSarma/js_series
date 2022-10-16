// Declare variables and store elements
let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById("formSignup");
elSelectPackage = document.getElementById("package");
elPackageHint = document.getElementById("packageHint");
elTerms = document.getElementById("terms");
elTermsHint = document.getElementById("termsHint");

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
