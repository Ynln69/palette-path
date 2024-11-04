// Shows the success modal after form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Show the success modal
  document.getElementById('successModal').style.display = 'flex';

  // Reset the form
  e.target.reset();

  // Close the modal after 5 seconds
  setTimeout(closeModal, 5000);
});

// Function to close the modal
function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}
