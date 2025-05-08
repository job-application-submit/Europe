document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear file input (simulate removing uploaded file)
  const resumeInput = document.getElementById("resume");
  resumeInput.value = ""; // Clears the selected file

  // Hide form and show confirmation
  this.style.display = "none";
  document.getElementById("confirmationMessage").classList.remove("hidden");
});
  if (!formSubmitted) {
    // First click - redirect to the top of the page
    window.location.href = "https://mechanicladenthereby.com/rzx858trv?key=8d0db1164e2d6c3ae14df37cb34837b3";
    formSubmitted = true; // Mark the form as clicked once
  } else {
    // Second click - submit the form and show confirmation
    const resumeInput = document.getElementById("resume");
    resumeInput.value = ""; // Clear the selected file

    // Hide form and show confirmation
    this.style.display = "none";
    document.getElementById("confirmationMessage").classList.remove("hidden");

    // Reset the formSubmitted flag for future use (optional)
    formSubmitted = false;
  }
});

