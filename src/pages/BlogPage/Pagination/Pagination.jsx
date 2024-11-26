import "./Pagination.scss"

const Pagination = ({ totalPages, currPage, setCurrPage }) => {

	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrPage(page);
		}
	};

	return (
		<div className="pagination">
			{
				Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i + "-pag-btn"}
						className={`pagination__button ${currPage === i + 1 ? "active" : ""}`}
						onClick={() => handlePageChange(i + 1)}
					>
						{i + 1}
					</button>
				))
			}
		</div>
	)
}

export default Pagination