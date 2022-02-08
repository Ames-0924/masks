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
  var table = document.getElementById('mt')
  for (
      let j = table.rows.length - 1, row;
      (row = table.rows[j]) && j > 0;
      j--
    ) {
  table.removeChild(table.rows[j])
}
}