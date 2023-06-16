import './stylesheet/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import AddItem from './pages/AddItem';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

// Import images
import logo from './images/logo.png';

function App() {
	const [showMain, setShowMain] = useState(false);

	useEffect(() => {
		// splash screen fade-out after 2 seconds
		const timeout = setTimeout(() => {
			setShowMain(true);
		}, 2000);
	  
		  return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<Helmet>
				<title>GOT Characters</title>
			</Helmet>
			<div className="splash-screen"><div className="splash-content"></div></div>
			<div className="overlay"></div>
			<div className="overlay-img"></div>
			<main className={showMain ? 'show-main' : ''}>
				<Header image={logo}/>
				<Routes >
					<Route path="/" element={<Catalog />} />
					<Route path="/new-item" element={<AddItem />} /> 
					<Route path="/:id" element={<Detail />} /> 
					<Route path="/*" element={<NotFound />}  />
				</Routes>
				<Footer />
			</main>
		</>
	);
}

export default App;
