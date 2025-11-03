import React from "react";

//include components into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import SectionCard from "./SectionCard";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<SectionCard />
			<Footer />
		</div>
	);
};

export default Home;