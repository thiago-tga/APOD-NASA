class UserController
{
    
    
    dashBoard(date)
    {
        
        let chooseDate = new UserModel()
        chooseDate.getApi(date)
        
        let view = new UserView()
        view.showDashboard(chooseDate)
    }
    pickDate(date)
    {
        
        let chooseDate = new UserModel()
        chooseDate.getApi(date)
        
        let view = new UserView()
        view.showDashboard(chooseDate)
    }
    
}