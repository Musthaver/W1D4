var countdownGenerator = function (x) {
    
    return function() {
        if (x < 0) {
            console.log("Rockets already gone, bub!");
        } else if (x === 0) {
            console.log("Blast Off!");
        } else {
            console.log("T-minus " + x)
        }
        x--;
    }
}

  
  var countdown = countdownGenerator(10)