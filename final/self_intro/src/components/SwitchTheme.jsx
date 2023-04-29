import './SwitchTheme.css';
import { useState, useEffect } from 'react';

function SwitchTheme() {

    const [theme, setTheme] = useState('light');
    const changeTheme = () => { theme === 'light' ? setTheme('dark') : setTheme('light') };


    useEffect(() => { document.body.className = theme; }, [theme]);

    return (
        <div className='switch-theme'>
            <div
                className='switch-theme__button'
                tabIndex="0"
                onClick={changeTheme}
                aria-label='switch theme'
            >
                <i className="gg-dark-mode"></i>
            </div>
        </div>
    );
}
export default SwitchTheme;
