import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import IMGs6 from '../../../assets/HomePage/IMGs6.png'
import style from './Answer.module.scss'

const Answer = () => {
	const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `

	const items = [
		{
			key: '1',
			label: 'Сколько стоит сайт?',
			children: `
            Стоимость сайта варьируется от ваших нужд и предпочтений, а так же от его сложности и времени разработки. Вы можете ознакомиться с нашими услугами, их стоимостью или оставить свой номер, в форме оставленной ниже, для индивидуальной и подробной консультации.
            `,
		},
		{
			key: '2',
			label: 'Сколько времени занимаем создание сайта ?',
			children: `
            Создание сайта может сильно варьироваться в зависимости от его сложности и функциональности. Небольшие сайты-визитки могут быть созданы за несколько дней, в то время как крупные проекты, такие как интернет-магазины или корпоративные порталы, могут занять недели или даже месяцы. Важно учитывать время на проектирование, разработку, тестирование и внесение правок. Если у вас есть конкретные требования, лучше обратиться к веб-разработчику для получения более точной оценки времени и затрат.
            `,
		},
		{
			key: '3',
			label: 'Зачем нужна аренда сервера и домена?',
			children: `
            Аренда сервера и домена являются ключевыми компонентами для создания и поддержания вашего веб-проекта. В целом, аренда сервера и домена обеспечивает вам необходимую инфраструктуру для размещения вашего веб-проекта в Интернете и его успешной работы.
            `,
		},
		{
			key: '4',
			label: 'Делаете ли вы проект с нуля?',
			children: `
            Да! Мы делаем проект с нуля, сами разработаем дизайн для любого проекта и его функционал.
            `,
		},
	]

	const [openPanels, setOpenPanels] = useState({})

	const togglePanel = key => {
		setOpenPanels(prevState => ({
			...prevState,
			[key]: !prevState[key],
		}))
	}

	return (
		<section className={style.Answer}>
			<h3>
				<span>Ваши вопросы</span> - Наш ответ
			</h3>
			<div className={style.content}>
				<div className={style.Answertem}>
					{items.map((item, index) => (
						<div key={index}>
							<Dropdown
								overlay={
									<Menu>
										<Menu.Item>
											<p>{item.children}</p>
										</Menu.Item>
									</Menu>
								}
								placement='bottom'
								arrow
								open={openPanels[item.key]}
								onOpenChange={open => togglePanel(item.key)}
								trigger={['click']}
							>
								<Button type='children' className={style.button}>
									<h4>{item.label}</h4>
									<DownOutlined
										style={{
											transform: openPanels[item.key]
												? 'rotate(180deg)'
												: 'rotate(0deg)',
										}}
									/>
								</Button>
							</Dropdown>
						</div>
					))}
				</div>
				<img src={IMGs6} alt='' />
			</div>
		</section>
	)
}

export default Answer
