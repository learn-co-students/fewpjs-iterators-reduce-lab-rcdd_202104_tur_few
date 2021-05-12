const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code solution here

let totalBatteries = batteryBatches.reduce( (total, currentValue) => {
    let result = 0;
    result = total + currentValue
    return result;
},0);
    
    
    


