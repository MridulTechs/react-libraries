import React from 'react'
import Header from './components/Header'
import LibGrid from './components/LibGrid'
import Global from './styles/Global'

const App = () => {
	return (
		<React.Fragment>
			<Global />
			<Header />
			<LibGrid />
		</React.Fragment>
	)
}

export default App
