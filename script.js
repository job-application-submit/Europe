document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear file input (simulate removing uploaded file)
  const resumeInput = document.getElementById("resume");
  resumeInput.value = ""; // Clears the selected file

  // Hide form and show confirmation
  this.style.display = "none";
  document.getElementById("confirmationMessage").classList.remove("hidden");
});
