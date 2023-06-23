let inputs = document.getElementById("inp");
let texts = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Add your work first .");
    }else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash fa-xs"></i>`;
        texts.appendChild(newElement);
        inputs.value ="";

        newElement.querySelector("i").addEventListener("click",remove);

        function remove(){
            newElement.remove();
        }
    }

}