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
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="table-dark">
                            <div className="col-auto">
                                <input type="text" className="form-control" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)}/>
                            </div>
                        </td>
                        <td className="table-dark">
                            <div className="col-auto">
                                <input type="text" className="form-control" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                            </div>
                        </td>
                        <td className="table-dark">
                            <div className="col-auto">
                                <input type="text" className="form-control" placeholder="Numéro" value={num} onChange={(e) => setNum(e.target.value)}/>
                            </div>
                        </td>
                        <td className="table-dark">
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Créer</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CreationPilote;