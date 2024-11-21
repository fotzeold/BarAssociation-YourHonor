import "./Loader.scss"
import Image from "../Image/Image"
import { icons } from "../../utils/image"

const Loader = () => {
	return (
		<div className="loader">
			<Image src={icons.loader} alt={"Loading..."} width={"120px"} height={"120px"} />
		</div>
	)
}

export default Loader