import { useState, useEffect, useCallback } from 'react'
import TextArea from 'react-textarea-autosize'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'

const StickyNotes = () => {
	interface Notes {
		value: string
	}

	// state to hold notes value
	const [notesData, setNotesData] = useState<Notes[]>([{ value: 'Start editing this note...' }])
	// state for checking is the notesData empty or not?
	const [isEmpty, setIsEmpty] = useState<boolean>(false)

	// update isEmpty state when notesData hold zero object
	useEffect(() => {
		if (notesData.length === 0) {
			setIsEmpty(() => {return true})
		}
		else if (notesData.length > 0) {
			setIsEmpty(() => {return false})
		}
	}, [notesData])

	// a handle to make new note, only used when all notes are empty/deleted
	const newNote = () => {
		setNotesData(() => {
			return [{ value: 'Start editing this note...' }]
		})
	}

	// a handle to make new note, only used when there is notes existed
	const addNote = () => {
		setNotesData((prevState) => {
			// using spread syntax to merge to previous state and new state
			// since useState hook is not auto merge
			return [...prevState, { value: 'Start editing this note...' }]
		})
	}

	// a handle to delete note
	// get index parameter from map method in return statement
	const deleteNote = useCallback((index: number) => {
		// create new variable to store new array of object from filter method
		// notesData.indexOf(currentElement) to get index position in state
		// and compare it to index from map
		const filterNote = notesData.filter((el: any) => notesData.indexOf(el) !== index)
		setNotesData(() => {
			return filterNote
		})
		// console.log(notesData[index])
	}, [notesData])

	return (
		<div className="container">
			{/* console log for debugging */}
			{/* { console.log(notesData) } */}
			{/* conditionaly check if isEmpty state true or false
				if true then it must be the notes are deleted, then render new note button
				if false it means there is notes data in notesData state, then render the note using map method
			*/}
			{ isEmpty
				?	<button className="btn-reset btn-new" onClick={ () => { newNote() } }>
						<PlusOutlined />
						<p className="btn-new-text">New Note</p>
					</button>
				:	notesData.map((el: any, index: number) => {
						return (
							<div>
								<div className="note-container">
									<div className="note-action">
										<button className="btn-reset btn-style" onClick={ () => { addNote() } }><PlusOutlined /></button>
										<button className="btn-reset btn-style" onClick={ () => { deleteNote(index) } }><DeleteOutlined /></button>						
									</div>
									<TextArea className="note-body" minRows={ 10 } value={ el.value } onChange={
										(ev) => {
											let notesDataCopy = [...notesData]
											notesData[index].value = ev.target.value
											setNotesData(notesDataCopy)
										}
									}></TextArea>
								</div>
							</div>
						)
					})
			}
		</div>
	)
}

export default StickyNotes
