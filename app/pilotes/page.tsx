'use client';

import { useEffect, useState } from 'react';

import Banner from '../../components/banner';
import Navbar from '../../components/navbar';
import CreationPilote from '../../components/creationPilote';

export default function Home() {
    const [pilotes, setPilotes] = useState([]);

    useEffect(() => {
        const fetchPilotes = async () => {
            const res = await fetch('/api/listePilotes');
            const data = await res.json();

            setPilotes(data);
        };
        
        fetchPilotes();
    }, []);

    return (
        <div style={{ backgroundColor : 'black' , minHeight: '100vh' }}>
            <table width="100%">
                <tbody>
                    <tr>
                        <td width="5%">
                            <Banner />
                        </td>
                        <td>
                            <Navbar />
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 style={{ textAlign : 'center' , color : 'yellow'}}>Gestion des Pilotes</h2>
            <br/>
            <table width="90%" style={{ margin : '0 auto' }}>
                <thead>
                    <tr>
                        <th scope="col" style={{ textAlign : 'center' , color : 'yellow' , border :'2px solid grey' }}>Id</th>
                        <th scope="col" style={{ textAlign : 'center' , color : 'yellow' , border :'2px solid grey' }}>Nom</th>
                        <th scope="col" style={{ textAlign : 'center' , color : 'yellow' , border :'2px solid grey' }}>Prénom</th>
                        <th scope="col" style={{ textAlign : 'center' , color : 'yellow' , border :'2px solid grey' }}>N°</th>
                    </tr>
                </thead>
                <tbody>
                    {pilotes.map((pilote) => (
                        <tr key={pilote.id}>
                            <td style={{ textAlign : 'center' , color : 'white' , border :'2px solid grey' }}>
                                {pilote.id}
                            </td>
                            <td style={{ textAlign : 'center' , color : 'white' , border :'2px solid grey' }}>
                                {pilote.nom}
                            </td>
                            <td style={{ textAlign : 'center' , color : 'white' , border :'2px solid grey' }}>
                                {pilote.prenom}
                            </td>
                            <td style={{ textAlign : 'center' , color : 'white' , border :'2px solid grey' }}>
                                {pilote.num}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>                    
            <CreationPilote />
            <br/>
        </div>
    );
};