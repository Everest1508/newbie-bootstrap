let currentStep = 0;
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressBar = document.getElementById('progressBar');

function showStep(stepIndex) {
  steps[currentStep].style.display = 'none';
  steps[stepIndex].style.display = 'block';
  currentStep = stepIndex;
  updateProgressBar();
  if (currentStep === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'inline';
  }
  if (currentStep === steps.length - 1) {
    nextBtn.innerHTML = 'Submit';
  } else {
    nextBtn.innerHTML = 'Next';
  }
}

function nextStep() {
  if (validateStep(currentStep)) {
    if (currentStep < steps.length - 1) {
      showStep(currentStep + 1);
    } else {
      // Submit the form
      alert('Form submitted successfully!');
    }
  }
}

function prevStep() {
  showStep(currentStep - 1);
}

function validateStep(stepIndex) {
  const input = document.getElementById(`step${stepIndex + 1}-input`);
  const errorMessage = document.getElementById(`step${stepIndex + 1}-error`);
  if (!input.checkValidity()) {
    errorMessage.textContent = input.validationMessage;
    return false;
  }
  errorMessage.textContent = '';
  return true;
}

function updateProgressBar() {
  const progress = (currentStep + 1) / steps.length * 100;
  progressBar.style.width = `${progress}%`;
}

nextBtn.addEventListener('click', nextStep);
prevBtn.addEventListener('click', prevStep);

// Show the initial step and update progress bar
showStep(currentStep);
