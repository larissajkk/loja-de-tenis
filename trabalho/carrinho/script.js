function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
     show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "block"
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }
    else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectPratos = document.getElementById("selectnike");
    var selectBebidas = document.getElementById("selectadidas");
    var selectSobremesas = document.getElementById("selectous");
    var resultadoSpan = document.getElementById("selectallstar");
    var selectSobremesas = document.getElementById("selectvans");
    var resultadoSpan = document.getElementById("resultado");


var total = 0;
var nike = 0;
var adidas = 0;
var ous = 0;
var allstar = 0;
var vans = 0;

switch (selectnike.value){
    case "airforce":
        total += 799.90;
       nike = 799.90;
    break;
    case "airmax":
        total +=  539.99;
       nike =  539.99;
    break;
    case "dunklow":
        total += 999.99;
       nike = 999.99;
    break;
    case "sb":
        total += 549.99;
       nike = 549.99;
    break;
    case "jordanlow":
        total += 1.119,99;
       nike = 1.119,99;
    break;
}

switch (selectadidas.value){
    case "forumbonega":
        total +=  799.99;
        adidas =  799.99;
    break;
    case "superstar":
        total += 499.99;
        adidas = 499.99;
    break;
    case "adi":
        total += 799.90;
        adidas = 799.90;
    break;
    case "gazelle":
        total += 699.99;
        adidas = 699.99;
    break;
    case "rivalry":
        total += 799.90;
        adidas = 799.90;
    break;
}

switch (selectous.value){
    case "bcofurtacor":
        total += 499.90;
        ous = 499.90;
    break;
    case "pbimperial":
        total += 559.90;
        ous = 559.90;
    break;
    case "emergente":
        total += 349.90;
        ous = 349.90;
    break;
    case "imigrantepb":
        total +=  399.90;
        ous =  399.90;
    break;
    case "ueno":
        total +=  499.90;
        ous =  499.90;
    break;
}

switch (selectallstar.value){
    case "commedes":
        total += 899.90;
        allstar = 899.90;
    break;
    case "sparkleparty":
        total += 649.90;
        allstar = 649.90;
    break;
    case "chucktaylor":
        total += 299.90;
        allstar = 299.90;
    break;
    case "chuckcouro":
        total += 449.90;
        allstar = 449.90;
    break;
    case "chucksparkle":
        total += 389.90;
        allstar = 389.90;
    break;
}

switch (select.value){
    case "knu":
        total += 599.99;
        vans = 599.99;
    break;
    case "sk8":
        total += 499.99;
        vans = 499.99;
    break;
    case "slipon":
        total += 299.99;
        vans = 299.99;
    break;
    case "skoolprimary":
        total += 499.99;
        vans = 499.99;
    break;
    case "eratrue":
        total += 299.99;
        vans = 299.99;
    break;
}


document.getElementById("pedido-pronto").style.display = "block"
document.getElementById("nike-pronto").textContent = selectnike.value + " R$ " + nike.toFixed(2);
document.getElementById("adidas-pronto").textContent = selectadidas.value + " R$ " + adidas.toFixed(2);
document.getElementById("ous-pronto").textContent = selectous.value + " R$ " + ous.toFixed(2);
document.getElementById("allstar-pronto").textContent = selectallstar.value + " R$ " + allstar.toFixed(2);
document.getElementById("vans-pronto").textContent = selectvans.value + " R$ " + vans.toFixed(2);
resultadoSpan.textContent = "R$ " + total.toFixed(2);
}


function limpar(){
document.getElementById("pedido-pronto").style.display = "none";
document.getElementById("selects-div").style.display = "none";
document.getElementById("exampleFormControlInput1").value = "";
document.getElementById("resultado").value = "Selecione seu tênis";
document.getElementById("selectnike").value = "Selecione seu tênis";
document.getElementById("selectadidas").value = "Selecione seu tênis";
document.getElementById("selectous").value = "Selecione seu tênis";
document.getElementById("selectallstar").value = "Selecione seu tênis";
document.getElementById("selectvans").value = "Selecione seu tênis";
}
