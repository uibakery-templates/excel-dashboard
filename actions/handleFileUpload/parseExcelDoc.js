if ({{data}} === null) {
  return;
}

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.load({{data}});
const worksheet = workbook.getWorksheet(1); // Assuming the data is in the first sheet
const tableKeys = worksheet.getRow(1).values;
const table = []

worksheet.eachRow((row, rowIndex) => {
  if (rowIndex === 1) return;
  const rowObj = {};
  row.eachCell((cell, colIndex) => {
    rowObj[tableKeys[colIndex]] = cell.value
  });
  table.push(rowObj);
});

return table;
