const excelSheetData = {{state.filteredExcelData}};
if (Object.keys(excelSheetData).length === 0) return {};
const countArrayValues = (array, field) => array.reduce((acc, obj) => ((acc[obj[field]] = (acc[obj[field]] || 0) + 1), acc), {});

const mapChartData = (countObject) => Object.entries(countObject).map(([name, value]) => ({ name, value }));

const findMostCommonValue = (array, field) => {
  const valueCount = countArrayValues(array, field);
  return Object.keys(valueCount).reduce((a, b) => (valueCount[a] > valueCount[b] ? a : b));
};

const totalSales = excelSheetData.reduce((sum, val) => sum + val['Total Selling Value'], 0);
const totalProfit = totalSales - excelSheetData.reduce((sum, val) => sum + val['Total Buying Value'], 0);

return {
  numeric: [
    { title: 'Total sales', value: totalSales, chart: null },
    { title: 'Total profit', value: totalProfit, chart: null },
    { title: 'Average profit per sale', value: totalProfit / excelSheetData.length, chart: null },
  ],
  charted: [
    { title: 'Primary Sales Channel', value: findMostCommonValue(excelSheetData, 'SALE TYPE'), chart: mapChartData(countArrayValues(excelSheetData, 'SALE TYPE')) },
    { title: 'Dominant Payment Method', value: findMostCommonValue(excelSheetData, 'PAYMENT MODE'), chart: mapChartData(countArrayValues(excelSheetData, 'PAYMENT MODE')) },
    { title: 'Top-selling Product', value: findMostCommonValue(excelSheetData, 'PRODUCT'), chart: null },
    { title: 'Popular Product Categories', value: findMostCommonValue(excelSheetData, 'CATEGORY'), chart: mapChartData(countArrayValues(excelSheetData, 'CATEGORY')) },
  ],
};