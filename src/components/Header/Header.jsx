import "./Header.scss"
import LanguageToggler from "../LanguageToggler/LanguageToggler"
import { useLanguage } from "../../context/LanguageContext"
import Image from "../../ui/Image/Image"
import { icons } from "../../utils/image"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const { texts } = useLanguage()
	const { logo, nav } = texts

	return (
		<header className="header">
			<div className="header__top">
				<div className="header__top-wrapper container">
					<div className="header__top-contacts row">
						<a href="mailto:103advocat@gmail.com" className="row">
							<Image src={icons.email} width={"20px"} height={"20px"} alt={"email"} />
							<span>103advocat@gmail.com</span>
						</a>
						<a href="tel:+380962580135" className="row">
							<Image src={icons.phone} width={"20px"} height={"20px"} alt={"phone"} />
							<span>+38 (096) 258-01-35</span>
						</a>
					</div>
					<div className="header__top-social row">
						<a target="_blank" href="https://t.me/AAYourHonor">
							<Image src={icons.telegram} width={"26px"} height={"26px"} alt={"telegram"} />
						</a>
						<a target="_blank" href="https://wa.me/380962580135">
							<Image src={icons.whatsapp} width={"26px"} height={"26px"} alt={"whatsapp"} />
						</a>
						<a target="_blank" href="viber://chat?number=380962580135">
							<Image src={icons.viber} width={"26px"} height={"26px"} alt={"viber"} />
						</a>
					</div>
				</div>
			</div>

			<div className="header__bottom container">
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
				<nav className={mobileMenu ? "nav-menu active" : "nav-menu"}>
					<ul>
						<li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{nav.home}</NavLink></li>
						<li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{nav.services}</NavLink></li>
						<li><NavLink to="/payment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{nav.payment}</NavLink></li>
						<li><NavLink to="/pricing" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{nav.pricing}</NavLink></li>
						<li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{nav.about}</NavLink></li>
						<li><NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{nav.blog}</NavLink></li>
					</ul>
					<LanguageToggler />
					<div className="header__nav-social row">
						<a target="_blank" href="https://t.me/AAYourHonor">
							<Image src={icons.telegram} width={"32px"} height={"32px"} alt={"telegram"} />
						</a>
						<a target="_blank" href="https://wa.me/380962580135">
							<Image src={icons.whatsapp} width={"32px"} height={"32px"} alt={"whatsapp"} />
						</a>
						<a target="_blank" href="viber://chat?number=380962580135">
							<Image src={icons.viber} width={"32px"} height={"32px"} alt={"viber"} />
						</a>
					</div>
				</nav>

				<button onClick={() => setMobileMenu(prev => !prev)} className={`burger ${mobileMenu ? "active" : ""}`}>
					<figure></figure>
					<figure></figure>
					<figure></figure>
				</button>
			</div>
		</header >
	)
}

export default Header