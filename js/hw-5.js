let monthNumber = 12

if (monthNumber < 1 || monthNumber > 12) {
  console.log('No')
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log('Зима')
      break
    case 3:
    case 4:
    case 5:
      console.log('Весна')
      break
    case 6:
    case 7:
    case 8:
      console.log('Лето')
      break
    case 9:
    case 10:
    case 11:
      console.log('Осень')
      break

    default:
      console.log('Такого месяца нет')
      break
  }
}