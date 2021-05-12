const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
console.log(batteryBatches)
let totalBatteries = batteryBatches.reduce(function(total, element){
    let whatshappenin = element+total
    console.log("total: ", total,"element: ", element,"whatshappenin: ",whatshappenin)
    return whatshappenin
})
