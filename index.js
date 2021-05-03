const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");



//this function retrieves the date from browser and translates the digital clock into analog using CSS
function setDate(){
  const now = new Date();

  //seconds
  const seconds = now.getSeconds();
  const secDegrees = ((seconds / 60) * 360) + 90;

  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  console.log("sec: " + secDegrees);

  //minutes
  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  console.log("min: " + minDegrees);

  // hours
  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) *30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  console.log("Hour: " + hourDegrees);

};
