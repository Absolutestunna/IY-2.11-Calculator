
// (function() {  //immediately invoked function expression
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

  //operators definitions
    var plus = document.querySelector(".plus");
    var minus = document.querySelector(".minus");
    var divide = document.querySelector(".divide");
    var multiply = document.querySelector(".multiply");
    var ops = document.querySelector(".operators");
    var eq = document.querySelector(".equals");
    var disp = document.querySelector(".display p");

  //Clear and clear all definitions
    var c = document.querySelector(".clear");
    var cA = document.querySelector(".clearAll");

  //global Variables
    var num = 0;     //selected number
    var newnum = 0;  //selected updated number;
    var total = 0;
    var sel_op1 = "";  //selected operator;
    var sel_op2 = "";
    var counter = 0;
    dispLength = "";


  //pushNumber functions
    function pushNumber() {
        num += parseInt(this.textContent, 10);
        disp.textContent = num;
        dispLength = (disp.textContent).length;
        console.log(total)

    }
  //pushOps functions
    function pushOperatorP() {
      sel_op1 = this.textContent;
      newnum = num;
      disp.textContent = newnum;
      // num = 0;
      counter++;
      if (counter > 1) {
        calculate();
        console.log(total)

      }


    }
    function pushOperatorM() {
      sel_op1 = this.textContent;
      newnum = num;
      disp.textContent = newnum;
      num = 0;
      counter++;
      if (counter > 1) {
        calculate();
      }




    }
    function pushOperatorMP() {
      sel_op1 = this.textContent;
      console.log(sel_op1)
      newnum = num;
      disp.textContent = newnum;
      num = 0;
      counter++;
      if (counter > 1) {
        calculate();
      }


    }
    function pushOperatorD() {
      sel_op1 = this.textContent;
      console.log(sel_op1)
      newnum = num;
      disp.textContent = newnum;
      num = 0;
      counter++;
      if (counter > 1) {
        calculate(total);
      }

    }

    //function for calculations
    function calculate(total) {
      if (sel_op1 == "+"){
        console.log(num);
        console.log(newnum);
        total += parseInt(newnum,10) + parseInt(num,10);
        console.log(total);


      }
      if (sel_op1 == "-"){
        total += parseInt(newnum,10) - parseInt(num,10);

      }
      if (sel_op1 == "/"){
        total += parseInt(newnum,10) / parseInt(num,10);

      }
      if (sel_op1 == "*"){
        total += parseInt(newnum,10) * parseInt(num,10);

      }
      disp.textContent = total;
      newnum = 0;
      num = 0;
      return total
    }//end of calculate functions

    //functions fo clear and clearAll
    function eraseOne() {

    }
    function eraseAll() {
      num = "";
      newnum = "";
      disp.textContent = 0;
      total = 0;
      counter = 0;
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
     eq.addEventListener("click", calculate);

     //clear and clearAll events
     c.addEventListener("click", eraseOne);
     cA.addEventListener("click", eraseAll);

// }());
