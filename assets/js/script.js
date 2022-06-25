const currentNumber = document.getElementById('currentNumber')
let count = 0

const buttonSubtract = document.querySelector('#subtract')
const buttonAdd = document.querySelector('#add')

// function increment() {
//   currentNumber = currentNumber + 1
//   currentNumberWrapper.innerHTML = currentNumber
// }
// function decrement() {
//   currentNumber = currentNumber - 1
//   currentNumberWrapper.innerHTML = currentNumber
// }

buttonSubtract.addEventListener('click', () => {
  count--
  document.getElementById('add').disabled = false

  if (count === -15) {
    document.getElementById('subtract').disabled = true
  }
  if (count <= -0) {
    document.getElementById('currentNumber').style['color'] = 'red'
  }
  currentNumber.innerHTML = count
})

buttonAdd.addEventListener('click', () => {
  count++
  document.getElementById('subtract').disabled = false

  if (count === 15) {
    document.getElementById('add').disabled = true
  }
  if (count >= 1) {
    document.getElementById('currentNumber').style['color'] = 'green'
  }

  currentNumber.innerHTML = count
})
