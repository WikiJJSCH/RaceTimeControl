import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Ouvrir la base de données SQLite
const openDb = async () => {
    return open({
      filename: './database/racetimecontrol.sqlite',
      driver: sqlite3.Database,
    });
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { nom, prenom, num } = req.body; 

        if (!nom || !prenom) {
            return res.status(400).json({ error : 'Nom et prénom sont requis !' });
        }

        try {
            const db = await openDb();

            await db.run('INSERT INTO pilote (nom, prenom, num, supprime, date_creation, utilisateur_creation) VALUES(?, ?, ?, \'N\', DATETIME(\'now\'), \'ADMIN\')',
                [nom, prenom, num]
            );

            res.status(200).json({ message: 'Pilote créé avec succès !' });
        } catch (error) {
            console.error('Erreur d\'insertion : ', error);
            res.status(500).json({ error: 'Erreur lors de la création dans la base de données !' });
        }
    } else {
        res.status(405).json({ error: 'Méthode non autorisée !' });
    }
};