function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    // console.log(file);
    const formData = new FormData();
    // console.log(formData);
    formData.append('file', file);

    // const filePathInput = document.getElementById('filePath');
    // filePathInput.value = fileInput.value;

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json()
            //  {
            // if (response.ok) {
            //     return response.text();
            // }
            // throw new Error('Network response was not ok.');
        // }
        )
        .then(data => {
            // console.log(data.data);
            // let d = JSON.parse(data);
            // let p = document.querySelector(".pre");
            // p.innerHTML = d.data;


            for (let i = 0; i < data.data.length; i++) {

                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                td1.innerText = data.data[i].col1;

                var td2 = document.createElement("td");
                td2.innerText = data.data[i].col2;

                var td3 = document.createElement("td");
                td3.innerText = data.data[i].col3;

                // var td4 = document.createElement("td");
                // td4.innerText = data.data[i].role;

                // var td5 = document.createElement("td");
                // td5.innerText = data.data[i].dateofbirth;
             
             
                // var td6 = document.createElement("td");

                // td6.innerText = data.data[i].dateofjoining;

                tr.append(td1, td2, td3);

                document.querySelector("tbody").append(tr);

            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}










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
