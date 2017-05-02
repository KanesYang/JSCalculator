$(document).ready(function () {

    //store input from user
    var inputs = [""];
    //string to store input string
    var totalString;
    //operator array for validation without . 
    var operators = ["+", "-", "*", "/"];
    var operators2 = ["."];
    //
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getValue(input) {
        if (operators2.includes(inputs[inputs.length - 1]) === true && input === ".") {
            console.log('Duplicated . ')
        } else if (inputs.length === 1 && operators.includes(input) === false) {
            console.log("first one not op");
            inputs.push(input);
        } else if (operators.includes(inputs[input.length - 1]) === false) {
            console.log("last one not op");
            inputs.push(input);
        } else if (nums.includes(Number(input))) {
            console.log("num");
            inputs.push(input);
        }
        update();
    }

    function update() {
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    function getTotal() {
        totalString = inputs.join("");
        //calculate the thing in the step 
        $("#steps").html(eval(totalString))
    }


    $("a").on("click", function () {
        if (this.id === "deleteAll") {
            inputs = [""];
            update();
        } else if (this.id === "backOne") {
            inputs.pop();
            update();
        } else if (this.id === "total") {
            console.log('total');
            getTotal();
        } else {
            if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
                getValue(this.id);
            } else {
                getValue(this.id);
            }
        }
    });


});
