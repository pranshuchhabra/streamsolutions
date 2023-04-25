function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  // console.log(file);
  const formData = new FormData();
  // console.log(formData);
  formData.append("file", file);

  // const filePathInput = document.getElementById('filePath');
  // filePathInput.value = fileInput.value;

  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = data.data[i].col1;

        var td2 = document.createElement("td");
        td2.innerText = data.data[i].col2;

        var td3 = document.createElement("td");
        td3.innerText = data.data[i].col3;

        tr.append(td1, td2, td3);

        document.querySelector("tbody").append(tr);
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
