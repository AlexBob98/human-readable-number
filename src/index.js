module.exports = function toReadable(number) {
  const numOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const numTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (number < 20) return numOne[number]

  if (number < 100 && number >= 20) {
      if (number % 10 === 0) return numTwo[number / 10]

      if (number % 10) {
          return  numTwo[Math.floor(number / 10)] + ' ' + numOne[number % 10];
      }
  }

  if (number >= 100) {
      if (number % 100 === 0) return  numOne[number / 100] + ' hundred'

      if (number % 100 && number % 100 < 20) {
          return  numOne[Math.floor(number / 100)] + ' hundred ' + numOne[number % 100]; 
      }

      if (number % 100 && number % 100 >= 20) {
          return number % 10 === 0
              ? numOne[Math.floor(number / 100)] + ' hundred ' + numTwo[Math.floor((number % 100) / 10)]
              : numOne[Math.floor(number / 100)] + ' hundred ' + numTwo[Math.floor((number % 100) / 10)] + ' ' + numOne[number % 10]
      }
     
  }
}