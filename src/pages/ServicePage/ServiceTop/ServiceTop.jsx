import "./ServiceTop.scss"

const ServiceTop = ({ service }) => {

	return (
		<section className="service-top" style={{ background: `url(${service.image}) center center/cover no-repeat` }}>
			<div className="container">
				<p dangerouslySetInnerHTML={{ __html: service.topText }} />
			</div>
		</section>
	)
}

export default ServiceTop