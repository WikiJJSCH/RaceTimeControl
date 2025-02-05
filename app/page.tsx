import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap

import Banner from '../components/banner';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <div className="App p-3">
            <Banner />
            <Navbar />
        </div>
    );
};