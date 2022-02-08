function loadpage(){
  fetch(
    `https://api.sheetson.com/v2/sheets/Masks`,
    {
      headers: {
        Authorization:
          "Bearer Wga4ggDAp0JkrhjcppkjovcjtzsCOj-CSDROrRExAQkD193br8wE0bwEKts",
        "X-Spreadsheet-Id": "1-ZB401_2pa2zhs5iFFee65_Hgv1VqKJMsyoZUiORtts"
      }
    }
  )
    .then(r => r.json())
    .then(result => cons(result.results));
}
function cons(e){
    console.log(e.sort((a, b) => new Date(a.EXP_Date) - new Date(b.EXP_Date)))
}