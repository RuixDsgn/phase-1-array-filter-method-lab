function findMatching(drivers, name) {
   return drivers.filter(function(driver){
        return driver.toUpperCase() === name.toUpperCase()
    })
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver){
         return driver.charAt(0) === name.charAt(0)
     })
 }

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver["name"] === name
    })
}