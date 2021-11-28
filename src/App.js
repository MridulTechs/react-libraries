import React, { useState } from 'react'
import Global from './styles/Global'

import libs from './libraries.json'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import LibTopic from './components/LibTopic'
import Info from './components/Info'
import ScrollTop from './components/ScrollTop'
import Footer from './components/Footer'

const App = () => {
	const [search, setSearch] = useState('')

	let total = []

	for (const lib of libs) {
		total.push(lib.libraries.length)
	}
	const sum = total.reduce((partial_sum, a) => partial_sum + a, 0);
	
	return (
		<React.Fragment>
			<Global />
			<Header />
			<Info 
				sum={sum}
			/>
			<SearchBar 
				search={search}
				setSearch={setSearch} 
			/>
			<LibTopic 
				libs={libs} 
				search={search}
			/>
			<Footer/>
			<ScrollTop />
		</React.Fragment>
	)
}

export default App
