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

let corporate = [
  {
    name: "Comapny1",
    totalVisit: "60",
  },
  {
    name: "Comapny2",
    totalVisit: "110",
  },
  {
    name: "Comapny3",
    totalVisit: "1020",
  },
  {
    name: "Odecci",
    totalVisit: "100",
  },
  {
    name: "asdasd dasda asdasd",
    totalVisit: "60",
  },
];

const topCorpItem = document.querySelectorAll(".graph-item");
corporate.map((value, key) => {
  topCorpItem[key].children[0].style.height = `${value.totalVisit}px`;
  topCorpItem[
    key
  ].children[0].title = `${value.totalVisit} total employee visit`;
  topCorpItem[key].children[1].innerHTML = value.name;
});

fetch("http://192.168.100.90/api/ApiBusiness/BusinessList", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiJWMy41IiwibmJmIjoxNjcyNjY2NjkwLCJleHAiOjE2ODEzMDY2OTAsImlhdCI6MTY3MjY2NjY5MH0.Pr9t21HPo8NkVNQRN5PMVK9mLx_Zoc-daVNPcCls3oE",
  },
})
  .then((response) => {
    console.log(response.json());
  })
  .then((data) => {
    //handle data
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
