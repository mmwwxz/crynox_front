import React, { useState, useEffect } from 'react';
import style from './Content.module.scss';

const Content = ({ selectedFilter }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://crynox.tech/portfolio/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                setData(responseData.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    let filteredData = data;
    if (selectedFilter && selectedFilter !== 'Все') {
        filteredData = data.filter(project => project.language === selectedFilter);
    }

    return (
        <div className={style.Content}>
            <div className={style.data}>
                {filteredData.map((project, index) => (
                    <div key={index} className={style.item}>
                        <div className={style.top}>
                            <img src={project.img} alt='' />
                            <h4>{project.project_name}</h4>
                        </div>
                        <p>
                            {project.language}
                            {' '}
                            {project.framework && `(${project.framework})`}
                        </p>
                        <div className={style.btn}>
                            <a href={project.url} target='_blank' rel='noopener noreferrer'>
                                <button>Посмотреть</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;