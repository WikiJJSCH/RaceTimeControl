import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap

export default function Navbar() {
    return (        
        <div>
            <table width="100%" style={{ margin : '0 auto' }}>
                <tbody>
                    <tr>
                        <td>
                            <Link href="/">Accueil</Link>
                        </td>
                        <td>
                            <Link href="/pilotes">Pilotes</Link>
                        </td>
                        <td>
                            <Link href="/circuits">Circuits</Link>
                        </td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
};