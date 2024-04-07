import { Carousel } from 'antd'
import React from 'react'
import Ava1 from '../../../assets/HomePage/Ava1.png'
import Ava2 from '../../../assets/HomePage/Ava2.png'
import Ava3 from '../../../assets/HomePage/Ava3.png'
import ComLogo1 from '../../../assets/HomePage/ComLogo1.png'
import ComLogo2 from '../../../assets/HomePage/ComLogo2.png'
import ComLogo3 from '../../../assets/HomePage/ComLogo3.png'
import { useMediaQuery } from 'react-responsive'
import style from './Reviews.module.scss'

const Reviews = () => {
	const offerData = [
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo1,
			ОсОО: 'ОсОО Белая Река',
			ava: Ava1,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo2,
			logoCenter: true,
			ОсОО: 'ОсОО Avangard ',
			ava: Ava2,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			ОсОО: 'ОсОО Империя Пиццы ',
			ava: Ava3,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo1,
			ОсОО: 'ОсОО Белая Река',
			ava: Ava1,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo2,
			logoCenter: true,
			ОсОО: 'ОсОО Avangard ',
			ava: Ava2,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo3,
			ОсОО: 'ОсОО Империя Пиццы ',
			ava: Ava3,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo1,
			ОсОО: 'ОсОО Белая Река',
			ava: Ava1,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo2,
			logoCenter: true,
			ОсОО: 'ОсОО Avangard ',
			ava: Ava2,
			name: 'Ген.Директор Алим Алимович',
		},
		{
			title: 'Топ студия',
			content:
				'Ребята молодцы, постоянно учатся новому и растут профессионально. Умеют слушать и слышать клиента.',
			logo: ComLogo3,
			ОсОО: 'ОсОО Империя Пиццы ',
			ava: Ava3,
			name: 'Ген.Директор Алим Алимович',
		},
	]
	const isTab = useMediaQuery({ maxWidth: 800 })
	const isHundred = useMediaQuery({ maxWidth: 400 })

	return (
		<section className={`${style.Reviews}`}>
			<h3>Отзывы</h3>
			<Carousel
				className={style.reviewsItems}
				slidesPerRow={isHundred ? 1 : isTab ? 2 : 3}
			>
				{offerData.map((item, index) => (
					<div
						key={index}
						className={style.reviewsItem}
						style={{ backgroundImage: `url(${item.logo})` }}
					>
						<div>
							Компания <br />
							<span>{item.ОсОО}</span>
							<h4>{item.title}</h4>
							<p>{item.content}</p>
							<img
								src={item.logo}
								className={style.companyLogo}
								alt='company-logo'
							/>
							<div className={style.userData}>
								<img src={item.ava} alt='User' />
								<span>{item.name}</span>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	)
}

export default Reviews
