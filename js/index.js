var controller = new UserController()

function mudaData()
{
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()
    
    return `${year}-${month+1}-${day}` 
    
}
controller.dashBoard(mudaData())

document.querySelector('#submit').addEventListener('click',()=>{
   
    let date = document.querySelector('#calendar')
    let dateString = date.value
    
    controller.pickDate(dateString)
})
