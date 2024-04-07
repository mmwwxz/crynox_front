import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Carousel } from 'antd'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import IMGs1 from '../../../assets/AboutUs/IMG1.png'
import IMGs2 from '../../../assets/AboutUs/IMG2.png'
import IMGs3 from '../../../assets/AboutUs/IMG3.png'
import IMGs4 from '../../../assets/AboutUs/IMG4.png'
import style from '../OurTeam.module.scss'
function OurTeam() {
	const isTab = useMediaQuery({ maxWidth: 800 })
	const isPhone = useMediaQuery({ maxWidth: 600 })
	const slides = [
		{
			username: 'Айдар Бакиров ',
			bg: IMGs1,
			content: 'Основатель компании "GeekStudio"',
		},
		{
			username: 'Нургазы Сулайманов',
			bg: IMGs2,
			content: 'Основатель компании "GeekStudio"',
		},
		{
			username: 'Айгерим Джандуллаева',
			bg: IMGs3,
			content: 'Руководитель компании "GeekStudio"',
		},
		{
			username: 'Айгерим Джандуллаева',
			bg: IMGs4,
			content: 'Руководитель компании "GeekStudio"',
		},
		{
			username: 'Айдар Бакиров ',
			bg: IMGs1,
			content: 'Основатель компании "GeekStudio"',
		},
		{
			username: 'Нургазы Сулайманов',
			bg: IMGs2,
			content: 'Основатель компании "GeekStudio"',
		},
		{
			username: 'Айгерим Джандуллаева',
			bg: IMGs3,
			content: 'Руководитель компании "GeekStudio"',
		},
		{
			username: 'Айгерим Джандуллаева',
			bg: IMGs4,
			content: 'Руководитель компании "GeekStudio"',
		},
		{
			username: 'Айдар Бакиров ',
			bg: IMGs1,
			content: 'Основатель компании "GeekStudio"',
		},
		{
			username: 'Нургазы Сулайманов',
			bg: IMGs2,
			content: 'Основатель компании "GeekStudio"',
		},
		{
			username: 'Айгерим Джандуллаева',
			bg: IMGs3,
			content: 'Руководитель компании "GeekStudio"',
		},
		{
			username: 'Айгерим Джандуллаева',
			bg: IMGs4,
			content: 'Руководитель компании "GeekStudio"',
		},
	]

	function CustomPrevArrow(props) {
		const { onClick } = props
		return (
			<Button
				className={`${style.customArrow} ${style.prevArrow}`}
				type='primary'
				shape='circle'
				onClick={onClick}
			>
				<LeftOutlined />
			</Button>
		)
	}

	function CustomNextArrow(props) {
		const { onClick } = props
		return (
			<Button
				className={`${style.customArrow} ${style.nextArrow}`}
				type='primary'
				shape='circle'
				onClick={onClick}
			>
				<RightOutlined />
			</Button>
		)
	}

	return (
		<section>
			<h3>Наша команда</h3>
			<Carousel
				autoplay
				className={`${style.OurTeam} banner`}
				prevArrow={<CustomPrevArrow />}
				nextArrow={<CustomNextArrow />}
				slidesPerRow={isPhone ? 1 : isTab ? 3 : 4}
				autoplaySpeed={60000}
			>
				{slides.map((slide, index) => (
					<div key={index} className={style.OurTeam__slide}>
						<div className={style.OurTeam__text}>
							<h4>{slide.username}</h4>
							<p>{slide.content}</p>
							<img src={slide.bg} alt={slide.username} />
						</div>
					</div>
				))}
			</Carousel>
		</section>
	)
}

export default OurTeam
