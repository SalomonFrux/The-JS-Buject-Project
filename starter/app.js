//Separation of concern: this is the controller that does the calculation IIFI
let budgetController = (function(){

let x= 23; 
let add = function(a){
        return x+a;
}

return {
    publicTest: function(b){
       return add(b)
    }
}
})()

//Let now create the controller for the Ui  IIFI

let UIController = (function(){
//Your code here
})()

//This takes in the two Ctrl above and calls them 
let AppController = (function(uiCtrl, BgtCtrl ){

let z = budgetController.publicTest(2);
    return{
       theObject: function(){
           console.log(z);
       }
    }
console.log(z);
})(UIController, budgetController)

