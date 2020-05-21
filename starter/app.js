

//Separation of concern: this is the controller that does the calculation IIFI
let budgetController = (function(){


})()

//Let now create the controller for the Ui  IIFI

let UIController = (function(){
//Now what do we need here to return in the app controller? 
//Getting the input
return {
    getInput: function(){
        return  {
            description:  document.querySelector('.add__description').value,
            type: document.querySelector('.add__type').value,
            value: document.querySelector('.add__value').value
        };
    }
    
}

})()





//This takes in the two Ctrl above and calls them 
let AppController = (function(uiCtrl, BgtCtrl ){

    
//The function that will add the items
var appCtrlAddItems = function(){
    let input = uiCtrl.getInput()
    console.log(input);
}
//Getting the input
 

 //If button pressed fired an event 
 
 document.querySelector('.add__btn').addEventListener('click', appCtrlAddItems)

 //Fire  an event when the enter key is pressed.
 document.addEventListener('keypress', function(e){
     if(e.keyCode ===13 || e.which ===13){
        appCtrlAddItems();
     }
 })

})(UIController, budgetController)

