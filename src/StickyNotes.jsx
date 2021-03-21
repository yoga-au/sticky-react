import { useState } from 'react'

const StickyNotes = () => {
	const [notesData, setNotesData] = useState([{ placeholder: 'Insert Text Here' }])

	const add = () => {
		setNotesData((prevState) => {
			// using spread syntax to merge to previous state and new state
			// since useState hook is not auto merge
			return [...prevState, { placeholder: 'Insert Text Here' }]
		})
	}

	// get index parameter from map method in return statement
	const onDelete = (index) => {
		// create new variable to store new array of object from filter method
		// notesData.indexOf(currentElement) to get index position in state
		// and compare it to index from map
		const filterNote = notesData.filter(el => notesData.indexOf(el) !== index)
		setNotesData(() => {
			return filterNote
		})
		// console.log(notesData[index])
	}

	return (
		<>
			{ notesData.map((el, index) => {
				return (
					<>
						<textarea>{ el.placeholder }</textarea>
						<button onClick={ () => { onDelete(index) } }>Delete</button>
					</>
				)
			}) }
			<br/>
			<button onClick={ () => { add() } }>Add</button>
		</>
	)
}

export default StickyNotes
