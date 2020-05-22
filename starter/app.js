///////////////////////////////////////////////////////////////////////////////////////////////////////////
//THE BUDGET CONTROLLER
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let budgetController = (function(){

    let Incomes = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    }

    let Expenses = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    }
//Object
    let data = {
        //Properties
        allItems :{
            exp:[],
            inc: []
        },
        totals :{
            exp :0,
            inc : 0
        }
    }

    return {
        addItem : function(type, des, val){
            var newItem, ID; 
            
            if(data.allItems[type].length> 0){
                //Create a new ID
              ID = data.allItems[type][data.allItems[type].length-1].id + 1;
                
            }else{
                ID=0
            }
           
            if(type === 'exp'){
                newItem = new Expenses(ID, des, val)
                
            }else if(type==='inc'){
                newItem = new
                 Incomes(ID, des, val)
            }
            //Push it into our data structure
        data.allItems[type].push(newItem);
        
        //return the new Item 
        return newItem;
        },

        testing : function(){
            console.log(data);
        }

    }


    
})()

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//THE UI CONTROLLER
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let UIController = (function(){
//Creating the DOM Variables

var domStrings = {
    inputDescription: '.add__description',
    inputType : '.add__type',
    inputForValue: '.add__value',
    addBtnCheckMark: '.add__btn'
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
    },
    
    getDomString: function (){
        return domStrings;
    },

    showUserItem: function(obj, type){

        let html

        //1 Create the Html element
        if(type === 'inc'){
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }else if(type ==='exp'){
           
            html ='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }
        //2 Replace the values with  the fn params
        let newHtml = html.replace('%id%', obj.id);
        

        //3 Insert the element into the dom using insertAdjacent Method
    }
     
}


})()




///////////////////////////////////////////////////////////////////////////////////////////////////////////
//APP CONTROLLER
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let  AppController, appCtrlAddItems, setUpEventListeners, newItemCreated;
//This takes in the two Ctrl above and calls them 
 AppController = (function(uiCtrl, BgtCtrl ){

    let  domStrings = uiCtrl.getDomString();    

 appCtrlAddItems = function(){
     //1 get the input elements from the user
    let input = uiCtrl.getInput();

    //2 Add the input values to the budget controller
 newItemCreated = BgtCtrl.addItem(input.type, input.description, input.value);

    //3 Add the values to the UI 
}
 


     setUpEventListeners = function(){
 //If button pressed fired an event 
 document.querySelector(domStrings.addBtnCheckMark).addEventListener('click', appCtrlAddItems)
 //Fire  an event when the enter key is pressed.
 document.addEventListener('keypress', function(e){
     if(e.keyCode ===13 || e.which ===13){
        appCtrlAddItems();
     }
 })

    }

 return {
     Initializer: function()
     {
       console.log('The application has started')
        setUpEventListeners();
    }
 }

})(UIController, budgetController)



AppController.Initializer();