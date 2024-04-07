import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import { useMediaQuery } from 'react-responsive'
import IMGs1_1 from '../../../assets/HomePage/IMGs1_1.png'
import IMGs1_2 from '../../../assets/HomePage/IMGs1_2.png'
import IMGs1_3 from '../../../assets/HomePage/IMGs1_3.png'
import style from './WeOffer.module.scss'

const WeOffer = ({ onFinish }) => {
	const offerData = [
		{
			title: 'Создание веб-сайтов',
			content:
				'Сайт-это визитная карточка вашего бизнеса длля привлесения клиентов и повышения узнаваймости бренда. Если вы начали новый проект, то сайт поможет вашим клиентом познакомится с вами. В случае если вы на рынке давно то вы сможете предложить вашим клиентам более удобное взаимодействие с вами.',
			logo: IMGs1_1,
		},
		{
			title: 'Создание CRM',
			content:
				'Это система для структурирования вашего бизнеса. Из-за не структурированной или плохо структурированной системы, работа требует больше времени и усилий. CRM поможет вам решить эти проблемы и упростить работу вашим сотрудникам и вам и освободит время для концентрирования на более важных вопросах',
			logo: IMGs1_2,
		},
		{
			title: 'Создание Маркетплейсов',
			content:
				'Наша команда веб-разработчиков создает уникальные и привлекательные веб-сайты, которые являются не только визуально привлекательными, но и функциональными и удобными для пользователей.',
			logo: IMGs1_3,
		},
		{
			title: 'SEO оптимизация',
			content:
				'Наша команда веб-разработчиков создает уникальные и привлекательные веб-сайты, которые являются не только визуально привлекательными, но и функциональными и удобными для пользователей.',
			logo: IMGs1_1,
		},
		{
			title: 'Разработка приложений',
			content:
				'Мы специализируемся на разработке высококачественных мобильных и веб-приложений, которые соответствуют современным стандартам и требованиям пользователей.',
			logo: IMGs1_2,
		},
		{
			title: 'Продвижение в сети',
			content:
				'Наши эксперты по маркетингу помогут вашему бизнесу стать заметным в онлайн-пространстве с помощью эффективных стратегий продвижения и рекламы.',
			logo: IMGs1_3,
		},
	]

	const isTab = useMediaQuery({ maxWidth: 900 })
	const isHundred = useMediaQuery({ maxWidth: 400 })
	const [carouselFinished, setCarouselFinished] = useState(false)

	useEffect(() => {
		if (carouselFinished) {
			onFinish() // Call the onFinish function when carousel finishes
		}
	}, [carouselFinished, onFinish])

	const handleCarouselFinish = () => {
		setCarouselFinished(true)
	}

	return (
		<section className={`${style.WeOffer}`}>
			<h3>
				Что мы <span>предлагаем</span>?
			</h3>
			<p className={style.text}>
				<span> Полная, подробная консультация:</span> совместное написание
				технического задания, сопровождение от начала и до готового проекта
			</p>
			<Carousel
				className={style.offerItems}
				slidesPerRow={isHundred ? 1 : isTab ? 2 : 3}
				autoplay
				autoplaySpeed={1500}
				afterChange={() => {
					if (offerData.length) {
						handleCarouselFinish()
					}
				}}
			>
				{offerData.map((item, index) => (
					<div key={index} className={style.offerItem}>
						<img src={item.logo} alt={item.title} />
						<h4>{item.title}</h4>
						<p>{item.content}</p>
					</div>
				))}
			</Carousel>
		</section>
	)
}

export default WeOffer
