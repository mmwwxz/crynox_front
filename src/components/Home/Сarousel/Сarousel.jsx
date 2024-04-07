import {
	FileTextOutlined,
	LeftOutlined,
	RightOutlined,
	WhatsAppOutlined,
} from '@ant-design/icons'
import { Button, Carousel } from 'antd'
import style from './Сarousel.module.scss'
import MainImage from '../../../assets/HomePage/MainImage.png'
import { NavLink } from 'react-router-dom'

function CustomCarousel() {
	const slides = [
		{
			title: 'Добро пожаловать в мир инноваций с ',
			bg: MainImage,
			content:
				'Мы - ведущие разработчики IT-продуктов, преображающих ваш бизнес и повышающих его эффективность. Наши решения помогают компаниям во всех сферах управления, от автоматизации процессов до улучшения клиентского опыта.',
			company: 'CRYNOX',
		},
		{
			title: 'Добро пожаловать в мир инноваций с ',
			bg: MainImage,
			content:
				'Мы - ведущие разработчики IT-продуктов, преображающих ваш бизнес и повышающих его эффективность. Наши решения помогают компаниям во всех сферах управления, от автоматизации процессов до улучшения клиентского опыта.',
			company: 'CRYNOX',
		},
		{
			title: 'Добро пожаловать в мир инноваций с ',
			bg: MainImage,
			content:
				'Мы - ведущие разработчики IT-продуктов, преображающих ваш бизнес и повышающих его эффективность. Наши решения помогают компаниям во всех сферах управления, от автоматизации процессов до улучшения клиентского опыта.',
			company: 'CRYNOX',
		},
	]

	return (
		<Carousel
			autoplay
			autoplaySpeed={3000}
			className={`${style.Сarousel} banner`}
		>
			{slides.map((slide, index) => (
				<div key={index} className={style.Сarousel__slide}>
					<div className={style.Сarousel__text}>
						<h3>
							{slide.title}
							<span>{slide.company}</span>
						</h3>
						<p>{slide.content}</p>
						<div className={style.btns}>
							<a href='https://wa.me/996706661133' target='_blank'>
								<Button type='primary'>
									<WhatsAppOutlined />
									Написать
								</Button>
							</a>
							<NavLink to='Portfolio'>
								<Button type='primary'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M14 6H10C8.64413 6 7.53199 6 6.60915 6.05445C4.96519 6.15144 3.92193 6.42122 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C20.0781 6.42122 19.0348 6.15144 17.3909 6.05445C16.468 6 15.3559 6 14 6Z'
											stroke='white'
											stroke-width='1.5'
										/>
										<path
											d='M6.60938 6.05445C7.43282 6.03358 8.15925 5.45491 8.43944 4.68032C8.44806 4.65649 8.4569 4.62999 8.47457 4.57697L8.50023 4.5C8.54241 4.37344 8.56351 4.31014 8.58608 4.254C8.87427 3.53712 9.54961 3.05037 10.3208 3.00366C10.3812 3 10.4479 3 10.5814 3H13.4191C13.5525 3 13.6192 3 13.6796 3.00366C14.4508 3.05037 15.1262 3.53712 15.4144 4.254C15.4369 4.31014 15.458 4.37343 15.5002 4.5L15.5259 4.57697C15.5435 4.62992 15.5524 4.65651 15.561 4.68032C15.8412 5.45491 16.5676 6.03358 17.3911 6.05445'
											stroke='white'
											stroke-width='1.5'
										/>
										<path
											d='M21.6618 8.71973C18.6519 10.6761 17.147 11.6543 15.5605 12.1472C13.2416 12.8677 10.7586 12.8677 8.43963 12.1472C6.85313 11.6543 5.34822 10.6761 2.33838 8.71973'
											stroke='white'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
										<path
											d='M8 11V13'
											stroke='white'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
										<path
											d='M16 11V13'
											stroke='white'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
									</svg>
									Портфолио
								</Button>
							</NavLink>
						</div>
					</div>
				</div>
			))}
		</Carousel>
	)
}

export default CustomCarousel
