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
