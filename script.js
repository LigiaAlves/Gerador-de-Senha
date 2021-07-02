

const pwEl = document.getElementById("pw"); /**Importar id's */
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate"); 

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; /**Constante para as letras maiúsculas */
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";/**Constante para as letras minúsculas */
const numbers = "0123456789";
const symbols = "!@#$%&*()_+=";

function getLowercase(){ /**função para deixar senha aleatória*/
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){/**função para gerar a senha*/
    const len = lenEl.value;

    let password = "";

    if(upperEl.checked){ /**Se checkbos for selecionado, uma letra maiúscula será adicionada*/
        password += getUppercase();
    }

    if(lowerEl.checked){ /**Se checkbos for selecionado, uma letra maiúscula será adicionada*/
        password += getLowercase();
    }

    if(numberEl.checked){ /**Se checkbos for selecionado, uma letra maiúscula será adicionada*/
        password += getNumber();
    }

    if(symbolEl.checked){ /**Se checkbos for selecionado, uma letra maiúscula será adicionada*/
        password += getSymbol();
    }

    for(let i = password.length; i < len; i++) {
        const  x = generateX();
        password += x;
    }

    pwEl.innerText = password;
} 

function generateX(){
    const xs = [];

    if(upperEl.checked){
        xs.push(getUppercase()); /**.push se checkbox for selecionado irá adicionar algo a mais na senha*/
    }

    if(lowerEl.checked){
        xs.push(getLowercase()); 
    }

    if(numberEl.checked){
        xs.push(getNumber()); 
    }

    if(symbolEl.checked){
        xs.push(getSymbol()); 
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];

}

    generateEl.addEventListener("click", generatePassword);

    copyEl.addEventListener("click", () => {
        const textarea = document.createElement("textarea");
        const password = pwEl.innerText;

        if(!password){
            return;
        }

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("O texto foi copiado");
    });


   