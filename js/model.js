class UserModel
{
    constructor()
    {
        this.title = ""
        this.date = ""
        this.explanation = ""
        this.image = ""
    }
    getApi(data)
    {
        let request = new XMLHttpRequest()
        request.addEventListener('load', ()=>
        {
            if (request.status==200 && request.readyState==4)
            {
                let data = JSON.parse(request.responseText)
                this.title = data.title
                this.date = data.date
                this.explanation = data.explanation
                this.image = data.url

            }

        })
    request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=qfaQXoV4VvCXnivXE4yN8hGNsyUs86BVieJ560Ri&date=${data}`, false)
        
    request.send()
    }
    getTitle(){
        
        return this.title;
    }
    getDate(){
        return this.date;
    }    
    getExplanation(){
        return this.explanation;
    }
    
    getImage(){
        return this.image;
    }
}