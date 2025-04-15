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
            window.location.reload();
        } else {
            const error = await response.json();
            console.error('Erreur : ', error);
        }
    };

    return (
        <table width="75%" style={{ margin : '0 auto' }}>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} style={{ display : 'block' , margin : '0 auto' , textAlign : 'center' , backgroundColor : 'blue' , color : 'yellow' }}/>
                    </td>
                    <td>
                        <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} style={{ display : 'block' , margin : '0 auto' , textAlign : 'center' , backgroundColor : 'blue' , color : 'yellow' }}/>
                    </td>
                    <td>
                        <input type="text" placeholder="Numéro" value={num} onChange={(e) => setNum(e.target.value)} style={{ display : 'block' , margin : '0 auto' , textAlign : 'center' , backgroundColor : 'blue' , color : 'yellow' }}/>
                    </td>
                    <td>
                        <button type="submit" onClick={handleSubmit} style={{ display : 'block' , margin : '0 auto' , backgroundColor : 'grey' , width :'100%' }}><div style={{ fontWeight : 'bold' }}>Créer</div></button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CreationPilote;