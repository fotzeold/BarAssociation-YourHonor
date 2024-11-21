import "./Personal.scss"
import Button from "../../../ui/Button/Button"
import { Link } from "react-router-dom"

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
					<Link to={"/services/personal-data-protection"}>
						<Button text={personal.btn} />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Personal