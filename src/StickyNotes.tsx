import { useState } from 'react'
import TextArea from 'react-textarea-autosize'

const StickyNotes = () => {
	const [notesData, setNotesData] = useState([{ placeholder: 'Insert Text Here' }])

	const addNote = () => {
		setNotesData((prevState) => {
			// using spread syntax to merge to previous state and new state
			// since useState hook is not auto merge
			return [...prevState, { placeholder: 'Insert Text Here' }]
		})
	}

	// get index parameter from map method in return statement
	const deleteNote = (index: number) => {
		// create new variable to store new array of object from filter method
		// notesData.indexOf(currentElement) to get index position in state
		// and compare it to index from map
		const filterNote = notesData.filter((el: any) => notesData.indexOf(el) !== index)
		setNotesData(() => {
			return filterNote
		})
		// console.log(notesData[index])
	}

	return (
		<div className="container">
			{/* { console.log(notesData) } */}
			{ notesData.map((el: any, index: number) => {
				return (
					<div>
						<div className="note-container">
							<div className="note-action">
								<button onClick={ () => { addNote() } }>Add</button>
								<button onClick={ () => { deleteNote(index) } }>Delete</button>						
							</div>
							<TextArea className="note-body" minRows={ 6 } value={ el.placeholder } onChange={
								(ev) => {
									let notesDataCopy = [...notesData]
									notesData[index].placeholder = ev.target.value
									setNotesData(notesDataCopy)
								}
							}></TextArea>
						</div>
					</div>
				)
			}) }
		</div>
	)
}

export default StickyNotes
