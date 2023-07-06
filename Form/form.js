let submitBTN = document.getElementById("submitBTN");
let userDetailes = [
  {
    fstname: "Adarsh ",
    lstName: "Helvar",
    usrNam: "helvarAdarsh",
    city: "Sagar",
    zipcode: "577401",
  },
  {
    fstname: "Varsha  ",
    lstName: "",
    usrNam: "guddivarsha",
    city: "Sagar",
    zipcode: "577401",
  },
];

const submitHandler = (e) => {
  e.preventDefault();
  let fName = document.getElementById("validationCustom01").value;
  let lName = document.getElementById("validationCustom02").value;
  let userName = document.getElementById("validationCustomUsername").value;
  let city = document.getElementById("validationCustom03").value;
  let zip = document.getElementById("validationCustom05").value;
  console.log(fName, lName, userName, city, zip);

  userDetailes.push({
    fstname: fName,
    lstName: lName,
    usrNam: userName,
    city: city,
    zipcode: zip,
  });

  let tableHTML = '<table class="table">';
  tableHTML +=
    "<thead><tr><th> Name</th><th>Username</th><th>City</th><th>Zip Code</th></tr></thead>";
  tableHTML += "<tbody>";

  userDetailes.map((curElm) => {
    tableHTML += "<tr>";
    tableHTML += `<td>${curElm.fstname + curElm.lstName}</td>`;
    tableHTML += `<td>${curElm.usrNam}</td>`;
    tableHTML += `<td>${curElm.city}</td>`;
    tableHTML += `<td>${curElm.zipcode}</td>`;
    tableHTML += "</tr>";
  });

  tableHTML += "</tbody></table>";

  const userTable = document.getElementById("userTable");
  userTable.innerHTML = tableHTML;
};

submitBTN.addEventListener("click", submitHandler);
