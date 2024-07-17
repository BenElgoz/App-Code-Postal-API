document.querySelector('#cp').addEventListener('input', function() {
    if (this.value.length === 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let affichage = '<ul>'; // Initialise la variable affichage pour contenir le HTML généré
            for (let ville of data) {
                affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li>`;
            }
            affichage += '</ul>';
            document.querySelector('#villes').innerHTML = affichage; // Affiche le contenu dans l'élément avec l'id 'villes'
        })
        .catch(err => console.log('Erreur : ' + err)); // Gère les erreurs éventuelles
    }
});
