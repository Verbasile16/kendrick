function checkForm(){
    var number = document.getElementById("number");
    var numnot ="Please input your number faster!!";
    var password = document.getElementById("password");
    var passnot = "Please input your password asap!!";
    if(number = ""){
        document.getElementById("numbersec").innerHTML=numnot;
    } else if(password = ""){
        document.getElementById("passwordsec").innerHTML=passnot;
    }
}