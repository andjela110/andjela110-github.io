function validacija() {
    var ime= document.getElementById("ime").value;
    var prezime= document.getElementById("prezime").value;
    var email= document.getElementById("email").value;
    
    if(ime.length <= 0) {
        alert("Molimo Vas unesite svoje ime");
    }
    if(prezime.length <= 0) {
        alert("Molimo Vas unesite svoje prezime");
    }
    if(email.length <= 0) {
        alert("Molimo Vas unesite svoju email adresu");
    }
    
    }

