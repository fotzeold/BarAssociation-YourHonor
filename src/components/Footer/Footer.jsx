import "./Footer.scss"
import { icons } from "../../utils/image"
import Image from "../../ui/Image/Image"
import { useLanguage } from "../../context/LanguageContext"
import { Link } from "react-router-dom"

const Footer = () => {
	const { texts } = useLanguage()
	const { logo, footer } = texts

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__top">
						<div className="logo">
							<Image src={icons.logo} width={"132px"} height={"112px"} alt={"logo"} />
							<div className="logo__first">
								<span className="logo__first-top">{logo.first_top}</span>
								<span className="logo__first-bottom">{logo.first_bottom}</span>
							</div>
							<div className="logo__second">
								<span className="logo__second-top">{logo.second_top}</span>
								<span className="logo__second-middle">{logo.second_middle}</span>
								<span className="logo__second-bottom">{logo.second_bottom}</span>
							</div>
						</div>

						<div className="footer__top-wrapper">
							<div className="footer__top-contacts row">
								<a href="mailto:103advocat@gmail.com" className="row">
									<Image src={icons.emailF} width={"20px"} height={"20px"} alt={"email"} />
									<span>103advocat@gmail.com</span>
								</a>
								<a href="tel:+380962580135" className="row">
									<Image src={icons.phoneF} width={"20px"} height={"20px"} alt={"phone"} />
									<span>+38 (096) 258-01-35</span>
								</a>
							</div>
							<div className="footer__top-social row">
								<a target="_blank" href="https://t.me/AAYourHonor">
									<Image src={icons.telegramF} width={"36px"} height={"36px"} alt={"telegram"} />
								</a>
								<a target="_blank" href="https://wa.me/380962580135">
									<Image src={icons.whatsappF} width={"36px"} height={"36px"} alt={"whatsapp"} />
								</a>
								<a target="_blank" href="viber://chat?number=380962580135">
									<Image src={icons.viberF} width={"36px"} height={"36px"} alt={"viber"} />
								</a>
							</div>
						</div>
					</div>
					<div className="footer__middle">
						<Image src={icons.visa} alt={"Visa"} width={"63px"} height={"30px"} />
						<Image src={icons.easyPay} alt={"easyPay"} width={"74px"} height={"30px"} />
						<Image src={icons.masrercard} alt={"masrercard"} width={"46px"} height={"30px"} />
					</div>
					<div className="footer__bottom">
						<div className="footer__bottom-link">
							<Link className="nav-link" to="/terms-of-use">{footer.terms}</Link>
							<Link className="nav-link" to="/privacy-policy">{footer.anonimus}</Link>
							<Link className="nav-link" to="/legal-aid-agreement">{footer.offer}</Link>
						</div>
						<p>© 2018-{new Date().getFullYear()}. {footer.copyright}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer