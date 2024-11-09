import "./Advantages.scss"
import { icons } from "../../utils/image"
import Image from "../../ui/Image/Image"

const Advantages = ({ type, texts }) => {

	const { title, list, info } = texts.advantages

	return (
		<section className="advantages">
			<div className="container">
				<h2>{title}</h2>
				<div className="advantages__wrapper">
					{
						list.map((el, i) => {
							return (
								<div className="advantages__card" key={i + "-adv-card"}>
									<Image src={icons.hsIconsList[i]} alt={`adv-icons-${i}`} height={"74px"} width={"auto"} />
									<h3>{el.title}</h3>
									<p>{el.text}</p>
								</div>
							)
						})
					}
				</div>
				<p className="adv__bottom">
					{
						type === "home" ?
							<a href="tel:+380962580135">
								<Image src={icons.phone} alt={"Phone"} width={"24px"} height={"24px"} />
								<span dangerouslySetInnerHTML={{ __html: info.text_first }} />
							</a>
							:
							<a href="tel:+380962580135">
								<Image src={icons.phone} alt={"Phone"} width={"24px"} height={"24px"} />
								<span dangerouslySetInnerHTML={{ __html: info.text_second }} />
								<Image src={icons.portfel} alt={"portfel"} width={"24px"} height={"24px"} />
								<span dangerouslySetInnerHTML={{ __html: info.service }} />
							</a>
					}
				</p>
			</div>
		</section>
	)
}

export default Advantages