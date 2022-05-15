let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let msg2 = document.getElementById("msg2");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation = ()=>{
    if (textInput.value === "") {
        console.log("Falhou!");
        msg.innerHTML = "Campo Obrigatorio!";
    } else {
        console.log("Sucesso");
        msg.innerHTML = "";
    }
    if (dateInput.value === "") {
        console.log("Falhou!");
        msg2.innerHTML = "Campo Obrigatorio!";
    } else {
        console.log("Sucesso");
        msg2.innerHTML = "";
    }
};

let data = {};

let acceptData = ()=>{
    data.push();

    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
};


    
