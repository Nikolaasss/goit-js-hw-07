document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {};
    for (const input of loginForm.elements) {
      if (input.type !== 'submit') {
        formData[input.name] = input.value.trim();
      }
    }

    if (!formData.email || !formData.password) {
      alert('All form fields must be filled in');
      return;
    }

    console.log(formData);
    loginForm.reset();
  });
});
