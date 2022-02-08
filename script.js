function loadpage() {
  fetch(`https://api.sheetson.com/v2/sheets/Masks`, {
    headers: {
      Authorization:
        "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
      "X-Spreadsheet-Id": "1-ZB401_2pa2zhs5iFFee65_Hgv1VqKJMsyoZUiORtts",
    },
  })
    .then((r) => r.json())
    .then((result) =>hello(result.results)
    );

}
function hello(e){
        localStorage.setItem("Masks", JSON.stringify(e));
    localStorage.setItem("Sort", "");
  sortDate();
}
function sortDate() {
  let e = JSON.parse(localStorage.getItem("Masks"));
  if (localStorage.getItem("Sort") !== "A_D") {
    localStorage.setItem("Sort", "A_D");
    makeTable(e.sort((a, b) => new Date(a.EXP_Date) - new Date(b.EXP_Date)));
  } else {
    localStorage.setItem("Sort", "D_D");
    makeTable(
      e.sort((a, b) => new Date(a.EXP_Date) - new Date(b.EXP_Date)).reverse()
    );
  }
}
function makeTable(a) {
  localStorage.setItem("Masks", JSON.stringify(a));
  let e = a;
  var table = document.getElementById("mt");
  for (
    let j = table.rows.length - 1, row;
    (row = table.rows[j]) && j > 0;
    j--
  ) {
    table.rows[j].remove();
  }
  for (let i = 0; i < e.length; i++) {
    let newrow = document.createElement("tr");
    let brand = document.createElement("td");
    let exp = document.createElement("td");
    let astm = document.createElement("td");
    let color = document.createElement("td");
    let boxes = document.createElement("td");
    let pbb = document.createElement("td");
    let ip = document.createElement("td");
    brand.setAttribute("onclick", "details(" + i + ")");
    brand.innerHTML = e[i].Brand;
    if (e[i].EXP_Date == "1/1/2040") {
      exp.innerHTML = "?";
    } else {
      exp.innerHTML = e[i].EXP_Date;
    }
    astm.innerHTML = e[i].ASTM;
    color.innerHTML = e[i].Color;
    boxes.innerHTML = e[i].Boxes;
    pbb.innerHTML = e[i].PiecePBox;
    ip.innerHTML = e[i].IndivP;
    newrow.appendChild(brand);
    newrow.appendChild(exp);
    newrow.appendChild(astm);
    newrow.appendChild(color);
    newrow.appendChild(boxes);
    newrow.appendChild(pbb);
    newrow.appendChild(ip);
    table.appendChild(newrow);
  }
}
function details(num) {
  let e = JSON.parse(localStorage.getItem("Masks"));
  document.getElementById("br").innerHTML = e[Number(num)].Brand;
  document.getElementById("ex").innerHTML = e[Number(num)].EXP_Date;
  document.getElementById("as").innerHTML = e[Number(num)].ASTM;
  document.getElementById("co").innerHTML = e[Number(num)].Color;
  document.getElementById("pi").innerHTML = e[Number(num)].PiecePBox;
  document.getElementById("inv").innerHTML = e[Number(num)].IndivP;
  document.getElementById("bo").innerHTML = e[Number(num)].Boxes;
  document.getElementById('snum').innerHTML = num
  modal.style.display = "block";
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function plus(b) {
  let e = JSON.parse(localStorage.getItem("Masks"));
  if (b < 0 && document.getElementById("bo").innerHTML == 0) {
    alert("Cannot Minus");
  } else {
    document.getElementById("bo").innerHTML =
      Number(document.getElementById("bo").innerHTML) + Number(b);
    fetch("https://api.sheetson.com/v2/sheets/Masks/"+e[Number(document.getElementById('snum').innerHTML)].Original, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
        "X-Spreadsheet-Id": "1-ZB401_2pa2zhs5iFFee65_Hgv1VqKJMsyoZUiORtts",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Boxes: document.getElementById("bo").innerHTML }),
    })
      .then((r) => r.json())
      .then((result) => console.log(result));
    document.querySelectorAll('.smallbtn').forEach(element => element.disabled = true)
    setTimeout(function(){document.querySelectorAll('.smallbtn').forEach(element => element.disabled = false)},4500)
  }
}
function newdata(brand, )