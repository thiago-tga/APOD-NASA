class UserView
{
    
    showDashboard(data){

        let pictureTitle= document.querySelector('#pictureTitle')
        pictureTitle.textContent = data.getTitle()
        
        let explanationp = document.querySelector('#explanationp')
        explanationp.textContent = data.getExplanation()
        
        let picture = document.querySelector('#picture')
        picture.src = data.getImage()
        
        let dateChose = document.querySelector('#dateChose')
        dateChose.textContent = data.getDate()
        
        
        
    }
}