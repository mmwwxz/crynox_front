import style from './Sidebar.module.scss'
import { useState, useEffect } from 'react';

const Sidebar = ({ onFilterSelect }) => {
    const [languages, setLanguages] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('Все');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        async function fetchLanguages() {
            try {
                const response = await fetch('https://crynox.tech/languages/');
                const data = await response.json();
                setLanguages(data.results);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        }
        fetchLanguages();
    }, []);

    const handleFilterClick = filterName => {
        onFilterSelect(filterName);
        setSelectedFilter(filterName);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={style.Sidebar}>
            <h4>Проекты:</h4>
            <div className={style.burgerIcon} onClick={toggleMenu}>
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </div>
            <div className={`${style.filters} ${menuOpen ? style.open : ''}`}>
                <button   
                    onClick={() => handleFilterClick('Все')}
                    style={{ backgroundColor: selectedFilter === 'Все' ? 'purple' : '' }}>
                    Все
                </button>
                {languages.map(language => (
                    <button
                        key={language.name}
                        onClick={() => handleFilterClick(language.name)}
                        style={{
                            backgroundColor: selectedFilter === language.name ? 'purple' : '',
                        }}
                    >
                        {language.name}
                    </button>
                ))}
            </div>
        </div>
    ); 
};

export default Sidebar;