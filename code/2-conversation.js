// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my sports discussion program.')

  alert('Do you like running? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("That's good. Do you do athletics?.")
    let athletics = prompt()
    if (athletics = 'yes'){
      alert('Good luck in your next race')
  } else {
    alert('Just for fun then')
  }
}else {
  alert('Maybe you like a different sport. Do you watch O1ympic athletics?')
  let O1ympicm = prompt()
  if (O1ympicm == 'yes'){
    alert ("That's good, it's inspiring")
  }else{
    alert("It's not for everyone.")
  }
 }
  alert('Goodbye')
}

function age() {
  let name = prompt('What is your name')
  let age = prompt ('How old are you' + name + '?')
  age = Number(age)
  let retire = ''
  let drive = ''
  let vote = ''
  let me = ''
  if (age > 1 && age < 130){
  if (age > 65) {
    retire = ('old enough to retire')
  }else{
    retire = ('not yet old enough to retire')
    
  }
  
}
