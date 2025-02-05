import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database/racetimecontrol.sqlite', (err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ', err);
    } else {
        console.log('Connexion à la base de données SQLite réussie !');
    }
});

export default db;