import db from '../../components/database';

export default function handler(req, res) {
    if (req.method === "GET") {
        db.all('SELECT * FROM pilote', [], (err, rows) => {
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