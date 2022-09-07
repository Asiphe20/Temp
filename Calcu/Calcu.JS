function calculate(currentYear,yearBorn){
    var currentYear= document.getElementById("current").value;
    var yearBorn= document.getElementById("born").value;
    var p= document.getElementById("paragraph");
    var age= currentYear-yearBorn;

    if (currentYear<=2022) {
        console.log("You are" +age+"years old")
         }else{alert("Please enter the correct year")}
         p.append("You are"+age+"years old")
}
