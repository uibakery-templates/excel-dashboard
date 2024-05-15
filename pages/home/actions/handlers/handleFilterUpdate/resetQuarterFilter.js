const filter = {{data}};
if (!filter.year && filter.quarter) {
  {{ui.filters.setValue({...filter, quarter: undefined})}}
}
return {{data}};