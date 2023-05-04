if (!sessionStorage.getItem("auth")) {
  window.location.href = "/";
}

let timeoutId;

function resetSessionTimeout() {
  clearTimeout(timeoutId);
  // sessionStorage.clear();
  timeoutId = setTimeout(showSessionTimeoutModal, 500000);
}

function showSessionTimeoutModal() {
  const modal = new bootstrap.Modal(
    document.getElementById("session-timeout-modal"),
    {
      backdrop: "static",
      keyboard: false,
    }
  );

  modal.show();
  sessionStorage.clear();
}

// if(sessionStorage.getItem('')){
//   window.location.assign('/');
// }

document.addEventListener("mousemove", resetSessionTimeout);
document.addEventListener("keydown", resetSessionTimeout);
document.addEventListener("scroll", resetSessionTimeout);

document.querySelector("#ok-btn").addEventListener("click", () => {
  window.location.href = "/";
});

resetSessionTimeout();

$(document).ready(function () {
  $("#myTable").DataTable();
});

function logout() {
  sessionStorage.clear();

  window.location.href = "/";
}

