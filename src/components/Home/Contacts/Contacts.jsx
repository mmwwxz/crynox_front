import { Button, Flex, Form, Input, message } from 'antd'
import PhoneInput from 'antd-phone-input'
import React, { useState } from 'react'
import InstagramIcon from '../../../assets/Instagram.svg'
import TelegramIcon from '../../../assets/Telegram.svg'
import WhatsAppIcon from '../../../assets/WhatsApp2.svg'
import style from './Contacts.module.scss'

const socialNetworks = [
	{ name: 'WhatsApp', url: 'https://wa.me/996706661133', icon: WhatsAppIcon },
	{ name: 'Telegram', url: 'https://t.me/+996706661133', icon: TelegramIcon },
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/84.61032/',
		icon: InstagramIcon,
	},
]

const Contacts = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '+',
		email: '',
	})

	const handleInputChange = (key, value) => {
		setFormData({
			...formData,
			[key]: value,
		})
	}

	const handlePhoneNumberChange = ({ countryCode, areaCode, phoneNumber }) => {
		const formattedPhoneNumber = `+${countryCode}${areaCode}${phoneNumber}`
		setFormData({
			...formData,
			phone: Number(formattedPhoneNumber),
		})
	}

	const handleSubmit = () => {
		if (formData.name && formData.phone && formData.email) {
			fetch('https://crynox.tech/form/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					phone: `+${formData.phone}`,
				}),
			})
				.then(response => {
					if (response.ok) {
						setFormData({
							name: '',
							phone: '+', // Пустая строка, чтобы очистить поле
							email: '',
						})
						message.success('Форма успешно отправлена!')
					} else {
						throw new Error('Network response was not ok')
					}
				})
				.catch(error => {
					console.error('Error submitting form:', error)
					message.error('Произошла ошибка при отправке формы.')
				})
		} else {
			message.error('Пожалуйста, заполните все обязательные поля.')
		}
	}

	return (
		<section className={style.Contacts} id='Contacts'>
			<div className={style.form}>
				<h4>
					Обсудим ваш <br /> сайт прямо сейчас
				</h4>
				<span>Оставьте свой номер, и мы перезвоним вам</span>
				<Flex vertical className={style.Flex} gap={12}>
					<Input
						placeholder='Ваше имя'
						value={formData.name}
						onChange={e => handleInputChange('name', e.target.value)}
						style={{ margin: '10px auto' }}
					/>
					<Form.Item
						name='email'
						rules={[
							{
								type: 'email',
								message: 'Пожалуйста, введите корректный email адрес',
							},
							{
								required: true,
								message: 'Пожалуйста, введите ваш адрес электронной почты',
							},
						]}
					>
						<Input
							placeholder='Почта'
							value={formData.email}
							onChange={e => handleInputChange('email', e.target.value)}
							style={{ margin: '10px auto' }}
						/>
					</Form.Item>
					<Form.Item
						name='phone'
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите ваш номер телефона',
							},
						]}
					>
						<Form
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
							}}
						>
							<PhoneInput
								placeholder='Ваш номер телефона'
								value={formData.phone}
								onChange={handlePhoneNumberChange}
								enableSearch
								maxLength={18}
							/>
						</Form>
					</Form.Item>
					<Button
						disabled={!(formData.name && formData.phone && formData.email)}
						onClick={handleSubmit}
					>
						Отправить
					</Button>
				</Flex>
			</div>
			<div className={style.text}>
				<p>
					Задайте <span>любые вопросы</span> — это <span>бесплатно</span>
				</p>
				<h4>+996 706 66 11 33</h4>
				<p>Звоните ежедневно с 9:00 до 20:00</p>
				<div className={style.hr} />
				<p>
					Или, если вы предпочитаете общение в мессенджерах, <br /> не
					стесняйтесь писать в любое время.
				</p>
				<div className={style.icons}>
					{socialNetworks.map((network, index) => (
						<a key={index} href={network.url} target='_blank'>
							<button key={network.name} className={style[network.name]}>
								{network.name}
								<img src={network.icon} alt={network.name} />
							</button>
						</a>
					))}
				</div>
				<div className={style.hr} />
				<span>Наша почта</span>
				<a href='mailto:crynox.devtes@gmail.com'>
					<h4>crynox.devtes@gmail.com</h4>
				</a>
			</div>
		</section>
	)
}

export default Contacts
