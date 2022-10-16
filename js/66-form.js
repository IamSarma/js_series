// Declare variables and store elements
let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById("formSignup");
elSelectPackage = document.getElementById("package");
elPackageHint = document.getElementById("packageHint");
elTerms = document.getElementById("terms");
elTermsHint = document.getElementById("termsHint");

// Create event listeners
elForm.addEventListener("submit", checkTerms, false);
elSelectPackage.addEventListener("change", packageHint, false);
