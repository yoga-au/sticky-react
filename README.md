Sticky React
======

Sticky react is mini project with a goal to replicate Sticky Notes behaviour in windows using ReactJS. You can try it by editing the initial notes and/or add new note by clicking plus icon, you can delete note by clicking the trash icon. Currently, it's still missing some sticky notes behaviour like resizeable width and color theme.

Drawback/Feature to work on
------

- Not using any backend
- No resizeability (width/x-axis)
- Can't change color theme

Package used in this project
------

- react-textarea-autosize
- ant design icons

The Ideas
------

The idea behind this are by using textarea tag as sticky notes field, and then I just change textarea styling to look like a notes from windows sticky notes. I need to add 'add note' and 'delete note' function just like sticky notes application.

But before that, I need a way to repeatly render textarea by button trigger and delete it. By using useState hook, I can assign an array of object to the state and the object containing the textarea value.

```javascript
interface Notes {
		value: string
	}

	// state to hold notes value
	const [notesData, setNotesData] = useState<Notes[]>([{ value: 'Start editing this note...' }])
```

And then, by using map method, I can render multiple object in the notesData state.

```javascript
notesData.map((el: any, index: number) => {
	return // element to be rendered in DOM
	// index used for delete function
}
```

'Add note' function can be implemented by adding an object similiar to initial state. the state will be re-rendered

```javascript
// a handle to make new note, only used when there is notes existed
	const addNote = useCallback(() => {
		setNotesData((prevState) => {
			// using spread syntax to merge to previous state and new state
			// since useState hook is not auto merge
			return [...prevState, { value: 'Start editing this note...' }]
		})
	}, [])
```

'Delete note' function can be implemented by passing a parameter index from map method and use it in delete function. Use index to find specific object in notesData state. I'm using filter method to create a shallow copy of the notesData, the filter condition check if the current object index value are strictly equal to index from parameter(use indexOf method to find current object index value). After that use set the array copy to notesData

```javascript
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
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
