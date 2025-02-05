import db from '../../components/database';

export default async function handler(req, res) {
    if (req.method === "GET") {
        db.all('SELECT * FROM pilote WHERE supprime = \'N\'', [], (err, rows) => {
            if (err) {
                res.status(500).json({ error : 'Erreur de récupération des données' });
                return;
            }
            res.status(200).json(rows);
        });
    } else {
        res.status(405).json({ error : 'Méthode non autorisée' });
    }
};