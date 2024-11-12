import "./ServicesList.scss"
import Image from "../../../ui/Image/Image"
import { Link } from "react-router-dom"
import Button from "../../../ui/Button/Button"

const ServicesList = ({ texts }) => {
	const { list, btn } = texts.services

	return (
		<section className="services">
			<div className="container">
				<div className="services__wrapper">
					{list && list.map(el => {
						return (
							<div className="services__card" key={el.id}>
								<Image src={el.image} height={"220px"} width={"100%"} alt={el.id} />
								<h2>{el.title}</h2>
								{el.subtitle &&
									<div className="subtitle">
										{el.subtitle}
									</div>
								}
								<ul>
									{el.ul.map((li, i) => <li key={i}>{li}</li>)}
								</ul>
								<Link to={`/services/${el.id}`}><Button text={btn} /></Link>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)

}

export default ServicesList