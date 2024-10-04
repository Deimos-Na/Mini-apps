function isPositive(num) {
  return num > 0
}

function isMale(person) {
  return person.gender === 'male'
}

function filter(arr, ruleFunction) {
  return arr.filter(ruleFunction)
}

console.log(filter([3, -4, 1, 9], isPositive))

const people = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' },
]

console.log(filter(people, isMale))
