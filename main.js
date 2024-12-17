let count = 0;


document.getElementById("plus").onclick = function(){
    count+=1;
    document.getElementById("zero").innerHTML = count;
}

document.getElementById("minus").onclick = function(){
    count-=1;
    document.getElementById("zero").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("zero").innerHTML = count;
}