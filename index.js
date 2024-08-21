/** @format */

fetch("aliments.json", {
  headers: { "If-None-Match": "3147526947+gzip" },
})
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const nos_plats = document.getElementById("nos_plats");
      let bloc_plat = document.createElement("div");
      bloc_plat.title = "vous êtes prêt à commender ce plat☻";
      let imagePlat = document.createElement("img");
      imagePlat.src = data[i].photo;
      let descrip = document.createElement("h3");
      descrip.innerHTML = data[i].description;
      let slogan = document.createElement("p");
      slogan.innerHTML = data[i].slogan;
      let prix = document.createElement("h4");
      prix.innerHTML = data[i].valeur;
      let linkPlat = document.createElement("a");
      linkPlat.title = "Cliquez pour passer votre commande";
      linkPlat.href = "#formulaireDeContact";
      linkPlat.innerHTML = "commander";

      nos_plats.appendChild(bloc_plat);
      bloc_plat.appendChild(imagePlat);
      bloc_plat.appendChild(descrip);
      bloc_plat.appendChild(slogan);
      bloc_plat.appendChild(prix);
      bloc_plat.appendChild(linkPlat);
    }
  });

/*************************************************** */
fetch("equipe.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const equipe = document.getElementById("equipe");
      let blocEquipe = document.createElement("div");
      let imageMembre = document.createElement("img");
      imageMembre.src = data[i].image;
      let nomMembre = document.createElement("h4");
      nomMembre.innerHTML = data[i].nom;
      let texte = document.createElement("p");
      texte.innerHTML = data[i].description;

      equipe.appendChild(blocEquipe);
      blocEquipe.appendChild(imageMembre);
      blocEquipe.appendChild(nomMembre);
      blocEquipe.appendChild(texte);
    }
  });
