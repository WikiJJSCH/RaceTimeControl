import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap

export default function Navbar() {
    return (        
        <div className="d-flex justify-content-center">
            <ul className="nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" href="/">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/pilotes">Pilotes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/circuits">Circuits</Link>
                </li>
            </ul>            
        </div>
    );
};