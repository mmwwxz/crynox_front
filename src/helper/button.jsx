import React, { useState, useEffect } from 'react'
import ArrowUp from '../assets/ArrowUp.svg'

const HButton = () => {
	const [isNavFixed, setIsNavFixed] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			setIsNavFixed(scrollPosition > 100)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return isNavFixed&&(
		<button
			onClick={scrollToTop}
			className='ArrowUp'
		>
			<img src={ArrowUp} alt='' />
		</button>
	)
}

export default HButton
