import { Button, Layout } from 'antd'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import HeaderLogoPH from '../../assets/HeaderLogoPH.svg'
import HeaderLogoWH from '../../assets/HeaderLogoWH.svg'
import Logo from '../../assets/LogoC.svg'
import style from './Header.module.scss'
import { useMediaQuery } from 'react-responsive'

const { Header } = Layout

const CustomHeader = () => {
	const location = useLocation()
	const [menuOpen, setMenuOpen] = useState(false)
	const [activeLink, setActiveLink] = useState(null)
	const [isNavFixed, setIsNavFixed] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setIsNavFixed(scrollPosition > 380)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const isTab = useMediaQuery({ maxWidth: 786 })

	useEffect(() => {
		setActiveLink(location.pathname)
	}, [location.pathname])

	const navLinks = [
		{ to: '/', text: 'Главная' },
		{ to: '/Services', text: 'Услуги' },
		{ to: '/Portfolio', text: 'Портфолио' },
		{ to: '/Contact', text: 'Связаться' },
		{ to: '/AboutUs', text: 'О нас' },
	]

	return (
		<Header className={`${style.header} ${isNavFixed ? style.fixed : ""}`} id='Header'>
			<div className={style.logo}>
				<img src={Logo} alt='Логотип' />
			</div>
			<div className={`${style.box} ${menuOpen ? style.open : style.closed}`}>
				<div className={style.links}>
					{navLinks.map((link, index) => (
						<NavLink
							key={index}
							to={link.to}
							style={{
								color: activeLink === link.to ? '#3B86FF' : '',
								borderBottom: activeLink === link.to ? '2px solid' : '',
							}}
							onClick={() => setMenuOpen(false)}
						>
							{link.text}
						</NavLink>
					))}
				</div>
				<div className={style.btns}>
					<a href='tel:+996 706 66 11 33' target='_blank'>
						<Button type='primary'>
							<img src={HeaderLogoPH} alt='Иконка звонка' />
							Позвонить
						</Button>
					</a>
					<a href='https://wa.me/996706661133' target='_blank'>
						<Button type='primary'>
							<img src={HeaderLogoWH} alt='Иконка сообщения' />
							Написать
						</Button>
					</a>
				</div>
			</div>
			{isTab && (
				<Button
					className={style.burgerBtn}
					icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
					onClick={() => setMenuOpen(!menuOpen)}
				/>
			)}
		</Header>
	)
}

export default CustomHeader
