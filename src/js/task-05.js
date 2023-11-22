const nameInput = document.querySelector ("#name-input");
const nameOutput = document.querySelector ("#name-output");
console.log(nameInput, nameOutput);

nameInput.oninput = function (){
    if (this.value === "") 
        nameOutput.textContent = "Anonymous";
    else { 
        nameOutput.textContent= this.value;
    }
    };
