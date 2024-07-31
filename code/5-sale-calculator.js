// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let money = ('How much money do you have to spend ?')
  let item = ('How much is the item normally ?')
  let discount = ('And what is the discount pecentage ?')
  let percentage = discount * 0.01
  let one = 1 - percentage
  let cost = item * one
  if (cost > money) {
  alert("You don't have enough. You have $" + money+ ' to spend, but even with ' + discount + '% off, $' + item +' only comes down to $' + cost +'.')
  } else {
  alert ("You have enough. You have $" + money + ' to spend, it is less than ' + discount + '% off, $' + item + 'only comes down to $'+ cost + '.')
}
