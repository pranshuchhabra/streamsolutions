if (sessionStorage.getItem('auth')) {
  window.location.href = "/dashboard";
}





function login() {
  event.preventDefault();
  const form = document.querySelector("#login-form");


  const formData = new FormData(form);
  // console.log("formData", form);

  const username = formData.get("username");
  const password = formData.get("password");

  if (!username && !password) {
    let a = document.querySelector(".allreq");
    a.style.color = 'red';
    a.innerHTML = 'All Fields Required';
    return;
  }


  if (!username) {
    let a = document.querySelector(".emailreq");
    a.style.color = 'red';
    a.innerHTML = 'Email is Required';
    return;
  }

  if (!username.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
    let a = document.querySelector(".emailreq");
    a.style.color = 'red';
    a.innerHTML = 'Wrong Format';
    return;
  }


  if (!password) {
    let a = document.querySelector(".passreq");
    a.style.color = 'red';
    a.innerHTML = 'Password is Required';
    return;
  }






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

      sessionStorage.setItem("auth", true);

      window.location.href = "/dashboard";

    }
    else if (response.status === 401) {

      response.text().then((errorMessage) => {

        console.log("NOT OK");
        // console.log(errorMessage);
        alert(errorMessage);
        form.reset();
      });
    }
  });
}




function clear2(){


  let e = document.querySelector(".emailreq");
  e.innerHTML = '';

  let a = document.querySelector(".allreq");
  a.innerHTML = '';

  
  let p = document.querySelector(".passreq");
  p.innerHTML = '';


}

