import "./Advantages.scss"
import { icons } from "../../utils/image"
import Image from "../../ui/Image/Image"
import MultipleLink from "../MultipleLink/MultipleLink"

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
				<div className="adv__bottom">
					{
						type === "home" ?
							<a href="tel:+380962580135">
								<Image src={icons.phone} alt={"Phone"} width={"24px"} height={"24px"} />
								<span dangerouslySetInnerHTML={{ __html: texts.info.text_first }} />
							</a>
							:
							<MultipleLink texts={texts} />
					}
				</div>
			</div>
		</section>
	)
}

export default Advantages