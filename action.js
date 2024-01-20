
function showData(){ 
    // document.getElementById('demo').innerHTML = Date();
    // document.getElementById('btn').style.color = "red";
    // document.getElementById("btn").style.display = "none";
    if (evenOrOdd(2)) {
        document.getElementById("demo").innerHTML = "EVEN";
    }else{
        document.getElementById("demo").innerHTML = "ODD";
    }
    
}
function evenOrOdd(number) {
    var isEven = false;
    if (number % 2 == 0) {
        isEven = true;
    }
    return isEven;
}

    
