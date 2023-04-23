function login() {
  event.preventDefault();
  const form = document.querySelector("#login-form");
  const formData = new FormData(form);
  console.log("formData", form);

  const username = formData.get("username");
  const password = formData.get("password");

  fetch("/admin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ username, password }),
  }).then((response) => {
    console.log(response);

    if (response.status === 200) {
      console.log("OK");
      window.location.href = "/dashboard";
    } else if (response.status === 401) {
      response.text().then((errorMessage) => {
        console.log("NOT OK");

        alert(errorMessage);
        //form.reset();
      });
    }
  });
}


