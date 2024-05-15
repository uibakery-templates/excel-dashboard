const excelData = {{state.filteredExcelData}};
if (Object.keys(excelData).length === 0) return [];

const sumValuesByMonth = (data) => {
  const monthlySums = {};
  data.forEach(entry => {
    const date = new Date(entry.DATE);
    const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    monthlySums[key] = (monthlySums[key] || 0) + entry['Total Selling Value'];
  });
  return Object.entries(monthlySums).map(([date, value]) => ({ date, value }));
};

return sumValuesByMonth(excelData);
