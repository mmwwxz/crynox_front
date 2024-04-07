import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HButton from '../../helper/button'

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
				<HButton />
			</main>
			<Footer />
		</>
	)
}

export default Layout
