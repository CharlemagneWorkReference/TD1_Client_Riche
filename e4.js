function arrayToObj(arr) {
    return {
        nbr: arr.length,
        sum: sum(arr),
        mean: mean(arr)
    }
}

var etudiant = {
    numero: 0,
    nom: 'Doe',
    prenom: 'John',
    dateNaiss: new Date('02-13-1995'),
    mail: 'johndoe@etu.univ-lorraine.fr',
    notes: []
};

function calculerAge(etudiant) {
    var curY = new Date().getFullYear();
    return curY - etudiant.dateNaiss.getFullYear();
}

function afficher(etudiant) {
    console.log(etudiant.nom.toUpperCase() + " " + etudiant.prenom + " " + etudiant.dateNaiss.getDay()+"/"+etudiant.dateNaiss.getMonth()+"/"+etudiant.dateNaiss.getFullYear());
}

function ajouterNote(m,n) {
    etudiant.notes.push({
        matiere: m,
        note: n
    });
}

function Etudiant(num, nom, prenom, dateNaiss, mail) {
    return {
        numero: num,
        nom: nom,
        prenom: prenom,
        dateNaiss: dateNaiss,
        mail: mail,
        notes: []
    }
}