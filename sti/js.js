function puiss(){
    var x=prompt("saisir un entier:");
    x=parseInt(x);
    var e=prompt("saisir l'exposant");
    e=parseInt(e);
    let p=1;
    for (let i=0;i<e;i++){
        p=x;
    }
    alert(p);
}
function fact(){
    var x=prompt("saisir un entier:");
    x=parseInt(x);
    let p=1
    for(let i=1;i<=x;i++){
        p=i;
    }
    alert("la factorielle est: "+p);
}
function prem(){
    var a=prompt("entrez un entiez")
    a=parseInt(a)
    if (a<2) {
    alert(a+"n'est pas premier")
    return}
    let nb=0
    for(let i=2; i<=a/2; i++){

        if(a%i===0){
            nb+=1
        }
        if (nb>0){
            alert(a+" n'est pas premier") 
        }
        else{alert(a+" premier")}
    }
}
function pgcd(){
    var a=prompt("donnez un entier:")
    a=parseInt(a)
    var b=prompt("donnez un autre entier:")
    b=parseInt(b)
    while (b!==0){
        let p=b;
        b=a%b;
        a=p;
    }
    alert("le pgcd est: "+a)
}
function parfait(){
    var a=prompt("saisir un entier:")
    a=parseInt(a)
    if (a===0) {alert(a+" n'est pas parfait")}
    let s=1
    for(let i=2; i<a; i++){
        if (a%i===0){
            s+=i
        }
    }
    if(s===a){
        alert(a+" est parfait")
    }
    else{
        alert(a+" n'est pas parfait")
    }
}
function bindec(){
    var a=prompt("saisir votre code binaire:")
    var b=parseInt(a,2)
    alert(b)
    
}
function bindec(){
    var a=prompt("saisir votre code binaire:")
    var b=parseInt(a,2)
    alert(b)
    
}
function decbin(){
        var n=prompt("saisir votre code decimal:")
        var n=parseInt(n)
        let binary = '';
        while (n > 0) {
          binary = (n % 2).toString() + binary;
          n = Math.floor(n / 2);
        }
        alert(binary)
}
function afficherDate() {
    var d = new Date();
    var jj = d.getDay();
    var mm = d.getMonth();
    var da = d.getDate();
    var y = d.getFullYear();

    var jour, mois;

    switch(jj) {
        case 0:
            jour = "Dimanche";
            break;
        case 1:
            jour = "Lundi";
            break;
        case 2:
            jour = "Mardi";
            break;
        case 3:
            jour = "Mercredi";
            break;
        case 4:
            jour = "Jeudi";
            break;
        case 5:
            jour = "Vendredi";
            break;
        case 6:
            jour = "Samedi";
            break;
    }

    switch(mm) {
        case 0:
            mois = "Janvier";
            break;
        case 1:
            mois = "Février";
            break;
        case 2:
            mois = "Mars";
            break;
        case 3:
            mois = "Avril";
            break;
        case 4:
            mois = "Mai";
            break;
        case 5:
            mois = "Juin";
            break;
        case 6:
            mois = "Juillet";
            break;
        case 7:
            mois = "Août";
            break;
        case 8:
            mois = "Septembre";
            break;
        case 9:
            mois = "Octobre";
            break;
        case 10:
            mois = "Novembre";
            break;
        case 11:
            mois = "Décembre";
            break;
    }

    var date = jour + " " + da + " " + mois + " " + y;
    alert(date);
}

function devinette(){
    var ran=Math.floor(Math.random() * 101)
    var x=prompt("Donner un nombre entre 1 et 100 :")
    t=1
    while((x!=ran) && (t<=5)){
        t++
        if(x>ran){ 
            alert("Moins (-) !");
            x=prompt("Donner un nombre entre 1 et 100 **:");
        }
        else if(x<ran){ 
            alert("Plus (+) !");
            x=prompt("Donner un nombre entre 1 et 100 **:");
        }
    }
    if(x==ran) alert("Vous avez Gagné !")
    else alert("Vous avez Perdu !")
}