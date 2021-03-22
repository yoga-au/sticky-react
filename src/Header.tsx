import GithubOutlined from '@ant-design/icons/GithubOutlined'

const Header = () => {
	return (
		<div className="header-container">
			<h1 className="heading">Sticky React</h1>
			<p className="description">
				Sticky react is mini project with a goal to replicate Sticky Notes behaviour in windows using ReactJS. You can try it by editing the initial notes and/or add new note by clicking plus icon, you can delete note by clicking the trash icon. Currently, it's still missing some sticky notes behaviour like resizeable width and color theme.
			</p>

			{/* <div className="drawback-container">
				<h3>Drawback</h3>
				<ul>
					<li>Not using any backend</li>
					<li>No resizeability (width/x-axis)</li>
					<li>Can't change color theme</li>
				</ul>
			</div> */}

			<a className="btn-source-link" href="https://github.com/yoga-au/sticky-react" rel="noreferrer" target="_blank">
				<button className="btn-reset btn-source">
						<GithubOutlined />
						<span className="btn-source-txt">
							Github Homepage
						</span>
				</button>
			</a>
		</div>
	)
}

export default Header
