const excelSheetData = {{state.filteredExcelData}};
if (Object.keys(excelSheetData).length === 0) return {};

const getUniqueValues = (array, field) => {
  return array.filter((value, index, self) => index === self.findIndex((row) => row[field] === value[field])).map((row) => row[field]);
};

return {
  year: getUniqueValues(excelSheetData, 'Year'),
  saleType: getUniqueValues(excelSheetData, 'SALE TYPE'),
  region: getUniqueValues(excelSheetData, 'Region'),
};