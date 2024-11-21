import { Helmet } from "react-helmet-async"

const CustomHelmet = ({ meta }) => {
	const { title, descr, keywords, url, image } = meta

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={descr} />
			<meta name="keywords" content={keywords} />
			<meta name="robots" content="index, follow" />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={descr} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />

			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={descr} />
			<meta name="twitter:image" content={image} />

			<link rel="canonical" href={url} />
			<link rel="alternate" href={url} hreflang="uk" />
			<link rel="alternate" href={url} hreflang="en" />
			<link rel="alternate" href={url} hreflang="x-default" />
		</Helmet>
	)
}

export default CustomHelmet