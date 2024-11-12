import { Link } from "react-router-dom"
import Image from "../../ui/Image/Image"
import { icons } from "../../utils/image"
import "./MultipleLink.scss"

const MultipleLink = ({ texts }) => {
	const { info } = texts
	return (
		<div className="multiple-link">
			<a href="tel:+380962580135">
				<Image src={icons.phone} alt={"Phone"} width={"24px"} height={"24px"} />
				<span dangerouslySetInnerHTML={{ __html: info.text_second }} />
			</a>
			<Link to={"/services"}>
				<Image src={icons.portfel} alt={"portfel"} width={"24px"} height={"24px"} />
				<span dangerouslySetInnerHTML={{ __html: info.service }} />
			</Link>
		</div>
	)
}

export default MultipleLink