

function login() {
    const form = document.querySelector("#login-form");
    const formData = new FormData(form);

    fetch("/admin", {
        method: "POST",
        body: formData,
    });
}