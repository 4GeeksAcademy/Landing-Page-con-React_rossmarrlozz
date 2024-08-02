import React from "react";
import Navbar from './navbar.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from './footer.jsx';
import '../../styles/index.css';

//create your first component
const Home = () => {
	return (
		<div className="page-container">
			<Navbar />
			<div className="content-wrap">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</div>
	)
}

export default Home;
