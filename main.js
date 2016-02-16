
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
    // var num = "";     //selected number
    // var newnum = "";  //selected updated number;
    // var total = "";
    // var sel_op1 = "";  //selected operator;
    // var sel_op2 = "";
    // var num_counter = 0;
    // var counter = 0;
    // dispLength = "";
    // var link = 0;


  // // pushNumber functions
  //   function pushNumber() {
  //       num += this.textContent;
  //       disp.textContent = num;
  //       // num_counter++;
  //
  //
  //   }
  // // pushOps functions
  //   function pushOperatorP() {
  //     sel_op1 = this.textContent;
  //     newnum = num;
  //     disp.textContent = newnum;
  //     num = "";
  //     counter++;
  //     if (counter > 1) {
  //
  //     }
  //
  //   }
  //
  //   function pushOperatorM() {
  //     sel_op1 = this.textContent;
  //     newnum = num;
  //     disp.textContent = newnum + sel_op1;
  //     num = "";
  //     counter++;
  //
  //     // if (counter > 1) {
  //     //   sel_op1=this.textContent;             //prepare for new operation
  //     //
  //     // }
  //   }
  //
  //   function pushOperatorMP() {
  //     sel_op1 = this.textContent;
  //     newnum = num;
  //     disp.textContent = newnum + sel_op1;
  //     num = "";
  //     counter++;
  //   }
  //   function pushOperatorD() {
  //
  //     sel_op1 = this.textContent;
  //     newnum = num;
  //     disp.textContent = newnum + sel_op1;
  //     num = "";
  //     counter++;
  //    }
  //
  //   //function for calculations
  //   function calculate() {
  //     if (sel_op1 === "+"){
  //       total = parseInt(newnum,10) + parseInt(num,10);
  //     }
  //     else if (sel_op1 === "-"){
  //       total = parseInt(newnum,10) - parseInt(num,10);
  //
  //     }
  //     else if (sel_op1 === "/"){
  //       total = parseInt(newnum,10) / parseInt(num,10);
  //
  //     }
  //     else if (sel_op1 === "*"){
  //       total = parseInt(newnum,10) * parseInt(num,10);
  //
  //     }
  //    }//end of calculate functions
  //
  //    function equalize() {
  //       calculate();
  //       disp.textContent = total;
  //       newnum = "";
  //       num = "";
  //
  //    }
  //   //functions fo clear and clearAll
  //   function eraseOne() {
  //
  //   }
  //   function eraseAll() {
  //     num = "";
  //     newnum = "";
  //     disp.textContent = "0";
  //     num_counter = "";
  //     }

  var num = "";     //selected number
  var newnum = "";  //selected updated number;
  var total = "";
  var sel_op = "";  //selected operator;
  var calc_array = [];
  var selected = "";

  function pushNumber() {
    num += this.textContent
    calc_array.push(num);
    disp.textContent = num;
  }

  function pushOperatorP() {
    sel_op = this.textContent;
    calc_array.push(sel_op);
    disp.textContent = sel_op;
    console.log(calc_array);

    // selected = calc_array.slice((calc_array.indexOf(sel_op))-1), (calc_array.indexOf(sel_op))
    // disp.textContent = selected.slice(0, 1);
    // calc_array = selected;

  }
  function pushOperatorM() {
    sel_op = this.textContent;
    calc_array.push(sel_op);
    disp.textContent = sel_op;
    console.log(calc_array);


    // selected = calc_array.slice((calc_array.indexOf(sel_op))-1), (calc_array.indexOf(sel_op))
    // disp.textContent = selected.slice(0, 1);
    // calc_array = selected;



  }
  function pushOperatorMP() {
    sel_op = this.textContent;
    disp.textContent = sel_op;
    calc_array.push(sel_op);
    console.log(calc_array);

    // selected = calc_array.slice((calc_array.indexOf(sel_op))-1), (calc_array.indexOf(sel_op))
    // disp.textContent = selected.slice(0, 1);
    // calc_array = selected;


  }
  function pushOperatorD() {
    sel_op = this.textContent;
    calc_array.push(sel_op);
    disp.textContent = sel_op;
    console.log(calc_array);


    // selected = calc_array.slice((calc_array.indexOf(sel_op))-1), (calc_array.indexOf(sel_op))
    // disp.textContent = selected.slice(0, 1);
    // calc_array = selected;

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

    //  //equals/calculate event
    //  eq.addEventListener("click", equalize);
    //
    //  //clear and clearAll events
    //  c.addEventListener("click", eraseOne);
    //  cA.addEventListener("click", eraseAll);

}());
