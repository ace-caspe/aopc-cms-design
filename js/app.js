// let darkmode = window.localStorage.getItem("darkmode");

// console.log(darkmode);
// if (darkmode) {
//   document.body.classList.add("darkmode");
// } else {
//   document.body.classList.remove("darkmode");
// }
let toggle = document.querySelector("#darkmode");
toggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("darkmode");
    document.getElementById("logo").src = "/img/AOPC-White.png";
    window.localStorage.setItem("darkmode", true);
  } else {
    document.body.classList.remove("darkmode");
    window.localStorage.setItem("darkmode", false);
    document.getElementById("logo").src = "/img/AOPC-Black.png";
  }
});

// Top User Graph, Please 4 data only and make sure that the data value are converted to percentage
const topBusinesOutlet = [
  {
    name: "Others",
    totalVisit: 40, //percentage
  },
  {
    name: "El Faro",
    totalVisit: 30, //percentage
  },
  {
    name: "Toro Toro",
    totalVisit: 10, //percentage
  },
  {
    name: "Al Sufra",
    totalVisit: 10, //percentage
  },
];

const pieGraphMovement = (elementContainer, data) => {
  let oldValue = 0;
  let styleString = "";
  let startingPoint = "";
  const color = {
    0: " var(--accent)",
    1: " var(--primary)",
    2: " var(--secondary-brown)",
    3: " var(--secondary-light)",
  };
  data.map((value, key) => {
    startingPoint = oldValue == 0 ? "" : `${oldValue}%`;
    let newValue = value.totalVisit + oldValue;
    styleString +=
      oldValue == 0
        ? `${color[key]} ${startingPoint} ${value.totalVisit}%`
        : `,${color[key]} ${startingPoint} ${newValue}%`;
    oldValue += value.totalVisit;
  });
  console.log(styleString);
  document
    .querySelector(`${elementContainer}`)
    .setAttribute("style", `background: conic-gradient(${styleString})`);
};

const populateInfo = (elementContainer, data) => {
  let element = document.querySelector(`${elementContainer}`);
  data.map((value, key) => {
    // console.log();
    element.children[key].children[1].innerText = value.name;
    element.children[key].children[2].innerText = `${value.totalVisit}%`;
  });
};

const populateTable = (elementContainer, data) => {
  let element = document
    .querySelector(`${elementContainer}`)
    .children[0].getElementsByTagName("tbody");
  data.map((value, key) => {
    if (value.name !== "Others") {
      let newRow = element[0].insertRow();
      let nameCell = newRow.insertCell();
      let valueCell = newRow.insertCell();
      var nameNode = document.createTextNode(value.name);
      var valueNode = document.createTextNode(value.totalVisit);
      nameCell.appendChild(nameNode);
      valueCell.appendChild(valueNode);
    }
  });
};

//populateTable("#to-pie-table", topBusinesOutlet);
pieGraphMovement("#to-pie-graph", topBusinesOutlet);
populateInfo("#tr-pie-graph-info", topBusinesOutlet);

// fetch("http://192.168.100.90/api/ApiBusiness/BusinessList", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiJWMy41IiwibmJmIjoxNjcyNjY2NjkwLCJleHAiOjE2ODEzMDY2OTAsImlhdCI6MTY3MjY2NjY5MH0.Pr9t21HPo8NkVNQRN5PMVK9mLx_Zoc-daVNPcCls3oE",
//   },
// })
//   .then((response) => {
//     console.log(response.json());
//   })
//   .then((data) => {
//     //handle data
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
