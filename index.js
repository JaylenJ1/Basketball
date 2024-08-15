let homeScore = document.getElementsByClassName("home-score")
let guestScore = document.getElementsByClassName("guest-score")

function addOne() {
  homeScore += 1
  homeScore.textContent = homeScore
}
function addTwo() {
  homeScore += 2
  homeScore.textContent = homeScore
}
function addThree() {
  homeScore += 3
  homeScore.textContent = homeScore
}
function addOneG() {
  guestScore += 1
  guestScore.textContent = guestScore
}
function addTwoG() {
  guestScore += 2
  guestScore.textContent = guestScore
}
function addThreeG() {
  guestScore += 3
  guestScore.textContent = guestScore
}