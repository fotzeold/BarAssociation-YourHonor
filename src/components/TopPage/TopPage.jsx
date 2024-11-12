import "./TopPage.scss"

const TopPage = ({ title, second_title, third_title, backgound }) => {

	return (
		<section className="top-page" style={{ background: `url(${backgound}) center center / cover no-repeat` }}>
			<div className="container">
				<h1>{title}</h1>
				<div className="second-title">{second_title}</div>
				<div className="third-title">{third_title}</div>
			</div>
		</section>
	)
}

export default TopPage