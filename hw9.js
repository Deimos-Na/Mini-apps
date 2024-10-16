//Задача 1 ======================================
const title = document.querySelector('#title')
const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
  if (title.style.display === 'none') {
    title.style.display = 'block'
    btn.textContent = 'Скрыть текст'
  } else {
    title.style.display = 'none'
    btn.textContent = 'Показать текст'
  }
})
//задача 2 ======================================
const desc = document.querySelector('#desc')
const btnText = document.querySelector('#btn2')

btnText.addEventListener('click', function () {
  desc.style.color = 'red'
})
//задача 3 =======================================

const changeBtn = document.querySelector('#btn3')

changeBtn.addEventListener('click', function () {
  title.textContent = 'Привет, мир!'
})
//задача 4 ======================================
const descriptions = document.querySelectorAll('.desc')

descriptions.forEach(element => {
  element.textContent = 'Измененный текст'
})
// задача 5 =====================================
const allDesc = document.querySelectorAll('.description')

allDesc.forEach(element => {
  element.textContent = 'Текст поменялся'
})
// задача 6 =====================================
const addBtn = document.querySelector('#addText')

addBtn.addEventListener('click', () => {
  const newText = document.createElement('p')

  newText.textContent = 'Новый добавленный текст'

  newText.classList.add('description')

  document.body.appendChild(newText)
})

//задача 7 =====================================
const deletedDesc = document.querySelector('#deletedBtn')

deletedDesc.addEventListener('click', () => {
  const firstDesc = document.querySelector('.description')

  if (firstDesc) {
    firstDesc.remove()
  } else {
    console.log('Элемента с классом "Description" нет')
  }
})
