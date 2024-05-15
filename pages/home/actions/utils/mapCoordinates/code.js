if (Object.keys({{state.filteredExcelData}}).length === 0) return {};

const getCoordinates = (region) => {
  const coordinates = {
    "North America": { latitude: 37.09024, longitude: -95.71289 },
    "Europe": { latitude: 51.16569, longitude: 10.45152 },
    "Asia": { latitude: 34.04786, longitude: 100.61965 },
    "South America": { latitude: -14.2350, longitude: -51.9253 },
    "Africa": { latitude: -8.7832, longitude: 34.5085 },
    "Oceania": { latitude: -25.2744, longitude: 133.7751 }
  };
  
  return coordinates[region] || { latitude: null, longitude: null }; 
}

const regionData = {{state.filteredExcelData}}.reduce((acc, row) => {
  acc[row.Region] = (acc[row.Region] || 0) + 1;
  return acc;
}, {});

return Object.entries(regionData).map(([region, value]) => {return {name: region, value, ...getCoordinates(region) } } );