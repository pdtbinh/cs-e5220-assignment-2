import { useState } from 'react';
import './App.css';

function App() {

	const [clicked, setClicked] = useState(false)

	const handleClick = () => setClicked(true)

	return (
		<div className='App'>
			<h1>Binh Pham's button</h1>
			{
				clicked ? <p>
					Assignment completed!
				</p> : <button onClick={handleClick}>
					<p>Click me</p>
				</button>
			}
		</div>
	)
}

export default App;
