import React from 'react'
import Phone from '../../assets/Phone.svg'
import Letter from '../../assets/Letter.svg'
import style from './Contact.module.scss'
import Contact from '../../components/Home/Contacts/Contacts'

const ContactPage = () => {
	return (
		<div className={style.Contact}>
			<div className={style.top}>
				<a href='tel:+996706661133' target='_blank'>
					<img src={Phone} alt='' />
					<div className='text'>
						<h4>Телефон</h4>
						<p>+996 706 66 11 33</p>
					</div>
				</a>
				<a href='mailto:vlad@webref.ru' target='_blank'>
					<img src={Letter} alt='' />
					<div className='text'>
						<h4>Почта</h4>
						<p>crynox.devtes@gmail.com</p>
					</div>
				</a>
			</div>
			<Contact />
		</div>
	)
}

export default ContactPage
