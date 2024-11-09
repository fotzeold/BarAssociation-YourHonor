import "./LawService.scss"
import Button from "../../../ui/Button/Button"

const LawService = ({ texts }) => {
	const { law_service } = texts.home

	return (
		<section className="law-service">
			<div className="container">
				<div className="law-service__wrapper">
					<h1>
						{law_service.title}<br />
						<span>{law_service.second_title}</span>
					</h1>
					<p dangerouslySetInnerHTML={{ __html: law_service.text }} />

					<div className="law-service__cards">
						{law_service.cards.map((card, index) => (
							<div className="law-service__card" key={index}>
								<h2>{card.title}</h2>
								<ul>
									{card.list.map((item, idx) => (
										<li key={idx}>
											<span dangerouslySetInnerHTML={{ __html: item.text }}></span>
											{item.sub_list && (
												<ul>
													{item.sub_list.map((subItem, subIdx) => (
														<li key={subIdx}>{subItem}</li>
													))}
												</ul>
											)}
										</li>
									))}
								</ul>
								<Button text={law_service.btn} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default LawService