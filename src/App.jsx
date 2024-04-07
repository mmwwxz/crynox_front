import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home/Homepage.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Services from './pages/Services/Services.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Layout from './components/Layout'
import './App.scss'

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' index element={<Homepage />} />
					<Route path='/AboutUs' index element={<AboutUs />} />
					<Route path='/Portfolio' index element={<Portfolio />} />
					<Route path='/Services' index element={<Services />} />
					<Route path='/Contact' index element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	)
}
export default App
