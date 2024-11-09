import "./Personal.scss"
import Button from "../../../ui/Button/Button"

const Personal = ({ texts }) => {

	const { personal } = texts.home

	return (
		<section className="personal">
			<div className="container">
				<div className="personal__wrapper">
					<h2>{personal.title}</h2>
					<p>{personal.text}</p>
					<ul>
						{
							personal.list.map((txt, i) => <li key={i + "-pli"}>{txt}</li>)
						}
					</ul>
					<Button text={personal.btn} />
				</div>
			</div>
		</section>
	)
}

export default Personal