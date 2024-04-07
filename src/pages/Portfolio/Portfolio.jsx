import { useState } from 'react'; // Импортируем useState
import { Sidebar, Content } from '../../components/PortfolioPage';
import style from './PortfolioPage.module.scss';

const PortfolioPage = () => {
	const [selectedFilter, setSelectedFilter] = useState('Все');

	const handleFilterSelect = (filterName) => {
		setSelectedFilter(filterName);
	};

	return (
		<div className={style.PortfolioPage}>
			<Sidebar onFilterSelect={handleFilterSelect} /> 
			<Content selectedFilter={selectedFilter} />
		</div>
	);
};

export default PortfolioPage;
