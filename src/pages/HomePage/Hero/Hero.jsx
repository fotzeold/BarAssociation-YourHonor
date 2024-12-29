import "./Hero.scss"
import Button from "../../../ui/Button/Button"
import { Link } from "react-router-dom"

const Hero = ({ texts }) => {
	const { hero } = texts.home
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__wrapper">
					<h1>{hero.title}</h1>
					<p>{hero.first_text}</p>
					<p className="special">{hero.second_text}</p>
					<Link to={"/services"}>
						<Button text={hero.btn} />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero