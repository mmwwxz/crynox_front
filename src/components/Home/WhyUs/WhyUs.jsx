import React from 'react'
import style from './WhyUs.module.scss'
import { NavLink } from 'react-router-dom'
import IMGs2 from '../../../assets/HomePage/IMGs2.png'

const WhyUs = () => {
	const content = [
		'Экспертиза и опыт: Наша команда состоит из высококвалифицированных специалистов с обширным опытом в области разработки IT-продуктов. Мы обладаем глубокими знаниями и умениями, которые позволяют нам создавать инновационные и эффективные решения для различных бизнесов.',
		'Качество и надежность: Мы гордимся своей репутацией надежного партнера, который предоставляет высококачественные услуги в срок. Мы стремимся к безупречному выполнению каждого проекта и предоставляем постоянную поддержку на протяжении всего сотрудничества.',
		'Партнерство и поддержка: Мы ценим долгосрочные отношения с нашими клиентами и стремимся стать не просто поставщиком услуг, а настоящим партнером в развитии и успехе их бизнеса. Мы предоставляем постоянную поддержку, консультации и помощь в решении любых вопросов и проблем.',
	]
	return (
		<section className={`${style.WhyUs} center`}>
			<h3>Почему именно мы?</h3>
			<div className={style.content}>
				<img src={IMGs2} className={style.boxImg} />
				<div className={style.boxText}>
					{content.map((item, index) => (
						<div key={index}>
							<div className={style.numbers}>{index + 1}</div> <p>{item}</p>
						</div>
					))}
					<NavLink to="AboutUs/">О нас</NavLink>
				</div>
			</div>
		</section>
	)
}

export default WhyUs
