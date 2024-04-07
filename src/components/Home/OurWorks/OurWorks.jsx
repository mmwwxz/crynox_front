import React from 'react'
import OurWorks1 from '../../../assets/HomePage/OurWorks1.png'
import OurWorks2 from '../../../assets/HomePage/OurWorks2.png'
import style from './OurWorks.module.scss'
import { Link } from 'react-router-dom'

const OurWorks = () => {
	const offerData = [
		{
			logo: OurWorks1,
		},
		{
			logo: OurWorks2,
		},
		{
			logo: OurWorks1,
		},
		{
			logo: OurWorks2,
		},
		{
			logo: OurWorks1,
		},
		{
			logo: OurWorks2,
		},
	]

	return (
		<section className={style.OurWorks}>
			<h3>
				Наши <span>работы</span>{' '}
			</h3>
			<div className={style.ourWorkstems}>
				{offerData.map((item, index) => (
					<Link to='/Portfolio' key={index} className={style.ourWorkstem}>
						<img src={item.logo} alt={item.title} />
					</Link>
				))}
			</div>
		</section>
	)
}

export default OurWorks
