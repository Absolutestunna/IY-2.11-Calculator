
(function() {  //immediately invoked function expression
  //numbers definitions

    var one = document.querySelector(".one");
    var two = document.querySelector(".two");
    var three = document.querySelector(".three");
    var four = document.querySelector(".four");
    var five = document.querySelector(".five");
    var six = document.querySelector(".six");
    var seven = document.querySelector(".seven");
    var eight = document.querySelector(".eight");
    var nine = document.querySelector(".nine");
    var zero = document.querySelector(".zero");

  // //operators definitions
    var plus = document.querySelector(".plus");
    var minus = document.querySelector(".minus");
    var divide = document.querySelector(".divide");
    var multiply = document.querySelector(".multiply");
    var ops = document.querySelector(".operators");
    var eq = document.querySelector(".equals");
    var disp = document.querySelector(".display p");

  // //Clear and clear all definitions
    var c = document.querySelector(".clear");
    var cA = document.querySelector(".clearAll");
  //
  // //global Variables
    var num = "";     //selected number
    var newnum = "";  //selected updated number;
    var total = "";
    var sel_op1 = "";  //selected operator;
    var sel_op2 = "";
    var num_counter = 0;
    var counter = 0;
    dispLength = "";


  // pushNumber functions
    function pushNumber() {
        num += this.textContent;
        disp.textContent = num;
        // num_counter++;

    }
  // pushOps functions
    function pushOperatorP() {
      sel_op1 = this.textContent;
      newnum = num;
      disp.textContent = newnum;
      num = "";
      num_counter++;

      if (num_counter > 1){
        calculate();
        console.log(total)

        disp.textContent = total;

        // newnum = "";
        // num = "";
      }


    }

    function pushOperatorM() {
      sel_op1 = this.textContent;
      newnum = num;
      disp.textContent = newnum + sel_op1;
      num = "";
      counter++;

      // if (counter > 1) {
      //   sel_op1=this.textContent;             //prepare for new operation
      //
      // }
    }

    function pushOperatorMP() {
      sel_op1 = this.textContent;
      newnum = num;
      disp.textContent = newnum + sel_op1;
      num = "";
      counter++;
    }
    function pushOperatorD() {

      sel_op1 = this.textContent;
      newnum = num;
      disp.textContent = newnum + sel_op1;
      num = "";
      counter++;
     }

    //function for calculations
    function calculate() {
      if (sel_op1 === "+"){
        total = parseInt(newnum,10) + parseInt(num,10);

      }
      else if (sel_op1 === "-"){
        total = parseInt(newnum,10) - parseInt(num,10);

      }
      else if (sel_op1 === "/"){
        total = parseInt(newnum,10) / parseInt(num,10);

      }
      else if (sel_op1 === "*"){
        total = parseInt(newnum,10) * parseInt(num,10);

      }
     }//end of calculate functions

     function equalize() {
        calculate();
        disp.textContent = total;
        newnum = "";
        num = "";

     }
    //functions fo clear and clearAll
    function eraseOne() {

    }
    function eraseAll() {
      num = "";
      newnum = "";
      disp.textContent = "0";
      num_counter = "";
      }


    //numbers events
    one.addEventListener("click", pushNumber);
    two.addEventListener("click", pushNumber);
    three.addEventListener("click", pushNumber);
    four.addEventListener("click", pushNumber);
    five.addEventListener("click", pushNumber);
    six.addEventListener("click", pushNumber);
    seven.addEventListener("click", pushNumber);
    eight.addEventListener("click", pushNumber);
    nine.addEventListener("click", pushNumber);
    zero.addEventListener("click", pushNumber);

    //operators events
     plus.addEventListener("click", pushOperatorP);
     minus.addEventListener("click", pushOperatorM);
     multiply.addEventListener("click", pushOperatorMP);
     divide.addEventListener("click", pushOperatorD);

     //equals/calculate event
     eq.addEventListener("click", equalize);

     //clear and clearAll events
     c.addEventListener("click", eraseOne);
     cA.addEventListener("click", eraseAll);

}());
