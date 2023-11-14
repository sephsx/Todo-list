
document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const ul = document.getElementById('add');

  form.addEventListener('submit', function(event){
    event.preventDefault()

    //get the value of the input field
    const inputValue = input.value

    //create a new list item
    const li = document.createElement('li')
    li.textContent = inputValue

    //append into the input field
    ul.appendChild(li)

    //clear the output field
    input.value = ''
  })
})