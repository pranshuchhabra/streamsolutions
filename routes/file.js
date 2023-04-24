// function uploadFile() {
//     const fileInput = document.getElementById('fileInput');
//     console.log("fileinput",fileInput);


//     const file = fileInput.files[0];
//     console.log(file);

//     const formData = new FormData();
//     console.log(formData);


//     formData.append('file', file);

//     fetch('/upload', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response.text();
//             }
//             throw new Error('Network response was not ok.');
//         })
//         .then(data => {
//             console.log(data);
//             document.getElementById("fileContent").innerText = data;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }