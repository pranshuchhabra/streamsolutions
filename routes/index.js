

function login() {
    event.preventDefault()
    const form = document.querySelector("#login-form");
    const formData = new FormData(form);
    console.log("formData", form)

    fetch("/admin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"

        },
        body: JSON.stringify({ username: "", password: "paras@123" }),
    })
        .then((response) => {

            console.log(response)
            if (response.status === 200) {
                console.log("in 200")
                window.location.href = "/dashboard"
            }
            else if (response.status === 401) {
                response.text().then((errorMessage) => {
                    console.log("IN 400")

                    console.log(errorMessage);
                    form.reset();
                });

            }
        })



}