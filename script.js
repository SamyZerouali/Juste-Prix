let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let prix = random(1, 100000);
let coups = 0;
let nombreChoisi;

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rejouer() {
    let rejouer = confirm("Voulez-vous rejouer ?");
    if (rejouer) {
        document.querySelectorAll(".instruction").forEach(e => e.parentNode.removeChild(e));
        prix = random(1, 100000);
        coups = 0;
    } else {
        document.location.reload(true);
    }
}


function verifier(nombre) {
    
    let instruction = document.createElement('div');
    let icon = document.createElement('span');
    
    
    if (nombre == prix) {
        icon.className = "material-symbols-outlined position";
        icon.innerText = "military_tech";
        instruction.textContent = "#"+ coups +" ( "+nombre+" )"+" BINGO";
        instruction.className = "instruction fini style";
        instruction.appendChild(icon);
        document.querySelector('#instructions').prepend(instruction);
        setTimeout(rejouer, 3000);
        
        
        
    } else if (nombre > prix) {
        
        icon.className = "material-symbols-outlined position";
        icon.innerText = "arrow_downward";
        instruction.textContent = "#"+ coups +" ( "+nombre+" )"+" C'est moins !";
        instruction.className = "instruction moins style ";
        instruction.appendChild(icon);
        
    } else if (nombre < prix) {
        icon.className = "material-symbols-outlined position";
        icon.innerText = "arrow_upward";
        instruction.textContent = "#" + coups + " ( " + nombre + " )" +" C'est plus !";
        instruction.className = "instruction plus style";
        instruction.appendChild(icon);
        
        
    }
    if (nombre != prix) {
        document.querySelector('#instructions').prepend(instruction);
    }
    
}

error.hidden = true;

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.hidden = false;
    } else {
        error.hidden = true;
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        input.focus();
        verifier(nombreChoisi);
    }
});