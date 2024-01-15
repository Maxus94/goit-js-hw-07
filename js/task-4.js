const form = document.querySelector(".login-form");
const user = {};
form.addEventListener("submit", submitHandler);
function submitHandler(evt) {
  evt.preventDefault();
  if (!evt.target.elements.email.value || !evt.target.elements.password.value) {
    alert("All form fields must be filled in");
  } else {
    new FormData(evt.currentTarget).forEach((value, key) => {
      user[key] = value;
    });
    console.log(user);
    form.reset();
  }
}
