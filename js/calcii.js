// Will calculate the equation
function calculate() {
    // eq will store the eqaution on input field 
    eq = document.getElementById('inpt').value;

    // eval will process the equation and store the resut in the rslt
    rslt = eval(eq);
    // it will insert result in the input box
    document.getElementById('inpt').value = rslt;
}

function nums(n, type = 'default') {
    // logic to remove multiple operators
    if (type === 'opearator') {
        let currrentValue = document.getElementById('inpt').value; // constant value can be reassigned
        const operators = ['+', '-', '/', '*']
        const isOperator = operators.includes(currrentValue.charAt(currrentValue.length-1))
        console.log(isOperator)
        if(isOperator){
            currrentValue = currrentValue.substring(0, currrentValue.length - 1);
            console.log(currrentValue);
            document.getElementById('inpt').value = currrentValue;

        }
    }
    // condition if user select clear button
    if (n == 'C') {
        rslt = 0;
        eq = 0;
        document.getElementById('inpt').value = ''
    }
    //it will insert the numbers in the input field(linked to buttons)
    else {
        document.getElementById('inpt').value += n;
    }

}
