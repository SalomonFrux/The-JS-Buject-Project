

//Separation of concern: this is the controller that does the calculation IIFI
let budgetController = (function(){


})()

//Let now create the controller for the Ui  IIFI

let UIController = (function(){
//Creating the DOM Variables

var domStrings = {
    inputDescription: '.add__description',
    inputType : '.add__type',
    inputForValue: '.add__value'
}

//Now what do we need here to return in the app controller? 
//Getting the input
return {
    getInput: function(){
        return  {
            description:  document.querySelector(domStrings.inputDescription).value,
            type: document.querySelector(domStrings.inputType).value,
            value: document.querySelector(domStrings.inputForValue).value
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

