const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//sum of all of the battery amounts

const totalBatteries = batteryBatches.reduce((total,number) => number + total,0 ) 

console.log(totalBatteries)
