function loadpage() {
  fetch(`https://api.sheetson.com/v2/sheets/Masks`, {
    headers: {
      Authorization:
        "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
      "X-Spreadsheet-Id": "1-ZB401_2pa2zhs5iFFee65_Hgv1VqKJMsyoZUiORtts",
    },
  })
    .then((r) => r.json())
    .then((result) =>
      localStorage.setItem("Masks", JSON.stringify(result.results))
    );
  localStorage.setItem("Sort", "");
}

function sortDate() {
  let e = JSON.parse(localStorage.getItem("Masks"));
  if (localStorage.getItem("Sort") !== "A_D") {
    localStorage.setItem("Sort", "A_D");
    makeTable(e.sort((a, b) => new Date(a.EXP_Date) - new Date(b.EXP_Date)))
  } else {
    localStorage.setItem("Sort", "D_D");
    makeTable(
      e.sort((a, b) => new Date(a.EXP_Date) - new Date(b.EXP_Date)).reverse()
    );
  }
}
function makeTable(a){
  let e = a;
  var table = document.getElementById('mt')
  for (
      let j = table.rows.length - 1, row;
      (row = table.rows[j]) && j > 0;
      j--
    ) {
  table.rows[j].remove()
}
  for (let i = 0; i< e.length; i++){
    let newrow = document.createElement('tr')
    let brand = document.createElement('td')
    let exp = document.createElement('td')
    let astm = document.createElement('td')
    let color = document.createElement('td')
    let boxes = document.createElement('td')
    let pbb = document.createElement('td')
    let ip = document.createElement('td')
    brand.innerHTML = e[i].Brand
    exp.innerHTML = e[i].EXP_Date
    astm.innerHTML = e[i].ASTM
    color.innerHTML = e[i].Color
    boxes.innerHTML = e[i].Boxes
    pbb.innerHTML = e[i].PiecePBox
    ip.innerHTML = e[i].IndivP
    newrow.appendChild(brand)
    newrow.appendChild(exp)
    newrow.appendChild(astm)
    newrow.appendChild(color)
    newrow.appendChild(boxes)
    newrow.appendChild(pbb)
    newrow.appendChild(ip)
    table.appendChild(newrow)
  }
}