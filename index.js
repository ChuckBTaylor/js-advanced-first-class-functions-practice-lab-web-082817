// Code your solution in this file!
function logDriverNames(array_of_objects) {
  array_of_objects.forEach(o => console.log(o.name));
}

function logDriversByHometown(array_of_objects, location) {
  array_of_objects.forEach(function(o) {
    if (o.hometown === location) {
      console.log(o.name);
    }
  });
}

function driversByRevenue(array_of_objects) {
  new_array = [...array_of_objects];
  return new_array.sort((el, nEl) => el.revenue - nEl.revenue);
}

function driversByName(array_of_objects) {
  new_array = [...array_of_objects];
  return new_array.sort((el, nEl) => el.name.localeCompare(nEl.name));
}

function totalRevenue(array_of_objects) {
  return array_of_objects.reduce((agg, el) => (agg += el.revenue), 0);
}

function averageRevenue(array_of_objects) {
  return totalRevenue(array_of_objects) / array_of_objects.length;
}
