// input field 
let input = document.querySelector('#inputBox')
input.onclick = () => {
    
    console.log('input was clicked')
}


// AC field 
let clear = document.querySelector(`#ac`)
clear.onclick=() => {
    console.log('clear was clicked')
    input.value=''
}

// Delete field 
let del=document.querySelector('#del')
del.onclick = () => {
    console.log('delete was clicked')
    input.value = input.value.toString().slice(0, -1)
    console.log(input.value)
    
}
// keyboard keys 
document.addEventListener('keydown', (event) => {
    
    const key = event.key
    const num_op=['+', '-', 'x', '/', '%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    if (num_op.includes(key)) {
        input.value += `${key}`
        
    }
    else if (event.key === 'Backspace')
    {
        input.value=input.value.toString().slice(0,-1)
    }
    else if (event.key === 'Enter')
    {
        input.value=eval(input.value)
    }
    else
    {
        event.preventDefault()
        }
    

})
if (eval(input.value))
{
    console.log('eval')
}
    











