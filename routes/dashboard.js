let timeoutId;

function resetSessionTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(showSessionTimeoutModal, 5000);
}

function showSessionTimeoutModal() {
    const modal = new bootstrap.Modal(document.getElementById('session-timeout-modal'), {
        backdrop: 'static',
        keyboard: false
    });
    modal.show();
    // sessionStorage.clear();
}

// Add event listener to reset the timeout whenever user interacts with the page
document.addEventListener('mousemove', resetSessionTimeout);
document.addEventListener('keydown', resetSessionTimeout);
document.addEventListener('scroll', resetSessionTimeout);

// Add event listener to the OK button in the modal footer
document.querySelector('#ok-btn').addEventListener('click', () => {
    window.location.href = '/';
});

resetSessionTimeout(); // start the timer



$(document).ready(function () {
    $("#myTable").DataTable();
});