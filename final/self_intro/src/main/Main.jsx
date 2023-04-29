import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Hobbies from './Hobbies';
import Privacy from './Privacy';
import Contact from './Contact';

import "./Main.css";

function Main({ page }) {

    return (
        <main className='main' id='main'>
            {(page === 'Home') ? <Home /> : null}
            {/* {(page === 'About') ? <About /> : null} */}
            {(page === 'Education') ? <Education /> : null}
            {(page === 'Experience') ? <Experience /> : null}
            {(page === 'Hobbies') ? <Hobbies /> : null}
            {(page === 'Privacy') ? <Privacy /> : null}
            {(page === 'Contact') ? <Contact /> : null}
        </main>
    );
}
export default Main;