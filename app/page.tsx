import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap

import Banner from '../components/banner';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <div className="App p-3 bg-dark">
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
        </div>
    );
};