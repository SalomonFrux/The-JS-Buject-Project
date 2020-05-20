

//Separation of concern: this is the controller that does the calculation IIFI
let budgetController = (function(){


})()

//Let now create the controller for the Ui  IIFI

let UIController = (function(){
//Your code here
})()





//The function that will add the items
var appCtrlAddItems = function(){

}
//This takes in the two Ctrl above and calls them 
let AppController = (function(uiCtrl, BgtCtrl ){
 
 //If button pressed fired an event 
 
 document.querySelector('.add__btn').addEventListener('click', appCtrlAddItems)

 //Fire  an event when the enter key is pressed.
 document.addEventListener('keypress', function(e){
     if(e.keyCode ===13 || e.which ===13){
         console.log('Why did you hit me so hard. I am the Enter Key !!!')
     }
 })

})(UIController, budgetController)

