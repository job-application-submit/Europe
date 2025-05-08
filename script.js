document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear file input (simulate removing uploaded file)
  const resumeInput = document.getElementById("resume");
  resumeInput.value = ""; // Clears the selected file

  // Hide form and show confirmation
  this.style.display = "none";
  document.getElementById("confirmationMessage").classList.remove("hidden");
});

// Check if returning from redirect
window.addEventListener("DOMContentLoaded", function () {
  const wasSubmitted = localStorage.getItem("submittedOnce");
  if (wasSubmitted === "true") {
    document.getElementById("jobForm").style.display = "none";
    document.getElementById("confirmationMessage").classList.remove("hidden");
    localStorage.removeItem("submittedOnce"); // Reset for next time
  }
});

// Handle form submission
document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Save flag before redirect
  localStorage.setItem("submittedOnce", "true");

  // Redirect to external page
  window.location.href = "https://mechanicladenthereby.com/rzx858trv?key=8d0db1164e2d6c3ae14df37cb34837b3";
});
