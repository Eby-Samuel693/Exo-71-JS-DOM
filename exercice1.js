let monDiv = document.createElement('div');
monDiv.innerHTML= "Ce div a été ajouté en utilisant javascript";
monDiv.style.backgroundColor = "red";
monDiv.style.width = "100px";
monDiv.style.height = "100px";

let divView = document.createElement('div');
document.getElementById('viewport').appendChild(divView);

let supp = document.getElementById("aSupprimer");
supp.remove();

document.getElementById('viewport').appendChild(monDiv);








