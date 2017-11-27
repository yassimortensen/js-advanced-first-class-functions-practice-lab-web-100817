// Code your solution in this file!
function logDriverNames(array){
  array.map(function (driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(array, hometown){
  let list = array.filter(function (driver){
    return driver.hometown === hometown;
  });
  list.map(function (driver){
    console.log(driver.name);
  });
}

function driversByRevenue(array){
  let newArray = [...array];
  return newArray.sort(function (driver1, driver2){
    return driver1.revenue - driver2.revenue
  });
}

function driversByName(array){
  let newArray = [...array];
  return newArray.sort(function (driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
}

function totalRevenue(array){
  let newArray = [... array];
  return newArray.reduce(function (sum, element){
    return sum + element.revenue
  }, 0)
}

function averageRevenue(array){
  let newArray = [... array];
  let sums = newArray.reduce(function (sum, element){
    return sum + element.revenue
  }, 0)
  return sums / newArray.length
}
