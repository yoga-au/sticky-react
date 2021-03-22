const Header = () => {
	return (
		<div className="header-container">
			<h1 className="heading">Sticky React</h1>
			<p className="description">
				Sticky react is mini project with a goal to replicate Sticky Notes behaviour in windows using ReactJS. You can try it by editing the initial notes and/or add new note by clicking plus icon, you can delete note by clicking the trash icon. Currently, it's still missing some sticky notes behaviour like resizeable width and color change.
			</p>

			<button className="btn-reset btn-source">Source Code</button>
		</div>
	)
}

export default Header
