
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

  //operators definitions
    var plus = document.querySelector(".plus");
    var minus = document.querySelector(".minus");
    var divide = document.querySelector(".divide");
    var multiply = document.querySelector(".multiply");
    var ops = document.querySelector(".operators");
    var eq = document.querySelector(".equals");
    var disp = document.querySelector(".display p");

  //global Variables
    var num = "";     //selected number
    var newnum = "";  //selected updated number;
    total = "";
    var sel_op = "";  //selected operator;


  //pushNumber functions
    function pushNumber() {
        num += this.textContent;
        disp.textContent = num;
    }
  //pushOps functions
    function pushOperatorP() {
      sel_op = this.textContent;
      console.log(sel_op)
      newnum = num;
      disp.textContent = newnum + sel_op;
      num = "";

    }
    function pushOperatorM() {
      sel_op = this.textContent;
      console.log(sel_op)
      newnum = num;
      disp.textContent = newnum + sel_op;
      num = "";

    }
    function pushOperatorMP() {
      sel_op = this.textContent;
      console.log(sel_op)
      newnum = num;
      disp.textContent = newnum + sel_op;
      num = "";

    }
    function pushOperatorD() {
      sel_op = this.textContent;
      console.log(sel_op)
      newnum = num;
      disp.textContent = newnum + sel_op;
      num = "";

    }

    //function for calculations
    function calculate() {
      if (sel_op === "+"){
        total = parseInt(newnum,10) + parseInt(num,10);
        disp.textContent = total;
      }
      if (sel_op === "-"){
        total = parseInt(newnum,10) - parseInt(num,10);
        disp.textContent = total;
      }
      if (sel_op === "/"){
        total = parseInt(newnum,10) / parseInt(num,10);
        disp.textContent = total;
      }
      if (sel_op === "*"){
        total = parseInt(newnum,10) * parseInt(num,10);
        disp.textContent = total;
        newnum = "";
        num = "";
      }
    }
    //numbers selectors
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

    //operators selectors
     plus.addEventListener("click", pushOperatorP);
     minus.addEventListener("click", pushOperatorM);
     multiply.addEventListener("click", pushOperatorMP);
     divide.addEventListener("click", pushOperatorD);

     eq.addEventListener("click", calculate);


}());
