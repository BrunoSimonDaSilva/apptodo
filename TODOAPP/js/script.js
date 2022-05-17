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
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (()=>{
            add.setAttribute("data-bs-dismiss", "modal");
        })();
        createTasks();
    }
};

let data = [];

let acceptData = ()=> {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    }); 

    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
};

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x,y) => {
        return (tasks.innerHTML +=`
        <div id=${y}>
            <span class="fw-bold">${x.text}</span>
            <span class="small text-secondary">${x.date}</span>
            <p>${x.description}</p>
            <span class="options">
                <i onClick="editTask(this)"
                class="fas fa-edit" 
                data-bs-toggle="model" 
                data-bs-target="#form"></i>
                <i onClick="deketeTask(this); createTask()"
                class="fas fa-trash-alt"></i>
            </span>
        </div>
        `
        );
    })
}