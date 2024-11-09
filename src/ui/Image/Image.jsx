const Image = ({ src, alt, width, height, className }) => {
	return (
		<img
			src={src}
			alt={alt}
			loading="lazy"
			width={width || undefined}
			height={height || undefined}
			className={className || undefined}
		/>
	)
}

export default Image