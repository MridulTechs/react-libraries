import React, { useState } from 'react'
import Global from './styles/Global'

import libs from './libraries.json'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import LibTopic from './components/LibTopic'

const App = () => {
	const [search, setSearch] = useState('')
	console.log(search)

	return (
		<React.Fragment>
			<Global />
			<Header />
			<SearchBar 
				search={search}
				setSearch={setSearch} 
			/>
			<LibTopic 
				libs={libs} 
				search={search}
			/>
		</React.Fragment>
	)
}

export default App
