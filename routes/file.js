// function uploadFile() {
//     const fileInput = document.getElementById('file');
//     const file = fileInput.files[0];
//     // console.log(file);
//     const formData = new FormData();
//     // console.log(formData);
//     formData.append('file', file);

//     const filePathInput = document.getElementById('filePath');
//     filePathInput.value = fileInput.value;

//     fetch('/upload', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => {
//       if (response.ok) {
//         return response.text();
//       }
//       throw new Error('Network response was not ok.');
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
//   }










// const tableBody = document.getElementById("table-body");

// tableBody.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete-btn")) {
//     const row = event.target.parentNode.parentNode;
//     const index = event.target.dataset.index;
//     const confirmDelete = confirm("Are you sure you want to delete this row?");
//     if (confirmDelete) {
//       // Remove row from table
//       tableBody.removeChild(row);

//       // Remove row from data array
//       data.splice(index, 1);

//       // Update data in file (assuming data is stored in a file)
//       fs.writeFileSync("user1.json", JSON.stringify(data));
//     }
//   }
// });
