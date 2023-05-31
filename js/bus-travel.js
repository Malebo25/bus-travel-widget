// create a factory function called bus travel

// create a closures that set and return Points
// create variables that store number of single trips, price per trip  and initialize it to zero
// create variables that store number of return trips and price per return trip

// create a closure that takes in peak/off peak and location call it calculate
//  inside the calculate closure calculate and store number of single trips for peak or off-peak
// create a closure called return ; if user calls return calculate and store return values in return variable

function busTravel() {
  let pattern = /^[0-9]+$/;
  let singleTripPeak = 0;
  let pricePerTripPeak = 0

  let singleTripOffPeak = 0;
  let pricePerTripOffPeak = 0;

  let numberOfReturnPeak = 0;
  let priceReturnPeak = 0;

  let numberOfReturnOffPeak = 0;
  let priceReturnOffPeak = 0;
  
var  userPoints = 0;

  function setPoints(points) {
    if (pattern.test(points)) {
      
      userPoints = points; 
    }
   return false
  }
  function getPoints() {
    return userPoints;
  }

  function calculate(location, time) {
    if (location === "Khayelitsha" && time === "offPeak") {
      if (points >= 40) {
        pricePerTripOffPeak = 40;
        singleTripOffPeak = points / pricePerTripOffPeak;
      }
      return false;
    } else if (location === "Khayelitsha" && time === "Peak") {
      if (points >= 50) {
        pricePerTripPeak = (40 * 25) / 100 + 40;
        singleTripPeak = points / pricePerTripPeak;
      }
      return false;
    } else if (location === "Dunoon" && time === "offPeak") {
      if (points >= 25) {
        pricePerTripOffPeak = 25;
        singleTripOffPeak = points / pricePerTripOffPeak;
      }
      return false;
    } else if (location === "Dunoon" && time === "Peak") {
      if (points >= 31.25) {
        pricePerTripPeak = (25 * 25 / 100 )+ 25;
        singleTripPeak = points / pricePerTripPeak;
      }
      return false;
    } else if (location === "Mitchells plain" && time === "offPeak") {
      if (points >= 30) {
        pricePerTripOffPeak = 30;
        singleTripOffPeak = points / pricePerTripOffPeak;
      }
      return false;
    } else if (location === "Mitchells plain" && time === "Peak") {
      if (points >= 37.5) {
        pricePerTripPeak = (30 * 25 / 100) + 30;
        singleTripPeak = points / pricePerTripPeak;
      }
      return false;

    }
    

  }
  function getPeakTrips() {
    return singleTripPeak;
  }
  function getOffPeakTrips() {
    return singleTripOffPeak;
  }

  function getPeakPrice() {
    return pricePerTripPeak;
  }
  function getOffPeakPrice() {
    return pricePerTripOffPeak;
  }




  return {
    setPoints,
    getPoints,
    calculate,
    getPeakTrips,
    getOffPeakTrips,
    getPeakPrice,
    getOffPeakTrips,
    
  };
}
