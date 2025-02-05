import React, { useState } from 'react';

const CreationPilote = () => {
    // État local pour suivre les données du formulaire
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [num, setNum] = useState('');

    const handleSubmit = async () => {
        const data = { nom, prenom, num };

        const response = await fetch('/api/creationPilote', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (response.ok) {
            const data = await response.json();
            console.log('Pilote ajouté : ', data);
        } else {
            const error = await response.json();
            console.error('Erreur : ', error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)}/>
            <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
            <input type="text" placeholder="Numéro" value={num} onChange={(e) => setNum(e.target.value)}/>
            <button onClick={handleSubmit}>Créer</button>
        </div>
    );
};

export default CreationPilote;