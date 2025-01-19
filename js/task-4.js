const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formEmail = form.querySelector('input[name="email"]');
  const formPassword = form.querySelector('input[name="password"]');

  const formEmailValue = formEmail.value.trim();
  const formPasswordValue = formPassword.value.trim();

  if (formEmailValue === '' || formPasswordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formOject = {
    email: formEmailValue,
    password: formPasswordValue,
  };

  console.log(formOject);

  form.reset();
});
