// function that will change the h1 element//
function func1(){
    alert('hello')
    document.getElementById("demo").innerHTML = "Hello JavaScript";

}
// will perform a simple calculation//
function add23() {
    document.getElementById('add').innerHTML=2+3;

}

// array declaration//
var array = ['HTML','CSS','JavaScript','jQuery','java']
i = 0

// function to show all the array elements //
function a(){
    if (i>4){
        i=0;
    }
    
    document.getElementById("arrr").innerHTML = array[i];
    i++;

    

}

// function that will collect number from input field and perform the calculation//
function calculate(){


    
        let num1 = document.getElementById('num1').value;
        let opt = document.getElementById('opt').value;
        let num2 = document.getElementById('num2').value;

        result = parseInt(num1) + opt + parseInt(num2); //parseeInt used for typecasting 
        console.log(result, "RESULT")
        rslt = eval(result)
        document.getElementById("result").innerHTML = rslt;
    }
