const quarters = { q1: ['Jan', 'Feb', 'March'], q2: ['Apr', 'May', 'Jun'], q3: ['Jul', 'Aug', 'Sep'], q4: ['Oct', 'Nob', 'Dec'] };
let excelData = {{actions.handleFileUpload.data}};
const filter = {{data}};

if (filter.year) {
  excelData = excelData.filter((row) => row['Year'] === filter.year);
  if (filter.quarter) {
    excelData = excelData.filter((row) => quarters[filter.quarter].includes(row['Month']));
  }
}
if (filter.region) {
  excelData = excelData.filter((row) => row['Region'] === filter.region);
}
if (filter.saleType) {
  excelData = excelData.filter((row) => row['SALE TYPE'] === filter.saleType);
}

return excelData;