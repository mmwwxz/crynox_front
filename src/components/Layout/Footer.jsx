import React, { useState, useEffect } from 'react'
import { Button, Layout } from 'antd'
import Arrow from '../../assets/HomePage/Arrow.svg'
import Instagram from '../../assets/Instagram.svg'
import Logo from '../../assets/LogoC.svg'
import Maill from '../../assets/Mill.png'
import Phone from '../../assets/Phone.svg'
import Telegram from '../../assets/Telegram.svg'
import TikTok from '../../assets/TikTok.png'
import WhatsApp from '../../assets/WhatsApp.svg'
import style from './Footer.module.scss'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const { Footer } = Layout

const columnLink = [
	{
		title: 'Навигация по сайту',
		text: '© 2021 | ОсОО «CRYNOX» | Все права защищены.',
		text2: 'Копирование материалов запрещено.',
		column: [
			{ text: 'О нас', to: '/AboutUs', mysite: true },
			{ text: 'Услуги', to: '/Services', mysite: true, loc: true },
			{ text: 'Портфолио', to: '/Portfolio', mysite: true, loc: true },
			{ text: 'Связаться', to: '/Contact', mysite: true, loc: true },
		],
	},
	{
		title: 'Social Media',
		text: 'Политика конфиденциальности',
		text2: 'Договор оферты',
		column: [
			{
				text: 'Instagram',
				to: 'https://www.instagram.com/cryno.x/',
				mysite: false,
				logo: Instagram,
			},
			{
				text: 'TikTok',
				to: 'https://www.tiktok.com/@CRYNOX',
				mysite: false,
				logo: TikTok,
			},
			// { text: 'YouTube', to: 'https://www.youtube.com/@Crynox', mysite: false, logo: YouTube },
		],
	},
]
const contacts = {
	title: 'Контакты',
	column: [
		{
			text: '+996 706 66 11 33',
			to: 'tel:+996 706 66 11 33',
			mysite: false,
			logo: Phone,
		},
		{
			text: 'Telegram',
			to: 'https://t.me/+996706661133',
			mysite: false,
			logo: Telegram,
		},
		{
			text: 'WhatsApp',
			to: 'https://wa.me/996706661133',
			mysite: false,
			logo: WhatsApp,
		},
		{
			text: 'crynox.devtes@gmail.com',
			to: 'mailto:crynox.devtes@gmail.com',
			mysite: false,
			logo: Maill,
		},
	],
}

const CustomFooter = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const [activeLink, setActiveLink] = useState(null)

	useEffect(() => {
		setActiveLink(location.pathname)
	}, [location.pathname])

	return (
		<Footer className={style.footer}>
			<div className={style.logo}>
				<img src={Logo} alt='Logo' />
			</div>
			<div className={style.columnLinks}>
				{columnLink.map((linkGroup, index) => (
					<div key={index}>
						<h3>{linkGroup.title}</h3>
						<ul>
							{linkGroup.column.map((link, innerIndex) => (
								<li key={innerIndex}>
									{link.mysite ? (
										<img src={Arrow} alt='Arrow' />
									) : (
										<img src={link.logo} alt='Logo' />
									)}
									{link.loc ? (
										<NavLink
											to={link.to}
											style={{
												color: activeLink === link.to ? '#3B86FF' : '',
											}}
										>
											{link.text}
										</NavLink>
									) : (
										<a href={link.to} target={link.mysite ? '_self' : '_blank'}>
											{link.text}
										</a>
									)}
								</li>
							))}
						</ul>
						<div className={style.bottom}>
							<p>{linkGroup.text}</p>
							<p>{linkGroup.text2}</p>
						</div>
					</div>
				))}
			</div>
			<div className={style.contacts}>
				<h3>{contacts.title}</h3>
				<ul>
					{contacts.column.map((link, index) => (
						<li key={index}>
							<img src={link.logo} alt={link.text} />
							<a target='_blank' href={link.to}>
								{link.text}
							</a>
						</li>
					))}
				</ul>
				<div className={style.bottom}>
					<Button onClick={() => navigate('/Contact')} type='primary'>
						Связаться
					</Button>
				</div>
			</div>
		</Footer>
	)
}

export default CustomFooter
