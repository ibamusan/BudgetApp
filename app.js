// BUDGET CONTROLLER 
var budgetController = (function(){


})();



// UI CONTROLLER 
var UIController = (function(){

  var DOMStrings = {
    inputType: '.add__type',
    inputDiscription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }


  return {

    getInput : function(){
      return{
        type: document.querySelector(DOMStrings.inputType).value,
        discription: document.querySelector(DOMStrings.inputDiscription).value,
        value: document.querySelector(DOMStrings.inputValue).value

      }
    },

    getDOMStrings : function(){
      return DOMStrings;
    }
    
  }

})();



// GENERAL APP CONTROLLER 
var controller = (function(budgetCtrl, UICtrl){

  var setUpEventListener = function(){

    var DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click' , ctrlAddItem)

    document.addEventListener('keypress', function(event){

    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }

  });

  };

  var ctrlAddItem = function (){
    // 1. Get the field input data
    var input = UICtrl.getInput();
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    console.log(input);
  };

  return {
    init : function(){
      setUpEventListener();
      console.log('The Application has started.');
    }
  }

})(budgetController, UIController);


controller.init();