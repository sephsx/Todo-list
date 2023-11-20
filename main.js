
document.addEventListener('DOMContentLoaded',function(){
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const ul = document.getElementById('add')

  form.addEventListener('submit',function(event){
    event.preventDefault()
    //get the value of the input field
    const inputValue = input.value

    //check if the user did not put the value
    if(inputValue.trim() == ''){
      alert('Please enter a task before adding.')
    }
    //create a new list item
    const li = document.createElement('li')
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    //create a span for the text content
    const span = document.createElement('span')
    span.textContent = inputValue
    span.style.marginRight = '100px'

    //create a edit and remove button
    const editIcon = document.createElement('i')
    editIcon.className = 'fas fa-edit'
    editIcon.style.marginRight = '10px'
    editIcon.addEventListener('click', () =>{
      const newText = prompt('Edit your task:', span.textContent)
      if(newText !== null){
        span.textContent = newText
      }
    })
    
    const removeIcon = document.createElement('i')
    removeIcon.className = 'fas fa-trash'
    removeIcon.style.marginRight = '20px'
    removeIcon.addEventListener('click', () =>{
      ul.removeChild(li)
    })

    //append span and icons to the list item
    li.appendChild(span)
    li.appendChild(editIcon)
    li.appendChild(removeIcon)

    //append the list item to the ul
    ul.appendChild(li)

    //clear the input field
    input.value = ''
  })
})