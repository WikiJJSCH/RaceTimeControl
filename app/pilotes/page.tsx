'use client';

import { useEffect, useState } from 'react';

import Banner from '../../components/banner';
import Navbar from '../../components/navbar';

export default function Home() {
    const [pilotes, setPilotes] = useState([]);

    useEffect(() => {
        const fetchPilotes = async () => {
            const res = await fetch('/api/pilotes');
            const data = await res.json();

            setPilotes(data);
        };
        
        fetchPilotes();
    }, []);

    return (
        <div className="App p-3">
            <Banner />
            <Navbar />
            <hr/>
            <h2 className="text-center">Gestion des Pilotes</h2>
            <br/>
            <table className="table table-warning table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">N°</th>
                    </tr>
                </thead>
                <tbody>
                    {pilotes.map((pilote) => (
                        <tr key={pilote.id}>
                            <td>
                                {pilote.id}
                            </td>
                            <td>
                                {pilote.nom}
                            </td>
                            <td>
                                {pilote.prenom}
                            </td>
                            <td>
                                {pilote.num}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};