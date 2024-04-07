import style from './Banner.module.scss'

const Banner = () => {
	return (
		<section className={style.Banner}>
			<div className={style.left}>
				<iframe
					style={{ width: '100%', borderRadius: '1.25rem', height: '100%   ' }}
					src='https://www.youtube.com/embed/S8OryU7fk4I'
					title='My Greatest Creation Is You - “Iron Man/Tony Stark Edit” | Kaleo - Way Down We Go (Slowed Reverb)'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				></iframe>
			</div>
			<div className={style.text}>
				<h3>
					Добро пожаловать в студию разработки IT - продуктов{' '}
					<span>CRYNOX</span>
				</h3>
				<p>
					Мы превращаем идеи в работающий IT-продукт, которые помогают компаниям
					эффективно продвигать свои услуги. Формируем образ компании и
					увеличиваем продажи! Полный цикл разработки - от проектирования до
					реализации. У вас есть идеи? Тогда мы будем рады вам помочь их
					реализовать
				</p>
			</div>
		</section>
	)
}

export default Banner
