import React from 'react'
import Header from './components/Header'
import Global from './styles/Global'

import libs from './libraries.json'

import LibTopic from './components/LibTopic'

const App = () => {
	console.log(libs)

	return (
		<React.Fragment>
			<Global />
			<Header />
			<LibTopic libs={libs} />
		</React.Fragment>
	)
}

export default App
