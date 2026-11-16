// Find the form, the input and the message line
const form = document.querySelector('.newsletter__form');
const input = form.querySelector('input[type="email"]');
const msg = form.querySelector('.form-msg');

// Run this when someone clicks Subscribe (or presses Enter)
form.addEventListener('submit', (e) => {
  e.preventDefault();   // stop the page from reloading (the default for forms)

  // Check: something@something.something
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());

  input.setAttribute('aria-invalid', String(!ok));  // red border if not ok
  msg.classList.toggle('is-error', !ok);            // red text if not ok

  if (!ok) {
    msg.textContent = 'Please enter a full email address.';
    input.focus();      // put the cursor back in the box
    return;             // stop here
  }

  msg.textContent = 'Thanks — see you in your inbox.';
  form.reset();         // clear the box
});