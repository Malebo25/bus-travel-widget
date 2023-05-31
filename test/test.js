describe("set and retrieve user points", function () {
  it("It should set points", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(250);
    assert.equal(250, pointsValue.getPoints());
  });
  it("It should set points", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(500);
    assert.equal(500, pointsValue.getPoints());
  });
  it("It should not  set points for user input that is not a number", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints("wybude");
    assert.equal(false, pointsValue.getPoints());
  });
  
});

describe("Calculate number of Single Trips and Price per Trip Offpeak or peak for Khayelitsha", function () {
  it("It should return number of single Trips from Khayelitsha and price per trip (offPeak)", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(80);
    pointsValue.getPoints();
    pointsValue.calculate("Khayelitsha","offPeak")
    assert.equal(2, pointsValue.getOffPeakTrips());
    assert.equal(40, pointsValue.getOffPeakPrice());
    
  });
  it("It should return number of single Trips from Khayelitsha and price per trip (Peak)", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(100);
    pointsValue.getPoints();
    pointsValue.calculate("Khayelitsha", "Peak");
    assert.equal(2, pointsValue.getPeakTrips());
    assert.equal(50, pointsValue.getPeakPrice());
  });
  it("It should not return anything if points are too little ", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(30);
    pointsValue.getPoints();
    pointsValue.calculate("Khayelitsha", "Peak");
    assert.equal(0, pointsValue.getPeakTrips());
    assert.equal(0, pointsValue.getPeakPrice());
  });
  
});

describe("Calculate number of Single Trips and Price per Trip Offpeak or peak for Dunoon", function () {
  it("It should return number of single Trips from Dunoon and price per trip (offPeak)", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(50);
    pointsValue.getPoints();
    pointsValue.calculate("Dunoon", "offPeak");
    assert.equal(2, pointsValue.getOffPeakTrips());
    assert.equal(25, pointsValue.getOffPeakPrice());
  });
  it("It should return number of single Trips from Dunoon and price per trip (Peak)", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(50);
    pointsValue.getPoints();
    pointsValue.calculate("Dunoon", "Peak");
    assert.equal(1, pointsValue.getPeakTrips());
    assert.equal(31.25, pointsValue.getPeakPrice());
  });
  it("It should not return anything if points are too little ", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(30);
    pointsValue.getPoints();
    pointsValue.calculate("Dunoon", "Peak");
    assert.equal(0, pointsValue.getPeakTrips());
    assert.equal(0, pointsValue.getPeakPrice());
  });

});
describe("Calculate number of Single Trips and Price per Trip Offpeak or peak for Mitchells plain", function () {
  it("It should return number of single Trips from Mitchells plain and price per trip (offPeak)", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(90);
    pointsValue.getPoints();
    pointsValue.calculate("Mitchells plain", "offPeak");
    assert.equal(3, pointsValue.getOffPeakTrips());
    assert.equal(30, pointsValue.getOffPeakPrice());
  });
  it("It should return number of single Trips from Dunoon and price per trip (Peak)", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(90);
    pointsValue.getPoints();
    pointsValue.calculate("Mitchells plain", "Peak");
    assert.equal(2, pointsValue.getPeakTrips());
    assert.equal(37.5, pointsValue.getPeakPrice());
  });
  it("It should not return anything if points are too little ", function () {
    let pointsValue = busTravel();
    pointsValue.setPoints(10);
    pointsValue.getPoints();
    pointsValue.calculate("Mitchells plain", "Peak");
    assert.equal(0, pointsValue.getPeakTrips());
    assert.equal(0, pointsValue.getPeakPrice());
  });
});
