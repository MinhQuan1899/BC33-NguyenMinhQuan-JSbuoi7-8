var org = []
function addArray1(){
    var a = +document.getElementById("addArray1").value;
    org.push(a)
    document.getElementById("org").innerHTML = org;
}

function ex1(){
    var totalPositive = 0 ;
    for (i = 0; i < org.length; i++){
        if (org[i] > 0){
            totalPositive = totalPositive + org[i]
        }
    }
    document.getElementById("totalPositive").innerHTML = totalPositive;
}

function ex2(){
    var positive = 0 ;
    for (i = 0; i < org.length; i++){
        if (org[i] > 0){
            positive += 1
        }
    }
    document.getElementById("positive").innerHTML = positive;
}

function ex3()



function ex4(){
    var min = org[0];
    const minPositive =() => {
        for (var i=1; i<org.length; i++){
            if (org[i]>0 && org[i]<min){
                min=org[i]
            }
        }
    }
    console.log(min)
    document.getElementById("minPositive").innerHTML = min;
}