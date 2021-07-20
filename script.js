const localYear = document.getElementById("inputYear")
const localSex = document.getElementsByName("sex")
const localBtn = document.getElementById("btn")
const localResult = document.getElementById("ageText")
var localImg = document.getElementById("img").src
localBtn.addEventListener("click", calcAge)

function calcAge(){
    var year = Number(localYear.value)
    var age = 2021 - year
    var agef;
    
    var male = localSex[0].checked

    age < 60 ? agef= 'adulto' : agef = 'idoso'

    if(age < 0 || age > 150){
        alert(`You dont have ${age} years Bro`)
    }
    else{
    switch (male){

        case true:
            if(agef === 'adulto'){
                localResult.innerHTML = (`Você é um adulto de ${age} anos`)
                document.getElementById("img").src = ("./img/adulto.jpg")
            }
            else{
                localResult.innerHTML = (`Você é um VELHO de ${age} anos`)
                document.getElementById("img").src = ("./img/luladrao.jpeg")
                
            }
            break;
        case false:
            if(agef === 'adulto'){
                localResult.innerHTML = (`Você é uma adulta de ${age} anos`)
                document.getElementById("img").src = ("./img/manu.jpg")
            }
            else{
                localResult.innerHTML = (`Você é uma VELHA de ${age} anos`)
                document.getElementById("img").src = ("./img/dilma.jpg")
            }
            break;

        default:               
        }
    }
}    