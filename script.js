var countneil = 9;
var countnichole = 12;
var countjim = 9;

var countforneil = document.querySelector("#totallikesneil")
var countfornichole = document.querySelector("#totallikesnichole")
var countforjim = document.querySelector("#totallikesjim")


function addlikeneil(){
    countneil++
    countforneil.innerText = countneil + " like(s)"
}

function addlikenichole(){
    countnichole++
    countfornichole.innerText = countnichole + " like(s)"
}

function addlikejim(){
    countjim++
    countforjim.innerText = countjim + " like(s)"
}