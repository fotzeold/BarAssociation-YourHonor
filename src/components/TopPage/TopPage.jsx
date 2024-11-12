import "./TopPage.scss"

const TopPage = ({ title, second_title, third_title, backgound, styles }) => {

	return (
		<section className="top-page" style={{ background: `url(${backgound}) center center / cover no-repeat` }}>
			<div className="container" style={styles}>
				{title && <h1>{title}</h1>}
				{second_title && <div className="second-title">{second_title}</div>}
				{third_title && <div className="third-title">{third_title}</div>}
			</div>
		</section>
	)
}

export default TopPage