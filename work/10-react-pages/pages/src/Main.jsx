import Home from './Home';
import About from './About';
import Cats from './Cats';

import "./Main.css";

function Main({ page }) {

    // const [page, setPage] = useState('home');

    return (
        <main className="main">
            {(page === 'Home') ? <Home /> : null}
            {(page === 'About') ? <About /> : null}
            {(page === 'Cats') ? <Cats /> : null}

            {/* {(page === 'Home') && <Home />}
            {(page === 'About') && <About />}
            {(page === 'Cats') && <Cats />} */}
        </main>
    );
}
export default Main;

